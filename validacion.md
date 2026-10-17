# Informe de Validación Técnica y Calidad Pedagógica

Este documento certifica y documenta la ejecución de las diez comprobaciones obligatorias sobre la plataforma interactiva **Saber Pro — 500 Preguntas**, conforme a los criterios de aceptación y especificaciones del ICFES.

---

## 1. Resumen Ejecutivo de Validación

| Chequeo | Aspecto Evaluado | Resultado | Detalle de la Comprobación |
|---|---|---|---|
| **1** | Existencia de los 5 cuadernillos HTML e `index.html` | **CONFORME [✓]** | 6 archivos HTML creados y verificados en `saber_pro_interactivo/`. |
| **2** | Cuadernillos con exactamente 100 preguntas cada uno | **CONFORME [✓]** | 100 preguntas por módulo (500 en total). Verificado por `run_validations.py`. |
| **3** | Unicidad global de identificadores (IDs) | **CONFORME [✓]** | 500 IDs únicos sin ninguna colisión (`cc-001`..`cc-100`, `rc-001`..`rc-100`, `ce-001`..`ce-100`, `ing-001`..`ing-100`, `lc-001`..`lc-100`). |
| **4** | Opciones completas y claves de respuesta válidas | **CONFORME [✓]** | 400 preguntas de selección múltiple con opciones completas y claves existentes. |
| **5** | Justificaciones y explicaciones pedagógicas | **CONFORME [✓]** | 100% de los ítems cuentan con explicación paso a paso, análisis de distractores y tips. |
| **6** | Detección de preguntas clonadas en LC, Inglés y RC | **CONFORME [✓]** | 300 pares de estímulo y enunciado únicos tras normalizar marcadores numéricos; 0 clones detectados. |
| **7** | Cronómetro, navegación, pausas y finalización | **CONFORME [✓]** | Temporizador de 120s (y 40 min para escritura) sin drift por pestañas en segundo plano. |
| **8** | Persistencia en `localStorage` y exportación de datos | **CONFORME [✓]** | Almacenamiento local verificado, reanudación de sesión y exportación a JSON y CSV. |
| **9** | Validación sintáctica de JavaScript y diseño responsivo | **CONFORME [✓]** | Compilación de sintaxis sin errores (`node -c`) y CSS responsivo accesible sin emojis. |
| **10** | Verificación de fuentes oficiales y enlaces | **CONFORME [✓]** | Enlaces oficiales del portal del ICFES, marcos de referencia y cuadernillos analizados. |

---

## 2. Detalle de Comprobaciones Ejecutadas

### Chequeo 1: Verificación de Archivos HTML
Se comprobó la existencia y estructura de los archivos de la plataforma:
- `index.html`: Portal principal con tarjetas interactivas de los 5 módulos, barra de progreso global acumulado y tabla de validación técnica.
- `competencias_ciudadanas.html`: Cuadernillo con 100 preguntas sobre Constitución, derechos, falacias, multiperspectivismo y pensamiento sistémico.
- `razonamiento_cuantitativo.html`: Cuadernillo con 100 ejercicios con tablas de datos y gráficos SVG vectoriales integrados.
- `comunicacion_escrita.html`: Taller autónomo con 100 actividades de escritura abierta, editor de texto con conteo de palabras/caracteres en tiempo real, rúbrica oficial de 3 criterios, lista de chequeo y ensayo modelo analizado.
- `ingles.html`: Cuadernillo con 100 preguntas clasificadas en las 7 partes oficiales del ICFES y niveles A1 a B2 del MCER, con explicaciones en español.
- `lectura_critica.html`: Cuadernillo con 100 preguntas vinculadas a textos filosóficos, argumentativos, literarios y de opinión.

### Chequeo 2: Conteo Exacto de Preguntas
La suite automatizada `run_validations.py` analizó las matrices de datos en JavaScript:
- `competencias_ciudadanas.js`: 100 preguntas.
- `razonamiento_cuantitativo.js`: 100 preguntas.
- `comunicacion_escrita.js`: 100 actividades.
- `ingles.js`: 100 preguntas.
- `lectura_critica.js`: 100 preguntas.
- **Total de ítems validados:** Exactamente 500.

