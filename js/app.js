/**
 * PLATAFORMA INTERACTIVA SABER PRO - 500 PREGUNTAS
 * Motor de Evaluación y Práctica Autónoma (app.js)
 * Compatible con file:// y http://, sin dependencias externas.
 */

(function () {
  "use strict";

  // Clase Principal del Cuadernillo
  class SaberProQuiz {
    constructor(config) {
      this.moduleId = config.moduleId;             // 'ciudadanas', 'cuantitativo', 'escrita', 'ingles', 'critica'
      this.moduleName = config.moduleName;
      this.questions = config.questions || [];
      this.isWritingModule = config.isWritingModule || false;
      this.storageKey = `saber_pro_${this.moduleId}_v1`;

      // Estado de ejecución
      this.currentIndex = 0;
      this.answers = {};                           // { qId: optionKey } o { qId: { text, checks, rubric } }
      this.timesSpent = {};                        // { qId: seconds }
      this.flagged = new Set();                    // Set de qId
      this.mode = 'study';                         // 'study' | 'simulacro'
      this.targetTimePerQuestion = this.isWritingModule ? 2400 : 120; // 120s estándar (2 min) o 40 min para escritura
      this.unlimitedTime = false;
      this.isFinished = false;
      this.isReviewing = false;

      // Filtro activo
      this.activeSkillFilter = 'all';
      this.activeDifficultyFilter = 'all';

      // Temporizador
      this.timerInterval = null;
      this.questionStartTime = 0;
      this.elapsedInCurrentQuestion = 0;
      this.isPaused = false;
      this.totalExamTime = 0;                      // Segundos totales acumulados

      this.init();
    }

    init() {
      this.bindElements();
      this.loadSavedState();
      this.populateFilters();
      this.setupEventListeners();
      this.renderStartScreen();
    }

    bindElements() {
      // Vistas
      this.elStartView = document.getElementById('start-view');
      this.elQuizView = document.getElementById('quiz-view');
      this.elResultsView = document.getElementById('results-view');
      this.elReviewBanner = document.getElementById('review-banner');

      // Cronómetro y barra de progreso
      this.elTimerBar = document.getElementById('timer-bar-wrapper');
      this.elTimerDisplay = document.getElementById('timer-display');
      this.elTimeFill = document.getElementById('time-fill');
      this.elProgressText = document.getElementById('progress-text');
      this.elProgressFill = document.getElementById('progress-fill');
      this.elBtnPause = document.getElementById('btn-pause-timer');

      // Pregunta y contenido
      this.elQuestionCard = document.getElementById('question-card');
      this.elQuestionNumber = document.getElementById('question-number');
      this.elBadgeCompetencia = document.getElementById('badge-competencia');
      this.elBadgeDificultad = document.getElementById('badge-dificultad');
      this.elBadgePart = document.getElementById('badge-part');
      this.elBtnFlag = document.getElementById('btn-flag');
      this.elQuestionContext = document.getElementById('question-context');
      this.elQuestionPrompt = document.getElementById('question-prompt');
      this.elQuestionGraphic = document.getElementById('question-graphic');
      this.elOptionsContainer = document.getElementById('options-container');
      this.elFeedbackCard = document.getElementById('feedback-card');

      // Elementos específicos de escritura
      this.elWritingSection = document.getElementById('writing-section');
      this.elWritingTextarea = document.getElementById('writing-textarea');
      this.elWordCount = document.getElementById('word-count');
      this.elCharCount = document.getElementById('char-count');
      this.elRubricContainer = document.getElementById('rubric-container');
      this.elModelResponseContainer = document.getElementById('model-response-container');

      // Navegación
      this.elBtnPrev = document.getElementById('btn-prev');
      this.elBtnNext = document.getElementById('btn-next');
      this.elBtnFinish = document.getElementById('btn-finish');
      this.elQuestionGrid = document.getElementById('question-grid');

      // Filtros
      this.elFilterSkill = document.getElementById('filter-skill');
      this.elFilterDifficulty = document.getElementById('filter-difficulty');

      // Modales
      this.elFinishModal = document.getElementById('finish-modal');
      this.elModalSummary = document.getElementById('modal-summary');
      this.elBtnConfirmFinish = document.getElementById('btn-confirm-finish');
      this.elBtnCancelFinish = document.getElementById('btn-cancel-finish');
    }

    loadSavedState() {
      try {
        const raw = localStorage.getItem(this.storageKey);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (data && data.moduleId === this.moduleId) {
          this.savedState = data;
        }
      } catch (e) {
        console.warn("No se pudo cargar localStorage:", e);
      }
    }

    saveState() {
      try {
        const data = {
          moduleId: this.moduleId,
          currentIndex: this.currentIndex,
          answers: this.answers,
          timesSpent: this.timesSpent,
          flagged: Array.from(this.flagged),
          mode: this.mode,
          targetTimePerQuestion: this.targetTimePerQuestion,
          unlimitedTime: this.unlimitedTime,
          isFinished: this.isFinished,
          totalExamTime: this.totalExamTime,
          updatedAt: Date.now()
        };
        localStorage.setItem(this.storageKey, JSON.stringify(data));
      } catch (e) {
        console.warn("No se pudo guardar en localStorage:", e);
      }
    }

    clearSavedState() {
      try {
        localStorage.removeItem(this.storageKey);
      } catch (e) {
        console.warn("Error al limpiar localStorage:", e);
      }
    }

    populateFilters() {
      if (!this.elFilterSkill) return;
      const skills = new Set();
      this.questions.forEach(q => {
        if (q.competencia) skills.add(q.competencia);
      });
      this.elFilterSkill.innerHTML = '<option value="all">Todas las competencias</option>';
      skills.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        this.elFilterSkill.appendChild(opt);
      });
    }

    setupEventListeners() {
      // Teclado accesible
      window.addEventListener('keydown', (e) => {
        if (this.elQuizView.style.display === 'none' || this.isWritingModule) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

        if (e.key === 'ArrowRight') this.navigateNext();
        else if (e.key === 'ArrowLeft') this.navigatePrev();
        else if (e.key.toLowerCase() === 'm') this.toggleFlag();
        else if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          const opts = ['A', 'B', 'C', 'D'];
          if (idx < opts.length) this.selectOption(opts[idx]);
        } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
          this.selectOption(e.key.toUpperCase());
        }
      });

      // Manejo de visibilidad de pestaña (no perder tiempo real)
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          // Pestaña en segundo plano: congelar delta temporal
          this.recordQuestionTime();
        } else {
          // Pestaña visible de nuevo: renovar ancla
          this.questionStartTime = Date.now();
        }
      });

      // Botones de navegación
      if (this.elBtnPrev) this.elBtnPrev.addEventListener('click', () => this.navigatePrev());
      if (this.elBtnNext) this.elBtnNext.addEventListener('click', () => this.navigateNext());
      if (this.elBtnFinish) this.elBtnFinish.addEventListener('click', () => this.openFinishModal());
      if (this.elBtnFlag) this.elBtnFlag.addEventListener('click', () => this.toggleFlag());
      if (this.elBtnPause) this.elBtnPause.addEventListener('click', () => this.togglePause());

      // Modales
      if (this.elBtnConfirmFinish) this.elBtnConfirmFinish.addEventListener('click', () => this.finishQuiz());
      if (this.elBtnCancelFinish) this.elBtnCancelFinish.addEventListener('click', () => this.closeFinishModal());

      // Filtros
      if (this.elFilterSkill) {
        this.elFilterSkill.addEventListener('change', (e) => {
          this.activeSkillFilter = e.target.value;
          this.filterQuestionList();
        });
      }
      if (this.elFilterDifficulty) {
        this.elFilterDifficulty.addEventListener('change', (e) => {
          this.activeDifficultyFilter = e.target.value;
          this.filterQuestionList();
        });
      }

      // Eventos de escritura
      if (this.elWritingTextarea) {
        this.elWritingTextarea.addEventListener('input', () => this.handleWritingInput());
      }
    }

    renderStartScreen() {
      this.elStartView.style.display = 'block';
      this.elQuizView.style.display = 'none';
      this.elResultsView.style.display = 'none';
      if (this.elTimerBar) this.elTimerBar.style.display = 'none';

      // Verificar si hay progreso guardado previo
      const resumeBox = document.getElementById('resume-session-box');
      if (resumeBox && this.savedState && !this.savedState.isFinished) {
        const answeredCount = Object.keys(this.savedState.answers || {}).length;
        resumeBox.innerHTML = `
          <div class="notice-box" style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <strong>Sesión guardada en el navegador:</strong> Has respondido ${answeredCount} de ${this.questions.length} preguntas.
            </div>
            <div style="display:flex; gap:0.5rem;">
              <button id="btn-resume-quiz" class="btn-nav btn-primary">Continuar práctica</button>
              <button id="btn-discard-quiz" class="btn-nav">Reiniciar</button>
            </div>
          </div>
        `;
        document.getElementById('btn-resume-quiz').addEventListener('click', () => this.resumeSavedSession());
        document.getElementById('btn-discard-quiz').addEventListener('click', () => {
          this.clearSavedState();
          this.savedState = null;
          resumeBox.innerHTML = '';
        });
      }

      // Iniciar nueva práctica
      const btnStart = document.getElementById('btn-start-quiz');
      if (btnStart) {
        btnStart.addEventListener('click', () => {
          // Obtener configuraciones de la vista inicial
          const modeInput = document.querySelector('input[name="quiz-mode"]:checked');
          if (modeInput) this.mode = modeInput.value;

          const timeInput = document.getElementById('select-target-time');
          if (timeInput) {
            const val = parseInt(timeInput.value, 10);
            if (val === 0) {
              this.unlimitedTime = true;
            } else {
              this.unlimitedTime = false;
              this.targetTimePerQuestion = val;
            }
          }

          this.startQuiz();
        });
      }
    }

    resumeSavedSession() {
      if (!this.savedState) return;
      this.currentIndex = this.savedState.currentIndex || 0;
      this.answers = this.savedState.answers || {};
      this.timesSpent = this.savedState.timesSpent || {};
      this.flagged = new Set(this.savedState.flagged || []);
      this.mode = this.savedState.mode || 'study';
      this.targetTimePerQuestion = this.savedState.targetTimePerQuestion || 120;
      this.unlimitedTime = this.savedState.unlimitedTime || false;
      this.totalExamTime = this.savedState.totalExamTime || 0;

      this.startQuiz(true);
    }

    startQuiz(isResumed = false) {
      this.elStartView.style.display = 'none';
      this.elQuizView.style.display = 'block';
      this.elResultsView.style.display = 'none';
      if (this.elTimerBar) this.elTimerBar.style.display = 'block';

      this.isFinished = false;
      this.isReviewing = false;

      this.renderQuestionGrid();
      this.loadQuestion(this.currentIndex);
      this.startTimer();
      if (!isResumed) this.saveState();
    }

    renderQuestionGrid() {
      if (!this.elQuestionGrid) return;
      this.elQuestionGrid.innerHTML = '';

      this.questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'grid-btn';
        btn.id = `grid-btn-${idx}`;
        btn.textContent = idx + 1;
        btn.setAttribute('aria-label', `Pregunta ${idx + 1}`);

        btn.addEventListener('click', () => {
          this.recordQuestionTime();
          this.loadQuestion(idx);
        });

        this.elQuestionGrid.appendChild(btn);
      });

      this.updateGridStatus();
    }

    updateGridStatus() {
      this.questions.forEach((q, idx) => {
        const btn = document.getElementById(`grid-btn-${idx}`);
        if (!btn) return;

        btn.classList.toggle('current', idx === this.currentIndex);

        const hasAnswer = this.answers[q.id] !== undefined;
        btn.classList.toggle('answered', hasAnswer);

        const isFlagged = this.flagged.has(q.id);
        btn.classList.toggle('flagged', isFlagged);

        // Si estamos en modo revisión o modo estudio ya respondido, indicar acierto/error
        if (this.isReviewing || (this.mode === 'study' && hasAnswer && !this.isWritingModule)) {
          const userAns = this.answers[q.id];
          if (userAns === q.respuesta_correcta) {
            btn.classList.add('correct-eval');
            btn.classList.remove('incorrect-eval');
          } else {
            btn.classList.add('incorrect-eval');
            btn.classList.remove('correct-eval');
          }
        }
      });
    }

    filterQuestionList() {
      this.questions.forEach((q, idx) => {
        const btn = document.getElementById(`grid-btn-${idx}`);
        if (!btn) return;

        const matchSkill = this.activeSkillFilter === 'all' || q.competencia === this.activeSkillFilter;
        const matchDiff = this.activeDifficultyFilter === 'all' || q.dificultad === this.activeDifficultyFilter;

        if (matchSkill && matchDiff) {
          btn.style.display = 'flex';
        } else {
          btn.style.display = 'none';
        }
      });
    }

    loadQuestion(index) {
      if (index < 0 || index >= this.questions.length) return;
      this.currentIndex = index;
      const q = this.questions[index];

      // Reiniciar ancla de tiempo para esta pregunta
      this.questionStartTime = Date.now();
      this.elapsedInCurrentQuestion = this.timesSpent[q.id] || 0;

      // Actualizar número y badges
      if (this.elQuestionNumber) this.elQuestionNumber.textContent = `Pregunta ${index + 1} de ${this.questions.length}`;
      if (this.elBadgeCompetencia) this.elBadgeCompetencia.textContent = q.competencia || 'General';
      
      if (this.elBadgeDificultad) {
        this.elBadgeDificultad.textContent = q.dificultad || 'Intermedio';
        this.elBadgeDificultad.className = `badge badge-difficulty-${(q.dificultad || 'intermedio').toLowerCase()}`;
      }

      if (this.elBadgePart) {
        if (q.parte) {
          this.elBadgePart.style.display = 'inline-block';
          this.elBadgePart.textContent = `Parte ${q.parte}`;
        } else {
          this.elBadgePart.style.display = 'none';
        }
      }

      // Marcar para revisión
      if (this.elBtnFlag) {
        const isFlagged = this.flagged.has(q.id);
        this.elBtnFlag.classList.toggle('active', isFlagged);
        this.elBtnFlag.textContent = isFlagged ? 'Marcada para revisión' : 'Marcar para revisar';
      }

      // Contexto o texto
      if (this.elQuestionContext) {
        if (q.contexto || q.texto_contexto) {
          this.elQuestionContext.style.display = 'block';
          this.elQuestionContext.innerHTML = q.contexto || q.texto_contexto;
        } else {
          this.elQuestionContext.style.display = 'none';
          this.elQuestionContext.innerHTML = '';
        }
      }

      // Gráficos o Tablas SVG / HTML
      if (this.elQuestionGraphic) {
        if (q.grafico_svg || q.tabla_datos) {
          this.elQuestionGraphic.style.display = 'flex';
          this.elQuestionGraphic.innerHTML = q.grafico_svg || q.tabla_datos;
        } else {
          this.elQuestionGraphic.style.display = 'none';
          this.elQuestionGraphic.innerHTML = '';
        }
      }

      // Enunciado
      if (this.elQuestionPrompt) {
        this.elQuestionPrompt.innerHTML = q.enunciado || q.tarea || '';
      }

      // Render según tipo: Selección múltiple vs Escritura
      if (this.isWritingModule) {
        this.renderWritingArea(q);
      } else {
        this.renderMultipleChoiceOptions(q);
      }

      // Actualizar botones de anterior/siguiente
      if (this.elBtnPrev) this.elBtnPrev.disabled = index === 0;
      if (this.elBtnNext) this.elBtnNext.disabled = index === this.questions.length - 1;

      // Actualizar cuadrícula y barra de progreso general
      this.updateProgressTrack();
      this.updateGridStatus();
      this.saveState();
    }

    renderMultipleChoiceOptions(q) {
      if (!this.elOptionsContainer) return;
      this.elOptionsContainer.innerHTML = '';
      const selectedOption = this.answers[q.id];
      const hasAnswer = selectedOption !== undefined;

      const keys = Object.keys(q.opciones || {}).sort();
      keys.forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = `opt-btn-${key}`;
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', selectedOption === key ? 'true' : 'false');

        // Contenido de la opción
        btn.innerHTML = `
          <span class="option-letter">${key}</span>
          <span class="option-text">${q.opciones[key]}</span>
        `;

        if (selectedOption === key) {
          btn.classList.add('selected');
        }

        // Si estamos en modo revisión o modo estudio y ya respondió, resaltar correcta/errónea
        if (this.isReviewing || (this.mode === 'study' && hasAnswer)) {
          if (key === q.respuesta_correcta) {
            btn.classList.add('is-correct');
          } else if (selectedOption === key && key !== q.respuesta_correcta) {
            btn.classList.add('is-incorrect');
          }
          btn.disabled = !this.isReviewing; // no cambiar en modo estudio después de responder
        }

        btn.addEventListener('click', () => {
          if (this.isReviewing) return;
          this.selectOption(key);
        });

        this.elOptionsContainer.appendChild(btn);
      });

      // Mostrar o esconder retroalimentación
      this.renderFeedback(q);
    }

    selectOption(key) {
      const q = this.questions[this.currentIndex];
      this.answers[q.id] = key;
      this.recordQuestionTime();

      this.renderMultipleChoiceOptions(q);
      this.updateGridStatus();
      this.updateProgressTrack();
      this.saveState();
    }

    renderFeedback(q) {
      if (!this.elFeedbackCard) return;
      const userAns = this.answers[q.id];
      const shouldShow = (this.mode === 'study' && userAns !== undefined) || this.isReviewing;

      if (!shouldShow) {
        this.elFeedbackCard.style.display = 'none';
        return;
      }

      this.elFeedbackCard.style.display = 'flex';
      const isCorrect = userAns === q.respuesta_correcta;
      this.elFeedbackCard.className = `feedback-card ${isCorrect ? 'correct' : 'incorrect'}`;

      let distractorsHtml = '';
      if (q.explicacion_distractores && typeof q.explicacion_distractores === 'object') {
        distractorsHtml = `
          <div class="distractor-analysis">
            <strong>Análisis de las demás opciones:</strong>
            <ul>
              ${Object.entries(q.explicacion_distractores).map(([opt, desc]) => `
                <li><strong>Opción ${opt}:</strong> ${desc}</li>
              `).join('')}
            </ul>
          </div>
        `;
      } else if (typeof q.explicacion_distractores === 'string') {
        distractorsHtml = `<div class="distractor-analysis">${q.explicacion_distractores}</div>`;
      }

      this.elFeedbackCard.innerHTML = `
        <div class="feedback-title">
          ${isCorrect ? 'Respuesta correcta' : `Respuesta seleccionada: ${userAns || 'Ninguna'} — Correcta: ${q.respuesta_correcta}`}
        </div>
        <div class="feedback-section">
          <strong>Justificación:</strong> ${q.explicacion || 'Explicación detallada no disponible.'}
        </div>
        ${distractorsHtml}
        <div class="feedback-section">
          <strong>Habilidad evaluada:</strong> ${q.afirmacion || q.competencia || 'Competencia genérica Saber Pro'}
        </div>
        ${q.estrategia ? `
          <div class="tip-box">
            <strong>Estrategia recomendada:</strong> ${q.estrategia}
          </div>
        ` : ''}
      `;
    }

    // =========================================================================
    // Manejo de Comunicación Escrita
    // =========================================================================
    renderWritingArea(q) {
      if (!this.elWritingSection) return;
      this.elWritingSection.style.display = 'block';
      if (this.elOptionsContainer) this.elOptionsContainer.style.display = 'none';

      const currentData = this.answers[q.id] || { text: '', checks: {}, rubric: {} };
      if (this.elWritingTextarea) {
        this.elWritingTextarea.value = currentData.text || '';
        this.updateWordCount(currentData.text || '');
      }

      // Renderizar rúbrica analítica y lista de chequeo
      if (this.elRubricContainer) {
        this.elRubricContainer.innerHTML = `
          <div class="rubric-accordion">
            <div class="rubric-header" id="toggle-rubric">
              <span>Rúbrica Oficial de Evaluación (3 Criterios ICFES)</span>
              <span>▼</span>
            </div>
            <div class="rubric-content" id="rubric-content" style="display:none;">
              <p><strong>1. Planteamiento definido:</strong> Adopción de una postura clara y explícita ante la pregunta. No divagar ni evadir el dilema propuesto.</p>
              <p style="margin-top:0.4rem;"><strong>2. Organización del texto:</strong> Estructura secuencial (introducción con tesis, argumentos con evidencias, y cierre), uso de conectores y coherencia.</p>
              <p style="margin-top:0.4rem;"><strong>3. Forma de expresión:</strong> Registro formal, léxico preciso, concordancia gramatical, signos de puntuación y ortografía correcta.</p>
            </div>
          </div>

          <div style="margin-top:1rem;">
            <strong>Lista de Autoevaluación y Revisión:</strong>
            <div class="checklist-group">
              ${(q.lista_chequeo || [
                "¿Mi tesis responde directamente a la pregunta planteada?",
                "¿Presento al menos dos argumentos sólidos respaldados con ejemplos o razones?",
                "¿Utilizo conectores lógicos para articular los párrafos?",
                "¿Revisé ortografía, tildes y signos de puntuación?",
                "¿La conclusión resume mi postura sin contradecir las premisas?"
              ]).map((item, i) => `
                <label class="checklist-item">
                  <input type="checkbox" class="writing-check" data-idx="${i}" ${currentData.checks && currentData.checks[i] ? 'checked' : ''}>
                  <span>${item}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `;

        const toggleBtn = document.getElementById('toggle-rubric');
        const rubricBody = document.getElementById('rubric-content');
        if (toggleBtn && rubricBody) {
          toggleBtn.addEventListener('click', () => {
            const isHidden = rubricBody.style.display === 'none';
            rubricBody.style.display = isHidden ? 'block' : 'none';
          });
        }

        // Checkboxes listener
        const checks = this.elRubricContainer.querySelectorAll('.writing-check');
        checks.forEach(chk => {
          chk.addEventListener('change', (e) => {
            const idx = e.target.getAttribute('data-idx');
            if (!this.answers[q.id]) this.answers[q.id] = { text: '', checks: {}, rubric: {} };
            this.answers[q.id].checks[idx] = e.target.checked;
            this.saveState();
          });
        });
      }

      // Modelo de respuesta orientativo
      if (this.elModelResponseContainer) {
        if (q.ejemplo_modelo) {
          this.elModelResponseContainer.innerHTML = `
            <button id="toggle-model-btn" class="btn-nav" style="margin-top:1rem; width:100%;">
              Consultar Texto Modelo Orientativo y Análisis
            </button>
            <div id="model-content" class="model-response-box" style="display:none;">
              <strong>Ejemplo de Texto Argumentativo Modelo:</strong>
              <div style="margin-top:0.5rem; font-style:italic;">
                ${q.ejemplo_modelo.replace(/\n/g, '<br>')}
              </div>
              ${q.analisis_modelo ? `
                <div style="margin-top:0.75rem; border-top:1px dashed #c084fc; padding-top:0.5rem; font-size:0.9rem;">
                  <strong>Análisis del modelo:</strong> ${q.analisis_modelo}
                </div>
              ` : ''}
              <div style="font-size:0.78rem; color:#6b21a8; margin-top:0.5rem;">
                *Nota pedagógica: Este texto es un referente de calidad estructural y argumentativa; no constituye la única postura ni respuesta válida posible.
              </div>
            </div>
          `;

          const btnToggleModel = document.getElementById('toggle-model-btn');
          const modelBox = document.getElementById('model-content');
          if (btnToggleModel && modelBox) {
            btnToggleModel.addEventListener('click', () => {
              const isHidden = modelBox.style.display === 'none';
              modelBox.style.display = isHidden ? 'block' : 'none';
              btnToggleModel.textContent = isHidden ? 'Ocultar Texto Modelo' : 'Consultar Texto Modelo Orientativo y Análisis';
            });
          }
        } else {
          this.elModelResponseContainer.innerHTML = '';
        }
      }
    }

    handleWritingInput() {
      const q = this.questions[this.currentIndex];
      const text = this.elWritingTextarea.value;
      if (!this.answers[q.id]) {
        this.answers[q.id] = { text: '', checks: {}, rubric: {} };
      }
      this.answers[q.id].text = text;
      this.updateWordCount(text);
      this.updateGridStatus();
      this.updateProgressTrack();
      this.saveState();
    }

    updateWordCount(text) {
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const chars = text.length;
      if (this.elWordCount) this.elWordCount.textContent = `${words} palabras`;
      if (this.elCharCount) this.elCharCount.textContent = `${chars} caracteres`;
    }

    // =========================================================================
    // Temporizador Robusto (Sin Drift)
    // =========================================================================
    startTimer() {
      this.stopTimer();
      this.questionStartTime = Date.now();

      this.timerInterval = setInterval(() => {
        if (this.isPaused) return;

        const now = Date.now();
        const delta = Math.floor((now - this.questionStartTime) / 1000);
        this.questionStartTime = now;

        const q = this.questions[this.currentIndex];
        this.elapsedInCurrentQuestion += delta;
        this.timesSpent[q.id] = this.elapsedInCurrentQuestion;
        this.totalExamTime += delta;

        this.updateTimerDisplay();
      }, 1000);

      this.updateTimerDisplay();
    }

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    togglePause() {
      this.isPaused = !this.isPaused;
      if (this.elBtnPause) {
        this.elBtnPause.textContent = this.isPaused ? 'Reanudar' : 'Pausar';
      }
      if (this.isPaused) {
        this.recordQuestionTime();
      } else {
        this.questionStartTime = Date.now();
      }
    }

    recordQuestionTime() {
      if (this.isPaused) return;
      const now = Date.now();
      const delta = Math.floor((now - this.questionStartTime) / 1000);
      if (delta > 0) {
        const q = this.questions[this.currentIndex];
        this.elapsedInCurrentQuestion += delta;
        this.timesSpent[q.id] = this.elapsedInCurrentQuestion;
        this.totalExamTime += delta;
        this.questionStartTime = now;
      }
    }

    updateTimerDisplay() {
      if (!this.elTimerDisplay) return;

      if (this.unlimitedTime) {
        // Modo sin límite: cronómetro progresivo
        const mins = Math.floor(this.elapsedInCurrentQuestion / 60);
        const secs = this.elapsedInCurrentQuestion % 60;
        this.elTimerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        this.elTimerDisplay.className = 'timer-display';
        if (this.elTimeFill) this.elTimeFill.style.width = '100%';
        return;
      }

      // Modo con tiempo objetivo
      const remaining = this.targetTimePerQuestion - this.elapsedInCurrentQuestion;
      const absVal = Math.abs(remaining);
      const mins = Math.floor(absVal / 60);
      const secs = absVal % 60;
      const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

      if (remaining >= 0) {
        this.elTimerDisplay.textContent = formatted;
        const pct = Math.max(0, (remaining / this.targetTimePerQuestion) * 100);
        if (this.elTimeFill) this.elTimeFill.style.width = `${pct}%`;

        if (remaining <= 30) {
          this.elTimerDisplay.className = 'timer-display timer-warning';
          if (this.elTimeFill) this.elTimeFill.className = 'time-fill warning';
        } else {
          this.elTimerDisplay.className = 'timer-display';
          if (this.elTimeFill) this.elTimeFill.className = 'time-fill';
        }
      } else {
        // Sobretiempo registrado (no bloquea al estudiante)
        this.elTimerDisplay.textContent = `+${formatted}`;
        this.elTimerDisplay.className = 'timer-display timer-overtime';
        if (this.elTimeFill) {
          this.elTimeFill.style.width = '100%';
          this.elTimeFill.className = 'time-fill overtime';
        }
      }
    }

    updateProgressTrack() {
      const answeredCount = Object.keys(this.answers).length;
      const total = this.questions.length;
      const pct = Math.round((answeredCount / total) * 100);

      if (this.elProgressText) {
        this.elProgressText.textContent = `${answeredCount} de ${total} respondidas (${pct}%)`;
      }
      if (this.elProgressFill) {
        this.elProgressFill.style.width = `${pct}%`;
      }
    }

    // =========================================================================
    // Navegación
    // =========================================================================
    navigateNext() {
      this.recordQuestionTime();
      if (this.currentIndex < this.questions.length - 1) {
        this.loadQuestion(this.currentIndex + 1);
      }
    }

    navigatePrev() {
      this.recordQuestionTime();
      if (this.currentIndex > 0) {
        this.loadQuestion(this.currentIndex - 1);
      }
    }

    toggleFlag() {
      const q = this.questions[this.currentIndex];
      if (this.flagged.has(q.id)) {
        this.flagged.delete(q.id);
      } else {
        this.flagged.add(q.id);
      }
      if (this.elBtnFlag) {
        const isFlagged = this.flagged.has(q.id);
        this.elBtnFlag.classList.toggle('active', isFlagged);
        this.elBtnFlag.textContent = isFlagged ? 'Marcada para revisión' : 'Marcar para revisar';
      }
      this.updateGridStatus();
      this.saveState();
    }

    // =========================================================================
    // Finalización y Resultados
    // =========================================================================
    openFinishModal() {
      this.recordQuestionTime();
      const answeredCount = Object.keys(this.answers).length;
      const pendingCount = this.questions.length - answeredCount;
      const flaggedCount = this.flagged.size;

      if (this.elModalSummary) {
        this.elModalSummary.innerHTML = `
          <p><strong>Resumen del cuadernillo antes de entregar:</strong></p>
          <ul style="padding-left:1.25rem; margin:0.5rem 0;">
            <li>Preguntas respondidas: <strong>${answeredCount}</strong></li>
            <li>Preguntas pendientes: <strong>${pendingCount}</strong></li>
            <li>Preguntas marcadas para revisión: <strong>${flaggedCount}</strong></li>
          </ul>
          ${pendingCount > 0 ? '<p style="color:var(--state-warning);">Aún tienes preguntas sin responder. ¿Deseas finalizar de todos modos?</p>' : '<p>Has respondido todas las preguntas.</p>'}
        `;
      }
      if (this.elFinishModal) this.elFinishModal.classList.add('open');
    }

    closeFinishModal() {
      if (this.elFinishModal) this.elFinishModal.classList.remove('open');
    }

    finishQuiz() {
      this.closeFinishModal();
      this.stopTimer();
      this.isFinished = true;
      this.saveState();
      this.renderResults();
    }

    renderResults() {
      this.elQuizView.style.display = 'none';
      this.elStartView.style.display = 'none';
      this.elResultsView.style.display = 'block';
      if (this.elTimerBar) this.elTimerBar.style.display = 'none';

      const totalQuestions = this.questions.length;
      let correctCount = 0;
      let incorrectCount = 0;
      let unattemptedCount = 0;

      const skillStats = {};
      const difficultyErrors = { 'Básico': 0, 'Intermedio': 0, 'Avanzado': 0 };
      const overtimeQuestions = [];

      this.questions.forEach((q, idx) => {
        const userAns = this.answers[q.id];
        const timeSpent = this.timesSpent[q.id] || 0;

        if (timeSpent > this.targetTimePerQuestion && !this.unlimitedTime) {
          overtimeQuestions.push({ num: idx + 1, time: timeSpent, comp: q.competencia });
        }

        const skill = q.competencia || 'General';
        if (!skillStats[skill]) {
          skillStats[skill] = { total: 0, correct: 0 };
        }
        skillStats[skill].total++;

        if (this.isWritingModule) {
          // En comunicación escrita evaluamos tareas redactadas
          if (userAns && userAns.text && userAns.text.trim().length > 50) {
            correctCount++;
            skillStats[skill].correct++;
          } else {
            unattemptedCount++;
          }
        } else {
          if (userAns === undefined) {
            unattemptedCount++;
          } else if (userAns === q.respuesta_correcta) {
            correctCount++;
            skillStats[skill].correct++;
          } else {
            incorrectCount++;
            const diff = q.dificultad || 'Intermedio';
            if (difficultyErrors[diff] !== undefined) difficultyErrors[diff]++;
          }
        }
      });

      const percentage = Math.round((correctCount / totalQuestions) * 100);
      const avgTime = Math.round(this.totalExamTime / totalQuestions);
      const totalMins = Math.floor(this.totalExamTime / 60);
      const totalSecs = this.totalExamTime % 60;

      // Renderizar el contenedor de resultados
      this.elResultsView.innerHTML = `
        <div class="view-panel results-view">
          <div class="results-header">
            <span class="brand-badge">${this.moduleName}</span>
            <h2 style="margin-top:0.5rem;">Resultados Finales del Cuadernillo</h2>
            <div class="results-score-badge">${percentage}%</div>
            <p>${this.isWritingModule ? 'Autoevaluación y actividades completadas' : `${correctCount} aciertos de ${totalQuestions} preguntas`}</p>
          </div>

          <div class="metrics-summary-grid">
            <div class="metric-box success">
              <div class="metric-num">${correctCount}</div>
              <div class="metric-label">${this.isWritingModule ? 'Redactadas' : 'Aciertos'}</div>
            </div>
            <div class="metric-box ${incorrectCount > 0 ? 'danger' : ''}">
              <div class="metric-num">${incorrectCount}</div>
              <div class="metric-label">${this.isWritingModule ? 'Por completar' : 'Errores'}</div>
            </div>
            <div class="metric-box">
              <div class="metric-num">${unattemptedCount}</div>
              <div class="metric-label">Sin responder</div>
            </div>
            <div class="metric-box">
              <div class="metric-num">${totalMins}m ${totalSecs}s</div>
              <div class="metric-label">Tiempo Total (${avgTime}s prom)</div>
            </div>
          </div>

          <div class="breakdown-section">
            <h3 style="margin-bottom:1rem; color:var(--theme-primary);">Desempeño por Competencia Evaluada</h3>
            ${Object.entries(skillStats).map(([skill, stat]) => {
              const pct = Math.round((stat.correct / stat.total) * 100);
              return `
                <div class="skill-row">
                  <div class="skill-row-info">
                    <span>${skill}</span>
                    <span>${stat.correct}/${stat.total} (${pct}%)</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width:${pct}%;"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          ${!this.isWritingModule ? `
            <div class="breakdown-section">
              <h3 style="margin-bottom:0.75rem; color:var(--theme-primary);">Distribución de Errores por Nivel de Dificultad</h3>
              <div style="display:flex; justify-content:space-around; text-align:center;">
                <div>
                  <div style="font-weight:700; font-size:1.25rem; color:#166534;">${difficultyErrors['Básico']}</div>
                  <div style="font-size:0.8rem; color:var(--text-muted);">Básico</div>
                </div>
                <div>
                  <div style="font-weight:700; font-size:1.25rem; color:#854d0e;">${difficultyErrors['Intermedio']}</div>
                  <div style="font-size:0.8rem; color:var(--text-muted);">Intermedio</div>
                </div>
                <div>
                  <div style="font-weight:700; font-size:1.25rem; color:#991b1b;">${difficultyErrors['Avanzado']}</div>
                  <div style="font-size:0.8rem; color:var(--text-muted);">Avanzado</div>
                </div>
              </div>
            </div>
          ` : ''}

          ${overtimeQuestions.length > 0 ? `
            <div class="breakdown-section" style="background:#fffbeb; border:1px solid #fcd34d;">
              <h4 style="color:#b45309; margin-bottom:0.5rem;">Gestión del Tiempo: ${overtimeQuestions.length} preguntas superaron el tiempo objetivo de ${this.targetTimePerQuestion}s</h4>
              <p style="font-size:0.85rem; color:#92400e;">
                Preguntas con sobretiempo: ${overtimeQuestions.map(o => `#${o.num} (${o.time}s)`).join(', ')}.
                En la prueba oficial Saber Pro, administrar el tiempo es crucial para asegurar completar los 100 ítems en los 200 minutos disponibles.
              </p>
            </div>
          ` : ''}

          <div class="recommendations-box">
            <h3>Recomendaciones Estratégicas para Saber Pro</h3>
            <ul>
              ${this.generateRecommendations(percentage, skillStats, difficultyErrors, overtimeQuestions.length)}
            </ul>
          </div>

          <div class="results-actions">
            <button id="btn-review-all" class="btn-nav btn-primary">Revisar Todas las Preguntas y Respuestas</button>
            <button id="btn-export-json" class="btn-nav">Exportar Resultados (JSON)</button>
            <button id="btn-export-csv" class="btn-nav">Exportar Respuestas (CSV)</button>
            <button id="btn-restart-quiz" class="btn-nav">Repetir Cuadernillo</button>
            <a href="index.html" class="btn-nav" style="text-align:center; padding-top:0.65rem;">Volver al Menú Principal</a>
          </div>
        </div>
      `;

      // Eventos de botones en resultados
      document.getElementById('btn-review-all').addEventListener('click', () => this.enterReviewMode());
      document.getElementById('btn-export-json').addEventListener('click', () => this.exportResultsJSON());
      document.getElementById('btn-export-csv').addEventListener('click', () => this.exportResultsCSV());
      document.getElementById('btn-restart-quiz').addEventListener('click', () => {
        if (confirm('¿Deseas reiniciar este cuadernillo? Se borrarán tus respuestas guardadas.')) {
          this.clearSavedState();
          location.reload();
        }
      });
    }

    generateRecommendations(pct, skillStats, diffErrors, overtimeCount) {
      if (this.moduleId === 'ingles') {
        return this.generateEnglishRecommendations(pct, overtimeCount);
      }

      const recs = [];
      if (pct >= 85) {
        recs.push("¡Excelente dominio conceptual! Tu rendimiento está alineado con el nivel 4 (avanzado) del ICFES.");
        recs.push("Enfócate en mantener el ritmo de respuesta y pulir la resolución de los ítems avanzados.");
      } else if (pct >= 65) {
        recs.push("Buen desempeño general con bases sólidas (nivel 3 de desempeño).");
        recs.push("Refuerza las afirmaciones donde el porcentaje de acierto fue inferior al 70%.");
      } else {
        recs.push("Se recomienda una revisión temática prioritaria de los conceptos nucleares de este módulo.");
        recs.push("Utiliza el Modo Estudio para analizar detenidamente la justificación de los distractores en cada error.");
      }

      if (diffErrors['Básico'] > 2) {
        recs.push("Atención: tuviste errores en preguntas de nivel básico. Lee atentamente el enunciado completo antes de mirar las opciones para evitar distractores superficiales.");
      }

      if (overtimeCount > 15) {
        recs.push("Control del tiempo: Dedicaste más de 120 segundos a más de 15 preguntas. Recuerda que no debes quedarte atascado; descarta opciones y marca para revisión si dudas.");
      }

      // Recomendación por competencia con menor puntuación
      let lowestSkill = null;
      let minPct = 101;
      Object.entries(skillStats).forEach(([s, st]) => {
        const p = Math.round((st.correct / st.total) * 100);
        if (p < minPct) {
          minPct = p;
          lowestSkill = s;
        }
      });
      if (lowestSkill && minPct < 75) {
        recs.push(`Área clave de mejora: <strong>${lowestSkill}</strong> (${minPct}%). Revisa con detenimiento las preguntas de esta competencia en el modo revisión.`);
      }

      return recs.map(r => `<li>${r}</li>`).join('');
    }

    generateEnglishRecommendations(pct, overtimeCount) {
      const partAdvice = {
        1: ['Avisos y lugares', 'Relaciona el propósito del aviso con pistas concretas del texto, como el servicio, el lugar o la instrucción.'],
        2: ['Vocabulario y definiciones', 'Repasa palabras por función y contexto; distingue términos parecidos comprobando qué característica define cada uno.'],
        3: ['Conversaciones', 'Practica las funciones comunicativas (pedir, disculparse, agradecer y ofrecer) y elige una respuesta que continúe el intercambio naturalmente.'],
        4: ['Gramática en contexto', 'Repasa tiempos verbales, pronombres, concordancia y conectores; usa las palabras temporales y la estructura de la oración como pistas.'],
        5: ['Comprensión literal', 'Busca en el pasaje las palabras clave de la pregunta y confirma cada respuesta con la frase exacta que aporta el dato.'],
        6: ['Comprensión inferencial', 'Distingue la información explícita de la conclusión: apoya cada inferencia en varias pistas del texto y evita añadir supuestos.'],
        7: ['Léxico y gramática avanzada', 'Practica colocaciones, phrasal verbs y formas gramaticales; lee la oración completa alrededor del espacio antes de elegir.']
      };
      const partStats = {};
      let unansweredCount = 0;

      this.questions.forEach(q => {
        const answer = this.answers[q.id];
        if (answer === undefined) {
          unansweredCount++;
          return;
        }
        const part = q.parte;
        if (!partStats[part]) partStats[part] = { total: 0, correct: 0 };
        partStats[part].total++;
        if (answer === q.respuesta_correcta) partStats[part].correct++;
      });

      const recs = [];
      if (pct < 60) {
        recs.push('Prioriza sesiones cortas en Modo Estudio: responde, revisa la evidencia de la justificación y vuelve a intentar las preguntas falladas.');
      } else if (pct < 85) {
        recs.push('Vas construyendo una buena base. Practica primero las partes con menor porcentaje y confirma tus respuestas con pistas del texto.');
      } else {
        recs.push('Buen dominio general. Mantén la práctica y revisa las partes con errores para afianzar precisión y vocabulario.');
      }

      const weakestParts = Object.entries(partStats)
        .map(([part, stats]) => ({
          part: Number(part),
          pct: Math.round((stats.correct / stats.total) * 100),
          total: stats.total
        }))
        .sort((a, b) => a.pct - b.pct)
        .slice(0, 3);

      weakestParts.forEach(({ part, pct: partPct, total }) => {
        const [label, advice] = partAdvice[part];
        recs.push(`Parte ${part} — ${label}: ${partPct}% (${total} respondidas). ${advice}`);
      });

      if (unansweredCount > 0) {
        recs.push(`Te quedan ${unansweredCount} preguntas sin responder; complétalas para obtener un diagnóstico más representativo de las siete partes.`);
      }
      if (overtimeCount > 0) {
        recs.push(`En ${overtimeCount} pregunta(s) superaste el tiempo objetivo. Practica localizar primero la pista relevante y descartar opciones sin volver a leer todo el pasaje.`);
      }
      if (weakestParts.length === 0) {
        recs.push('Responde algunas preguntas para recibir recomendaciones específicas por parte del examen.');
      }

      return recs.map(recommendation => `<li>${recommendation}</li>`).join('');
    }

    enterReviewMode() {
      this.isReviewing = true;
      this.elResultsView.style.display = 'none';
      this.elQuizView.style.display = 'block';
      if (this.elReviewBanner) {
        this.elReviewBanner.style.display = 'block';
        this.elReviewBanner.innerHTML = `
          <div class="notice-box" style="display:flex; justify-content:space-between; align-items:center; background:#f0fdf4; border-color:#86efac; color:#166534;">
            <span><strong>Modo Revisión:</strong> Estás revisando tus respuestas con retroalimentación completa y claves oficiales.</span>
            <button id="btn-back-to-results" class="btn-nav btn-primary">Volver a Resultados</button>
          </div>
        `;
        document.getElementById('btn-back-to-results').addEventListener('click', () => {
          this.renderResults();
        });
      }
      this.renderQuestionGrid();
      this.loadQuestion(0);
    }

    // =========================================================================
    // Exportación de Datos
    // =========================================================================
    exportResultsJSON() {
      const data = {
        modulo: this.moduleName,
        fecha: new Date().toISOString(),
        totalPreguntas: this.questions.length,
        respuestas: this.answers,
        tiemposPorPregunta: this.timesSpent,
        tiempoTotalSegundos: this.totalExamTime
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      this.triggerDownload(blob, `resultados_${this.moduleId}_saber_pro.json`);
    }

    exportResultsCSV() {
      const rows = [
        ['Numero', 'ID', 'Competencia', 'Dificultad', 'RespuestaUsuario', 'RespuestaCorrecta', 'EsCorrecta', 'TiempoSegundos']
      ];

      this.questions.forEach((q, idx) => {
        const uAns = this.answers[q.id];
        let ansStr = '';
        let isCorrect = false;

        if (this.isWritingModule) {
          ansStr = uAns && uAns.text ? `"${uAns.text.replace(/"/g, '""').substring(0, 100)}..."` : 'Sin texto';
          isCorrect = Boolean(uAns && uAns.text && uAns.text.length > 50);
        } else {
          ansStr = uAns || 'NO_RESPONDIDA';
          isCorrect = uAns === q.respuesta_correcta;
        }

        const time = this.timesSpent[q.id] || 0;
        rows.push([
          idx + 1,
          q.id,
          `"${(q.competencia || '').replace(/"/g, '""')}"`,
          q.dificultad || 'Intermedio',
          ansStr,
          q.respuesta_correcta || 'N/A',
          isCorrect ? 'SI' : 'NO',
          time
        ]);
      });

      const csvContent = rows.map(r => r.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      this.triggerDownload(blob, `respuestas_${this.moduleId}_saber_pro.csv`);
    }

    triggerDownload(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

  // Exportar al ámbito global
  window.SaberProQuiz = SaberProQuiz;
})();
