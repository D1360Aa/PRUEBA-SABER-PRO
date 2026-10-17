# Plataforma Interactiva de Preparación Saber Pro — 500 Preguntas

Plataforma educativa web autónoma, interactiva y accesible diseñada para el entrenamiento exhaustivo en los cinco módulos genéricos del examen de Estado de la calidad de la educación superior **Saber Pro** en Colombia, administrado por el **Instituto Colombiano para la Evaluación de la Educación (ICFES)**.

El sistema contiene **cinco cuadernillos independientes con exactamente 100 preguntas originales cada uno (500 preguntas en total)**, construidas estrictamente bajo la metodología del **Diseño Centrado en Evidencias (DCE)** del ICFES.

---

## 1. Módulos y Estructura Curricular

| Cuadernillo | Archivo HTML | Preguntas | Competencias Evaluadas | Formato |
|---|---|---|---|---|
| **Competencias Ciudadanas** | `competencias_ciudadanas.html` | 100 | Pensamiento social, Argumentación, Multiperspectivismo y Pensamiento sistémico. | Opción múltiple (A-D) con retroalimentación detallada. |
| **Razonamiento Cuantitativo** | `razonamiento_cuantitativo.html` | 100 | Interpretación y representación, Formulación y ejecución, Argumentación. | Opción múltiple (A-D) con tablas y gráficos SVG vectoriales. |
| **Comunicación Escrita** | `comunicacion_escrita.html` | 100 | Planteamiento definido, Organización del texto, Forma de expresión. | Taller abierto con editor de texto, rúbrica analítica, lista de cotejo y modelo analizado. |
| **Inglés** | `ingles.html` | 100 | Partes 1 a 7 según el Marco Común Europeo (A1 a B2). | Avisos, vocabulario, diálogos, cloze tests y lectura literal/inferencial con retroalimentación contextual y recomendaciones por parte. |
| **Lectura Crítica** | `lectura_critica.html` | 100 | Contenidos locales, Articulación global de partes, Reflexión y evaluación. | Opción múltiple (A-D) con textos filosóficos, literarios, científicos y de opinión. |

---

## 2. Instrucciones de Instalación y Ejecución

La plataforma es **100% cliente (Frontend puro)** en HTML5, CSS3 y JavaScript ES6 estándar. No requiere bases de datos, dependencias externas, frameworks pesados ni conexión a internet.

### Opción A: Ejecución Directa (Sin Servidor)
1. Descomprime o descarga la carpeta del proyecto `saber_pro_interactivo/`.
2. Haz doble clic directamente sobre el archivo **`index.html`** (o sobre cualquiera de los cuadernillos individuales como `competencias_ciudadanas.html`).
3. La aplicación se ejecutará instantáneamente en tu navegador web predeterminado (Chrome, Edge, Firefox, Safari) mediante el protocolo `file://`.

### Opción B: Ejecución con Servidor Local (Opcional)
Si deseas ejecutar la plataforma a través de un servidor web local:
- **Con Python:**
  ```bash
  cd saber_pro_interactivo
  python -m http.server 8080
  ```
  Luego abre en tu navegador: `http://localhost:8080`

- **Con Node.js:**
  ```bash
  cd saber_pro_interactivo
  npx serve .
  ```

### Opción C: Ejecución con Docker (Acceso desde Celular en Red Wi-Fi)
La plataforma incluye configuración lista para Docker con servidor Nginx optimizado y compresión Gzip:
```bash
# Levantar el contenedor en segundo plano en el puerto 8080
docker compose up -d

# Ver estado del contenedor
docker ps --filter "name=saber-pro-app"

# Detener el contenedor
docker compose down
```
Para ingresar desde tu celular o cualquier dispositivo en la misma red Wi-Fi, abre en el navegador móvil:
`http://<TU_IP_LOCAL>:8080` (ejemplo: `http://192.168.1.7:8080`)

---

## 3. Funcionalidades Principales