### Chequeo 3: Unicidad de Identificadores (IDs)
Se verificó que los identificadores utilicen prefijos mnemotécnicos por módulo y numeración correlativa con ceros a la izquierda de 3 dígitos:
- Competencias Ciudadanas: `cc-001` a `cc-100`.
- Razonamiento Cuantitativo: `rc-001` a `rc-100`.
- Comunicación Escrita: `ce-001` a `ce-100`.
- Inglés: `ing-001` a `ing-100`.
- Lectura Crítica: `lc-001` a `lc-100`.
- **Colisiones encontradas:** 0.

### Chequeo 4: Opciones Completas y Claves Válidas
Para todas las preguntas de selección múltiple (módulos CC, RC, ING, LC):
- Todas cuentan con sus opciones de respuesta estructuradas (A, B, C, D; o A, B, C y A-H en las partes específicas de inglés según el estándar ICFES).
- Se validó programáticamente que el valor del campo `respuesta_correcta` esté presente dentro de las claves del objeto `opciones`.

### Chequeo 5: Justificaciones y Análisis de Distractores
Cada ítem dispone de:
1. `explicacion`: Argumentación pedagógica detallada que demuestra por qué la opción correcta es la acertada.
2. `explicacion_distractores`: Análisis pormenorizado que expone el error de razonamiento o cálculo aritmético que invalida cada una de las demás opciones.
3. `estrategia`: Consejo o heurística para abordar ejercicios análogos con agilidad mental.

### Chequeo 6: Detección de Preguntas Clonadas
Se comparó el par estímulo + enunciado de los tres bancos corregidos, normalizando los marcadores numéricos de ítem para que no oculten una repetición:
- Lectura Crítica: 100 pares únicos.
- Inglés: 100 pares únicos.
- Razonamiento Cuantitativo: 100 pares únicos.
- **Clones detectados en estos bancos:** 0.

### Chequeo 7 y 8: Temporizador, Navegación y Persistencia
Mediante la suite de pruebas unitarias `test_app_engine.js`:
- **Temporizador sin drift:** Se calculó el tiempo mediante deltas de `Date.now()`, asegurando que no se pierda precisión cuando el usuario cambia de pestaña o minimiza el navegador.
- **Alertas temporales:** Advertencia visual en naranja a los 30 segundos restantes y en rojo ante sobretiempo (>120s), registrando los segundos excedidos sin bloquear al examinado.
- **Persistencia en `localStorage`:** Se guardan las respuestas, tiempos por pregunta, preguntas marcadas y estado de finalización. La sesión puede reanudarse o reiniciarse.
- **Exportación:** Generación y descarga directa en el navegador de archivos `.json` estructurados y `.csv` tabulares con los resultados detallados.

### Chequeo 9: Validación de Sintaxis JavaScript
Se ejecutó el analizador sintáctico de Node.js (`node -c`) sobre todos los archivos `.js`:
- `js/app.js`: Sintaxis ES6 correcta.
- `js/data/competencias_ciudadanas.js`: Sintaxis correcta.
- `js/data/razonamiento_cuantitativo.js`: Sintaxis correcta.
- `js/data/comunicacion_escrita.js`: Sintaxis correcta.
- `js/data/ingles.js`: Sintaxis correcta.
- `js/data/lectura_critica.js`: Sintaxis correcta.
- **Errores de sintaxis:** 0.

### Chequeo 10: Validación de Fuentes y Referencias Oficiales
- Documentadas en `fuentes.md` con URL directa, entidad emisora, fecha de consulta y correspondencia curricular.
- Trazabilidad directa con las guías de orientación de Saber Pro del ICFES y la Constitución Política de Colombia.

---

## 3. Limitaciones Técnicas Declaradas

De conformidad con los requisitos del proyecto:
1. **Comprensión auditiva en inglés:** La prueba oficial Saber Pro del ICFES no incluye sección de escucha (listening); por lo tanto, no se evalúa audio en el módulo de inglés, respetando el constructo oficial.
2. **Calificación automatizada de textos:** En el módulo de Comunicación Escrita, no se ofrece una nota automática simulada mediante IA como si fuera una calificación humana validada; en su lugar, se proporciona una rúbrica analítica oficial de 3 criterios, lista de chequeo y un modelo de ensayo de alto nivel analizado paso a paso.
3. **Entorno local sin servidor:** La plataforma no requiere conexión a internet ni bases de datos remotas. Todo opera en el cliente; si el usuario borra manualmente la memoria caché o datos del navegador, los registros guardados en `localStorage` se restablecerán a su estado inicial.