### A. Pantalla de Inicio y Configuración de Sesión
- Muestra el nombre del módulo, competencias evaluadas, número total de preguntas (100) y desglose de dificultad.
- Permite seleccionar entre dos modos de aprendizaje:
  1. **Modo Estudio:** Muestra la retroalimentación pedagógica, la respuesta correcta y el análisis de distractores de inmediato al seleccionar una opción.
  2. **Modo Simulacro:** Oculta las respuestas correctas y explicaciones durante la prueba, revelándolas únicamente al finalizar en el informe detallado de resultados.
- Configuración de tiempo objetivo: selector con opciones de 120 segundos (estándar), 90 segundos (práctica rápida), 180 segundos (práctica pausada) o modo sin límite de tiempo.
- Detección de sesiones previas en curso con opción de reanudar o reiniciar.

### B. Cronómetro de Práctica Robusto (Sin Pérdida por Desplazamiento)
- Cronómetro visible con tiempo objetivo de referencia (120 segundos por ítem; 200 minutos para los 100 ítems; 40 minutos configurables en Comunicación Escrita).
- Barra de progreso del tiempo por pregunta y barra de avance general sobre el total de preguntas respondidas.
- **Manejo de visibilidad de pestañas:** El temporizador calcula el tiempo transcurrido mediante deltas de tiempo real (`Date.now()`), evitando desfases o pausas involuntarias cuando el usuario cambia de pestaña.
- **Alertas visuales accesibles:**
  - Advertencia preventiva en color ámbar cuando restan 30 segundos o menos.
  - Alerta en color rojo cuando se supera el tiempo objetivo (sobretiempo), sin bloquear al estudiante, registrando los segundos excedidos para el informe final de ritmo de respuesta.
- Botón de pausa y reanudación en cualquier instante.

### C. Navegación Ágil y Accesibilidad
- Botones de "Anterior" y "Siguiente" con atajos de teclado accesibles:
  - Flechas `←` y `→` para desplazarse entre preguntas.
  - Teclas `1`, `2`, `3`, `4` o `A`, `B`, `C`, `D` para seleccionar opciones.
  - Tecla `M` para marcar o desmarcar una pregunta para revisión posterior.
- Barra lateral con cuadrícula interactiva de 100 casillas numeradas con estados visuales:
  - **Respondida:** Fondo con el color institucional del módulo.
  - **Pendiente:** Fondo neutro.
  - **Marcada para revisión:** Indicador ámbar en la esquina superior.
  - **Pregunta actual:** Borde destacado.
- Filtros dinámicos por competencia y por nivel de dificultad (Básico, Intermedio, Avanzado).
- Modal accesible de confirmación antes de entregar el cuadernillo, informando cuántas preguntas quedan pendientes y cuántas están marcadas.

### D. Retroalimentación Pedagógica Formativa
- Desglose explicativo paso a paso de la solución acertada.
- **Análisis de distractores:** Justificación pormenorizada de por qué cada una de las opciones restantes es incorrecta o engañosa.
- Indicación de la habilidad evaluada según la matriz oficial del ICFES.
- Estrategia o tip recomendado para resolver problemas similares con agilidad mental.

### E. Módulo Especial de Comunicación Escrita
- **Editor de texto interactivo:** Área de redacción con conteo automático de palabras y caracteres en tiempo real.
- **Rúbrica oficial analítica desplegable:**
  1. *Planteamiento definido:* Tesis explícita y directa frente al dilema.
  2. *Organización del texto:* Estructura retórica secuencial (introducción, desarrollo argumentativo en párrafos con conectores y conclusión).
  3. *Forma de expresión:* Registro culto formal, vocabulario preciso, corrección gramatical, tildes y puntuación.
- **Lista de cotejo autoevaluativa:** 5 preguntas clave de revisión para validar la calidad del texto antes de finalizar.
- **Texto modelo orientativo:** Ejemplo de ensayo argumentativo de alto nivel con análisis paso a paso de su estructura y recursos retóricos (claramente advertido como modelo referencial, no como única postura válida).

### F. Informe Final de Resultados y Métricas de Rendimiento
- Resumen global con porcentaje de acierto, preguntas acertadas, erróneas y sin responder.
- **Desempeño por competencia:** Barras de porcentaje de acierto en cada una de las habilidades evaluadas.
- **Distribución de errores por dificultad:** Cuantificación de fallas en preguntas básicas, intermedias y avanzadas.
- **Métricas de tiempo:** Tiempo total empleado, tiempo promedio por pregunta y listado de preguntas donde se excedió el tiempo objetivo.
- **Recomendaciones pedagógicas personalizadas:** Consejos estratégicos generados dinámicamente con base en los errores cometidos.
- **Modo Revisión Completa:** Permite recorrer todas las preguntas del examen visualizando la opción elegida, la respuesta correcta y la justificación.
- **Exportación de resultados:** Descarga directa de reportes en formato **JSON** estructurado o **CSV** tabular.

### G. Persistencia en `localStorage`
- Todos los datos de la práctica (respuestas, tiempos por pregunta, marcas de revisión, modo seleccionado) se guardan automáticamente en el almacenamiento local del navegador (`localStorage`).
- Permite cerrar el navegador o apagar el computador y retomar la práctica exactamente en la misma pregunta.
- Incluye aviso explícito de que la información reside en el navegador local y se perdería si se borra la caché del sitio.

---

## 4. Estructura de Archivos del Proyecto

```text
saber_pro_interactivo/
├── index.html                           # Portal principal de acceso y estado global
├── competencias_ciudadanas.html         # Cuadernillo de Competencias Ciudadanas (100 preguntas)
├── razonamiento_cuantitativo.html       # Cuadernillo de Razonamiento Cuantitativo (100 preguntas)
├── comunicacion_escrita.html            # Cuadernillo y Taller de Comunicación Escrita (100 actividades)
├── ingles.html                          # Cuadernillo de Inglés Partes 1-7 (100 preguntas)
├── lectura_critica.html                 # Cuadernillo de Lectura Crítica (100 preguntas)
├── css/
│   └── styles.css                       # Estilos CSS3 responsivos, accesibles y temáticos
├── js/
│   ├── app.js                           # Motor modular de cronómetro, evaluación y persistencia
│   └── data/
│       ├── competencias_ciudadanas.js   # 100 preguntas estructuradas de Competencias Ciudadanas
│       ├── razonamiento_cuantitativo.js # 100 ejercicios estructurados de Razonamiento Cuantitativo
│       ├── comunicacion_escrita.js      # 100 actividades, tareas, rúbricas y textos modelo
│       ├── ingles.js                    # 100 preguntas estructuradas de Inglés (Partes 1 a 7)
│       └── lectura_critica.js           # 100 preguntas estructuradas de Lectura Crítica
├── fuentes.md                           # Registro exhaustivo de fuentes oficiales del ICFES
├── validacion.md                        # Informe técnico de verificación de los 10 chequeos
└── README.md                            # Documentación y manual de usuario
```

---

## 5. Diseño Visual y Accesibilidad

- **Colores sobrios y profesionales:** Paleta con contraste accesible que cumple las pautas WCAG AA.
- **Colores distintivos por módulo:**
  - Competencias Ciudadanas: Azul petróleo institucional (`#1b4d7e`).
  - Razonamiento Cuantitativo: Verde esmeralda bosque (`#14532d`).
  - Comunicación Escrita: Borgoña / Vino tinto (`#831843`).
  - Inglés: Azul índigo (`#1e40af`).
  - Lectura Crítica: Terracota cálido (`#9a3412`).
- **Sin emojis en la interfaz:** Interfaz formal y académica libre de emoticonos o distracciones visuales.
- **Diseño adaptable:** Optimizado para pantallas de escritorio, portátiles, tabletas y teléfonos inteligentes.
- **Soporte de movimiento reducido:** Media query `@media (prefers-reduced-motion: reduce)` integrada para usuarios con sensibilidad visual o vestibular.
