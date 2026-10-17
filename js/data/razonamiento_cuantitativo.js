/**
 * BANCO DE 100 PREGUNTAS: RAZONAMIENTO CUANTITATIVO - SABER PRO
 * Generado conforme a la matriz del Diseño Centrado en Evidencias (ICFES)
 */

window.PREGUNTAS_RAZONAMIENTO_CUANTITATIVO = [
  {
    "id": "rc-001",
    "numero": 1,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Una empresa de telecomunicaciones registra el número de reclamos de clientes durante el primer semestre del año en la siguiente tabla:",
    "tabla_datos": "<table class=\"data-table\">\n        <thead><tr><th>Mes</th><th>Enero</th><th>Febrero</th><th>Marzo</th><th>Abril</th><th>Mayo</th><th>Junio</th></tr></thead>\n        <tbody><tr><td>Reclamos</td><td>120</td><td>150</td><td>180</td><td>90</td><td>210</td><td>150</td></tr></tbody>\n      </table>",
    "grafico_svg": null,
    "enunciado": "¿Cuál fue el promedio mensual de reclamos recibidos por la empresa durante dicho semestre?",
    "opciones": {
      "A": "130",
      "B": "140",
      "C": "150",
      "D": "160"
    },
    "respuesta_correcta": "C",
    "explicacion": "Para calcular la media aritmética, sumamos todos los valores del semestre y dividimos entre el número de meses (6): Total = 120 + 150 + 180 + 90 + 210 + 150 = 900. Promedio = 900 / 6 = 150.",
    "explicacion_distractores": {
      "A": "130 resulta de sumar omitiendo el mes de mayo (690 / 6 = 115) o cometer un error en la suma (780 / 6).",
      "B": "140 resulta de dividir la suma entre 6 habiendo sumado 840 por error.",
      "D": "160 resulta de sumar erróneamente un valor adicional o promediar los dos valores más altos."
    },
    "estrategia": "Suma los números agrupando pares que sumen centenas redondas: (120+180=300), (90+210=300), (150+150=300). Total = 900. 900/6 = 150.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-002",
    "numero": 2,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "En un estudio sobre el medio de transporte usado por 400 estudiantes universitarios, los resultados se expresan en el siguiente diagrama circular:",
    "tabla_datos": null,
    "grafico_svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" height=\"180\" style=\"max-width:320px;\">\n        <circle r=\"70\" cx=\"100\" cy=\"100\" fill=\"#e2e8f0\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n        <path d=\"M100 100 L100 30 A70 70 0 0 1 170 100 Z\" fill=\"#0284c7\" />\n        <path d=\"M100 100 L170 100 A70 70 0 0 1 100 170 Z\" fill=\"#16a34a\" />\n        <path d=\"M100 100 L100 170 A70 70 0 0 1 30 100 Z\" fill=\"#eab308\" />\n        <path d=\"M100 100 L30 100 A70 70 0 0 1 100 30 Z\" fill=\"#dc2626\" />\n        <!-- Leyenda -->\n        <rect x=\"190\" y=\"30\" width=\"12\" height=\"12\" fill=\"#0284c7\"/><text x=\"210\" y=\"40\" font-size=\"12\">Bus: 25%</text>\n        <rect x=\"190\" y=\"60\" width=\"12\" height=\"12\" fill=\"#16a34a\"/><text x=\"210\" y=\"70\" font-size=\"12\">Bici: 25%</text>\n        <rect x=\"190\" y=\"90\" width=\"12\" height=\"12\" fill=\"#eab308\"/><text x=\"210\" y=\"100\" font-size=\"12\">Caminata: 25%</text>\n        <rect x=\"190\" y=\"120\" width=\"12\" height=\"12\" fill=\"#dc2626\"/><text x=\"210\" y=\"130\" font-size=\"12\">Moto: 25%</text>\n      </svg>",
    "enunciado": "Si la muestra total es de 400 estudiantes y cada sector representa el 25%, ¿cuántos estudiantes se desplazan en bicicleta o caminando?",
    "opciones": {
      "A": "100",
      "B": "150",
      "C": "200",
      "D": "250"
    },
    "respuesta_correcta": "C",
    "explicacion": "La proporción de estudiantes que usan bicicleta (25%) o caminan (25%) suma el 50% del total. El 50% de 400 es 0.50 * 400 = 200 estudiantes.",
    "explicacion_distractores": {
      "A": "100 corresponde únicamente a los que usan bicicleta o únicamente a los que caminan (25% de 400 = 100).",
      "B": "150 representaría el 37.5% de la muestra.",
      "D": "250 representaría el 62.5% de la muestra."
    },
    "estrategia": "Cuando te pregunten por 'A o B' en conjuntos disjuntos, suma sus porcentajes directamente antes de calcular la cantidad absoluta: 25% + 25% = 50% de 400 = 200.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-003",
    "numero": 3,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "La gráfica de líneas muestra las ventas trimestrales (en millones de pesos) de dos sucursales (A y B) durante el año anterior:",
    "tabla_datos": null,
    "grafico_svg": "<svg viewBox=\"0 0 350 200\" width=\"100%\" height=\"180\" style=\"max-width:360px;\">\n        <!-- Ejes -->\n        <line x1=\"40\" y1=\"160\" x2=\"320\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <text x=\"30\" y=\"165\" font-size=\"10\" text-anchor=\"end\">0</text>\n        <text x=\"30\" y=\"115\" font-size=\"10\" text-anchor=\"end\">20</text>\n        <text x=\"30\" y=\"65\" font-size=\"10\" text-anchor=\"end\">40</text>\n        <text x=\"30\" y=\"25\" font-size=\"10\" text-anchor=\"end\">60</text>\n        <!-- Línea Sucursal A (Azul) -->\n        <polyline points=\"70,115 140,90 210,65 280,40\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n        <!-- Línea Sucursal B (Verde) -->\n        <polyline points=\"70,65 140,90 210,115 280,140\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3\" stroke-dasharray=\"4\"/>\n        <text x=\"70\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">T1</text>\n        <text x=\"140\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">T2</text>\n        <text x=\"210\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">T3</text>\n        <text x=\"280\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">T4</text>\n        <!-- Leyenda -->\n        <line x1=\"100\" y1=\"190\" x2=\"130\" y2=\"190\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><text x=\"135\" y=\"193\" font-size=\"10\">Sucursal A</text>\n        <line x1=\"200\" y1=\"190\" x2=\"230\" y2=\"190\" stroke=\"#15803d\" stroke-width=\"3\" stroke-dasharray=\"4\"/><text x=\"235\" y=\"193\" font-size=\"10\">Sucursal B</text>\n      </svg>",
    "enunciado": "De acuerdo con la gráfica, ¿en qué trimestre ambas sucursales registraron exactamente el mismo nivel de ventas?",
    "opciones": {
      "A": "Trimestre 1 (T1)",
      "B": "Trimestre 2 (T2)",
      "C": "Trimestre 3 (T3)",
      "D": "Trimestre 4 (T4)"
    },
    "respuesta_correcta": "B",
    "explicacion": "El punto de intersección de las dos gráficas de líneas se ubica exactamente en el Trimestre 2 (T2), donde ambas sucursales registran un valor de 30 millones de pesos.",
    "explicacion_distractores": {
      "A": "En T1, la sucursal B vendió 40 millones y la A vendió 20 millones; fueron distintas.",
      "C": "En T3, la sucursal A vendió 40 millones y la B vendió 20 millones.",
      "D": "En T4, la sucursal A alcanzó su máximo (50 millones) y la B su mínimo (10 millones)."
    },
    "estrategia": "En gráficas comparativas de líneas, el punto donde dos variables tienen el mismo valor coincide con el punto de corte o intersección de sus curvas.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-004",
    "numero": 4,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "La distribución de los puntajes obtenidos por 50 aspirantes en una prueba técnica se resume en la siguiente tabla de frecuencias agrupadas:",
    "tabla_datos": "<table class=\"data-table\">\n        <thead><tr><th>Intervalo de puntaje</th><th>Frecuencia absoluta (fi)</th><th>Frecuencia acumulada (Fi)</th></tr></thead>\n        <tbody>\n          <tr><td>[40 - 55)</td><td>8</td><td>8</td></tr>\n          <tr><td>[55 - 70)</td><td>14</td><td>22</td></tr>\n          <tr><td>[70 - 85)</td><td>18</td><td>40</td></tr>\n          <tr><td>[85 - 100]</td><td>10</td><td>50</td></tr>\n        </tbody>\n      </table>",
    "grafico_svg": null,
    "enunciado": "¿Qué porcentaje del total de aspirantes obtuvo un puntaje igual o superior a 70 puntos?",
    "opciones": {
      "A": "36%",
      "B": "44%",
      "C": "56%",
      "D": "80%"
    },
    "respuesta_correcta": "C",
    "explicacion": "Los aspirantes con puntaje igual o superior a 70 corresponden a los dos últimos intervalos: [70 - 85) con 18 aspirantes y [85 - 100] con 10 aspirantes. Total = 18 + 10 = 28 aspirantes. El porcentaje respecto al total de 50 es: (28 / 50) * 100% = 56%.",
    "explicacion_distractores": {
      "A": "36% corresponde únicamente al intervalo [70 - 85) (18/50 = 36%), olvidando el intervalo superior.",
      "B": "44% corresponde a los aspirantes con puntaje inferior a 70 (22/50 = 44%).",
      "D": "80% corresponde a la frecuencia acumulada hasta 85 puntos (40/50 = 80%)."
    },
    "estrategia": "Para calcular porcentajes sobre una base de 50 elementos, basta con multiplicar la cantidad de personas por 2: 28 * 2 = 56%.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-005",
    "numero": 5,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Una ruta de bus registró 18, 24, 21 y 27 pasajeros en cuatro paradas. ¿Cuántos pasajeros subieron en total?",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál fue el total de pasajeros que subieron?",
    "opciones": {
      "A": "90",
      "B": "72",
      "C": "84",
      "D": "96"
    },
    "respuesta_correcta": "A",
    "explicacion": "Se suman las cuatro cantidades: 18 + 24 + 21 + 27 = 90 pasajeros.",
    "explicacion_distractores": {
      "B": "Omitir los 18 pasajeros de la primera parada deja 72; no es el total de las cuatro.",
      "C": "Este total queda 6 por debajo: revisa que las cuatro sumas parciales estén incluidas.",
      "D": "Este total excede el correcto en 6, señal de que se duplicó o añadió una cantidad."
    },
    "estrategia": "Antes de operar, decide si se pide reunir cantidades o compararlas; al sumar, conserva la unidad pasajeros.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-006",
    "numero": 6,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "En una biblioteca se prestaron 48 novelas, 32 libros de ciencia y 20 biografías durante una semana.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué porcentaje de los préstamos correspondió a libros de ciencia?",
    "opciones": {
      "A": "20%",
      "B": "30%",
      "C": "40%",
      "D": "32%"
    },
    "respuesta_correcta": "D",
    "explicacion": "El total es 48 + 32 + 20 = 100; por tanto, 32/100 = 32%.",
    "explicacion_distractores": {
      "A": "20% usa 20 biografías como si fueran los préstamos de ciencia.",
      "B": "30% equivale a 30 de cada 100; no corresponde a los 32 libros de ciencia.",
      "C": "40% toma una parte incorrecta del total de 100 préstamos."
    },
    "estrategia": "Para un porcentaje, divide la categoría solicitada entre todos los préstamos y multiplica por 100; comprueba que la fracción sea menor que 1.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-007",
    "numero": 7,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Una encuesta a 120 hogares registró estas preferencias: gas 54, electricidad 42 y leña 24 hogares.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos hogares más prefieren gas que electricidad?",
    "opciones": {
      "A": "18",
      "B": "30",
      "C": "12",
      "D": "6"
    },
    "respuesta_correcta": "C",
    "explicacion": "La diferencia entre las frecuencias es 54 - 42 = 12 hogares.",
    "explicacion_distractores": {
      "A": "18 supera en 6 la resta correcta; verifica el orden y la magnitud de 54−42.",
      "B": "30 resulta de usar otra frecuencia o de sumar en vez de hallar cuántos más.",
      "D": "6 es la mitad de la diferencia real; probablemente se dividió entre dos sin que se pidiera un promedio."
    },
    "estrategia": "Compara frecuencias de la misma encuesta con una resta y expresa la diferencia en hogares, no como proporción.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-008",
    "numero": 8,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Los tiempos (en minutos) de cinco entregas fueron 14, 18, 20, 22 y 26.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la mediana de los tiempos?",
    "opciones": {
      "A": "22 minutos",
      "B": "20 minutos",
      "C": "18 minutos",
      "D": "21 minutos"
    },
    "respuesta_correcta": "B",
    "explicacion": "Los datos ya están ordenados; el valor central, tercero de cinco, es 20 minutos.",
    "explicacion_distractores": {
      "A": "22 es el cuarto dato; la posición central es la tercera.",
      "C": "18 es el segundo dato, no el lugar central de una lista de cinco.",
      "D": "21 es el promedio de algunos valores, pero la mediana es la observación central."
    },
    "estrategia": "Con cinco datos ordenados, selecciona el tercero; no calcules el promedio ni promedies los dos valores centrales.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-009",
    "numero": 9,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "Las temperaturas máximas de lunes a viernes fueron 24, 27, 23, 30 y 26 °C.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál fue el rango de temperaturas?",
    "opciones": {
      "A": "7 °C",
      "B": "4 °C",
      "C": "6 °C",
      "D": "8 °C"
    },
    "respuesta_correcta": "A",
    "explicacion": "El rango es máximo menos mínimo: 30 - 23 = 7 °C.",
    "explicacion_distractores": {
      "B": "4 no usa ambos extremos 30 y 23; comprueba máximo menos mínimo.",
      "C": "6 queda una unidad corto: la resta correcta es 30−23.",
      "D": "8 queda una unidad alto; no se incluyen días adicionales ni se suma la temperatura."
    },
    "estrategia": "El rango es una diferencia entre extremos: localiza máximo y mínimo antes de restar; la unidad sigue siendo °C.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-010",
    "numero": 10,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Una gráfica de barras de una feria muestra ventas de 35, 50, 42 y 63 entradas en los cuatro días.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto aumentaron las ventas del primer al cuarto día?",
    "opciones": {
      "A": "18 entradas",
      "B": "21 entradas",
      "C": "98 entradas",
      "D": "28 entradas"
    },
    "respuesta_correcta": "D",
    "explicacion": "La variación es 63 - 35 = 28 entradas.",
    "explicacion_distractores": {
      "A": "18 no es 63−35; vuelve a restar las dos barras indicadas.",
      "B": "21 no corresponde a la diferencia entre el día 1 y el 4.",
      "C": "98 suma las ventas en vez de calcular cuánto aumentaron."
    },
    "estrategia": "Para el cambio del primer al cuarto día, resta valor inicial de valor final; distingue variación absoluta de cociente.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-011",
    "numero": 11,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Una tabla de producción muestra 240 piezas en el turno de mañana y 180 en el de tarde.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué fracción de la producción diaria se hizo en la tarde?",
    "opciones": {
      "A": "2/5",
      "B": "4/7",
      "C": "3/7",
      "D": "1/4"
    },
    "respuesta_correcta": "C",
    "explicacion": "La producción total es 420 piezas; la fracción de tarde es 180/420 = 3/7.",
    "explicacion_distractores": {
      "A": "2/5 equivale a 0,4 y no a la proporción 180/420≈0,429.",
      "B": "4/7 cuenta la producción de la mañana (240/420), no la de la tarde.",
      "D": "1/4 no representa 180 de 420; revisa tanto el numerador como el total."
    },
    "estrategia": "La fracción parte-todo usa como denominador toda la producción; simplifica 180/420 por un factor común.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-012",
    "numero": 12,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "En un plano, 2 cm representan 5 km. Dos pueblos aparecen separados por 7,2 cm.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la distancia real entre los pueblos?",
    "opciones": {
      "A": "20 km",
      "B": "18 km",
      "C": "14 km",
      "D": "17 km"
    },
    "respuesta_correcta": "B",
    "explicacion": "La escala equivale a 2,5 km por cm; 7,2 × 2,5 = 18 km.",
    "explicacion_distractores": {
      "A": "20 km sobreestima la multiplicación; calcula primero 5/2 km por centímetro.",
      "C": "14 km aplica una tasa de 1,94 km/cm, menor que la escala indicada.",
      "D": "17 km queda corto; 7,2×2,5 debe dar 18 km."
    },
    "estrategia": "Usa la escala como tasa: divide 5 km entre 2 cm para obtener km por cm y multiplica por 7,2 cm.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-013",
    "numero": 13,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Un gráfico circular asigna 108° de sus 360° a estudiantes que usan bicicleta; la encuesta incluyó 250 estudiantes.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos estudiantes usan bicicleta?",
    "opciones": {
      "A": "75",
      "B": "60",
      "C": "72",
      "D": "90"
    },
    "respuesta_correcta": "A",
    "explicacion": "La proporción es 108/360 = 0,30; 0,30 × 250 = 75 estudiantes.",
    "explicacion_distractores": {
      "B": "60 es menor que 30% de 250; revisar el cociente 108/360.",
      "C": "72 aplica una fracción 0,288 en lugar de 0,30.",
      "D": "90 corresponde al 36% de la muestra; 108° son 30% de 360°."
    },
    "estrategia": "Convierte la porción angular a fracción del círculo (108/360) y luego aplícala a 250 personas.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-014",
    "numero": 14,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Una tabla de agua embalsada registra 1,8 millones de m³ en enero y 2,25 millones en febrero.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿En cuánto aumentó la reserva, expresada en miles de m³?",
    "opciones": {
      "A": "45",
      "B": "225",
      "C": "4.500",
      "D": "450"
    },
    "respuesta_correcta": "D",
    "explicacion": "2,25 - 1,8 = 0,45 millones de m³, equivalentes a 450 miles de m³.",
    "explicacion_distractores": {
      "A": "45 miles desplaza una posición decimal de menos; 0,45 millones son 450 miles.",
      "B": "225 miles toma la mitad del cambio; no se debe promediar las reservas.",
      "C": "4.500 miles equivale a 4,5 millones, diez veces el aumento observado."
    },
    "estrategia": "Resta las cantidades en millones y convierte 0,45 millones a miles multiplicando por 1.000.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-015",
    "numero": 15,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "En una gráfica de distancia-tiempo, un ciclista recorre 36 km en 1,5 horas a velocidad constante.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué velocidad representa la pendiente de la gráfica?",
    "opciones": {
      "A": "22 km/h",
      "B": "27 km/h",
      "C": "24 km/h",
      "D": "18 km/h"
    },
    "respuesta_correcta": "C",
    "explicacion": "La pendiente es distancia/tiempo: 36 ÷ 1,5 = 24 km/h.",
    "explicacion_distractores": {
      "A": "22 km/h no satisface 22×1,5=36 km; comprueba multiplicando la rapidez por el tiempo.",
      "B": "27 km/h excede la pendiente: el cociente exacto es 24 km por hora.",
      "D": "18 km/h resulta de una división o lectura de pendiente incorrecta; 36/1,5=24."
    },
    "estrategia": "La pendiente en distancia-tiempo es Δdistancia/Δtiempo; conserva km y horas para obtener km/h.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-016",
    "numero": 16,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Una tabla registra el consumo de energía: 12 kWh el lunes, 15 el martes y 9 el miércoles.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué porcentaje del consumo de esos días ocurrió el martes?",
    "opciones": {
      "A": "50%",
      "B": "41,7%",
      "C": "25%",
      "D": "33,3%"
    },
    "respuesta_correcta": "B",
    "explicacion": "El total es 36 kWh; 15/36 × 100 ≈ 41,7%.",
    "explicacion_distractores": {
      "A": "50% supone que martes aporta la mitad; 15/36 es aproximadamente 0,417.",
      "C": "25% compara una cuarta parte y no 15 de los 36 kWh.",
      "D": "33,3% sería 12/36; se usó el dato del lunes en lugar del martes."
    },
    "estrategia": "El porcentaje del martes toma 15 kWh como parte y 12+15+9=36 kWh como total; kWh se cancela en la razón.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-017",
    "numero": 17,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Un histograma agrupa edades en [10,20), [20,30) y [30,40), con frecuencias 7, 11 y 6.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué proporción de las personas tiene menos de 30 años?",
    "opciones": {
      "A": "3/4",
      "B": "1/2",
      "C": "2/3",
      "D": "5/6"
    },
    "respuesta_correcta": "A",
    "explicacion": "Hay 18 personas menores de 30 de un total de 24; 18/24 = 3/4.",
    "explicacion_distractores": {
      "B": "1/2 equivale a 12 de 24, pero hay 18 menores de 30.",
      "C": "2/3 equivale a 16 de 24; no suma correctamente 7+11.",
      "D": "5/6 equivale a 20 de 24; el total menor de 30 es 18."
    },
    "estrategia": "En intervalos semiabiertos, «menos de 30» incluye los dos primeros grupos; suma sus frecuencias y divide por el total.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-018",
    "numero": 18,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "En un mapa, el trayecto A-B mide 4 cm y B-C mide 3 cm, en direcciones perpendiculares; escala 1 cm: 2 km.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la distancia directa A-C?",
    "opciones": {
      "A": "7 km",
      "B": "12 km",
      "C": "14 km",
      "D": "10 km"
    },
    "respuesta_correcta": "D",
    "explicacion": "Por Pitágoras, la distancia en el mapa es √(4²+3²)=5 cm; a escala son 5×2=10 km.",
    "explicacion_distractores": {
      "A": "7 km suma 4+3 como distancia recorrida; se pide la diagonal directa.",
      "B": "12 km escala 6 cm, pero la diagonal del triángulo 3-4-5 mide 5 cm.",
      "C": "14 km no respeta la diagonal 5 cm ni la escala de 2 km por cm."
    },
    "estrategia": "Como los tramos son perpendiculares, aplica Pitágoras en el plano y después la escala 2 km/cm.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-019",
    "numero": 19,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Una tabla de precios muestra 3 kg de manzanas por $12.600 y 5 kg por $21.000.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el precio por kilogramo en ambas compras?",
    "opciones": {
      "A": "$4.000",
      "B": "$4.500",
      "C": "$4.200",
      "D": "$3.600"
    },
    "respuesta_correcta": "C",
    "explicacion": "$12.600 ÷ 3 = $4.200 y $21.000 ÷ 5 = $4.200 por kilogramo.",
    "explicacion_distractores": {
      "A": "$4.000/kg queda por debajo de ambos cocientes; revisa la división.",
      "B": "$4.500/kg excede el precio; el cálculo debe dar $4.200 por kg en las dos compras.",
      "D": "$3.600/kg no coincide con 12.600÷3 ni con 21.000÷5."
    },
    "estrategia": "Calcula el precio unitario en cada compra dividiendo pesos entre kilogramos; compara resultados con unidad $/kg.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-020",
    "numero": 20,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Un diagrama de sectores muestra 40% de votos para A, 35% para B y el resto para C; votaron 800 personas.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántas personas votaron por C?",
    "opciones": {
      "A": "280",
      "B": "200",
      "C": "160",
      "D": "240"
    },
    "respuesta_correcta": "B",
    "explicacion": "C representa 100%-40%-35%=25%; 0,25×800=200 personas.",
    "explicacion_distractores": {
      "A": "280 equivale al 35% asignado a B, no al porcentaje residual.",
      "C": "160 corresponde al 20%; C es el 25% restante.",
      "D": "240 correspondería al 30%, no al 25% que queda."
    },
    "estrategia": "Completa primero el 100% para hallar la parte de C y luego calcula esa fracción de 800 votos.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-021",
    "numero": 21,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "La producción mensual de una planta pasó de 1.250 unidades en abril a 1.500 en mayo.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál fue el incremento porcentual respecto de abril?",
    "opciones": {
      "A": "20%",
      "B": "16,7%",
      "C": "25%",
      "D": "30%"
    },
    "respuesta_correcta": "A",
    "explicacion": "El aumento fue 250; 250/1.250×100=20%.",
    "explicacion_distractores": {
      "B": "16,7% divide el aumento por el valor final; la base solicitada es abril.",
      "C": "25% confunde el aumento absoluto de 250 con 25% de la base.",
      "D": "30% no corresponde a 250/1.250; revisa el denominador inicial."
    },
    "estrategia": "El incremento porcentual usa como base el valor inicial de abril: (1.500−1.250)/1.250×100.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-022",
    "numero": 22,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Una tabla de frecuencias registra 5, 8, 12, 9 y 6 personas en cinco intervalos de espera.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántas personas fueron observadas?",
    "opciones": {
      "A": "34",
      "B": "38",
      "C": "42",
      "D": "40"
    },
    "respuesta_correcta": "D",
    "explicacion": "Se suman las frecuencias: 5+8+12+9+6=40 personas.",
    "explicacion_distractores": {
      "A": "34 omite o resta frecuencias; las cinco clases deben sumarse.",
      "B": "38 queda dos por debajo de la suma de las cinco clases.",
      "C": "42 excede la suma en dos; verifica que cada frecuencia se cuente una sola vez."
    },
    "estrategia": "El total de observaciones es la suma de todas las frecuencias absolutas, con unidad personas.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-023",
    "numero": 23,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Un diagrama de dispersión relaciona horas de estudio x y puntaje y. La recta de tendencia pasa por (2,50) y (6,70).",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "Según la recta, ¿cuánto aumenta el puntaje por cada hora adicional?",
    "opciones": {
      "A": "4 puntos",
      "B": "10 puntos",
      "C": "5 puntos",
      "D": "2 puntos"
    },
    "respuesta_correcta": "C",
    "explicacion": "La pendiente es (70-50)/(6-2)=20/4=5 puntos por hora.",
    "explicacion_distractores": {
      "A": "4 divide el cambio de puntaje por una diferencia de x incorrecta.",
      "B": "10 no divide los 20 puntos entre las 4 horas; comprueba la unidad puntos/hora.",
      "D": "2 usa el cambio de horas como si fuera el cambio de puntaje."
    },
    "estrategia": "La pendiente es cambio vertical/cambio horizontal: (70−50)/(6−2), en puntos por hora.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-024",
    "numero": 24,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "Una receta para 4 porciones requiere 300 g de harina; se quiere preparar 10 porciones.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué cantidad de harina corresponde en una tabla proporcional?",
    "opciones": {
      "A": "900 g",
      "B": "750 g",
      "C": "600 g",
      "D": "720 g"
    },
    "respuesta_correcta": "B",
    "explicacion": "El factor de escala es 10/4=2,5; 300×2,5=750 g.",
    "explicacion_distractores": {
      "A": "900 g aplica factor 3; el factor correcto es 10/4.",
      "C": "600 g usa factor 2; pasar de 4 a 10 porciones exige factor 2,5.",
      "D": "720 g usa factor 2,4 y no conserva la razón 300/4=75 g por porción."
    },
    "estrategia": "Las porciones aumentan en la misma razón: escala 10/4 y aplica ese factor a 300 g.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-025",
    "numero": 25,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Una gráfica lineal marca 80 litros a las 8:00 y 50 litros a las 11:00 en un tanque que pierde agua uniformemente.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿A qué ritmo disminuye el volumen?",
    "opciones": {
      "A": "10 L/h",
      "B": "8 L/h",
      "C": "12 L/h",
      "D": "30 L/h"
    },
    "respuesta_correcta": "A",
    "explicacion": "La disminución de 30 L en 3 h corresponde a 30/3=10 L/h.",
    "explicacion_distractores": {
      "B": "8 L/h supone 24 L de descenso en 3 h; los datos muestran 30 L.",
      "C": "12 L/h resulta de dividir entre un intervalo temporal incorrecto.",
      "D": "30 L es el descenso total, no el ritmo; falta dividir entre 3 horas."
    },
    "estrategia": "Calcula el descenso (80−50) L y divídelo por las 3 horas transcurridas; reporta L/h como ritmo de pérdida.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-026",
    "numero": 26,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "De 60 piezas revisadas, 9 tenían defectos. El informe presenta las frecuencias relativas.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la frecuencia relativa de piezas defectuosas?",
    "opciones": {
      "A": "0,09",
      "B": "0,60",
      "C": "0,90",
      "D": "0,15"
    },
    "respuesta_correcta": "D",
    "explicacion": "La frecuencia relativa es 9/60=0,15.",
    "explicacion_distractores": {
      "A": "0,09 trata 9 defectuosas como 9% sin dividir por las 60 revisadas.",
      "B": "0,60 invierte el cociente y representa 60/100, no 9/60.",
      "C": "0,90 confunde 9 defectuosas con 90%; el numerador es solo 9 de 60."
    },
    "estrategia": "Frecuencia relativa = defectuosas/inspeccionadas; expresa 9/60 como decimal y verifica que sea menor que 1.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-027",
    "numero": 27,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "Un gráfico compara los ingresos de dos tiendas: tienda X, $2,4 millones; tienda Y, $3 millones.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿En qué porcentaje supera Y a X, tomando X como referencia?",
    "opciones": {
      "A": "30%",
      "B": "60%",
      "C": "25%",
      "D": "20%"
    },
    "respuesta_correcta": "C",
    "explicacion": "La diferencia es 0,6 millones; 0,6/2,4×100=25%.",
    "explicacion_distractores": {
      "A": "30% usa una base distinta o calcula incorrectamente 0,6/2,4.",
      "B": "60% toma la diferencia en millones como si fuera 60% sin normalizarla por X.",
      "D": "20% no es 0,6/2,4; revisa la división usando X como base."
    },
    "estrategia": "El porcentaje de aumento se calcula sobre X: diferencia 3,0−2,4 dividida entre 2,4, no entre Y.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-028",
    "numero": 28,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Un registro de lluvia informa 12 mm el lunes, 0 mm el martes, 8 mm el miércoles y 20 mm el jueves.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué porcentaje de la lluvia acumulada cayó el jueves?",
    "opciones": {
      "A": "60%",
      "B": "50%",
      "C": "40%",
      "D": "45%"
    },
    "respuesta_correcta": "B",
    "explicacion": "La acumulación es 40 mm; 20/40×100=50%.",
    "explicacion_distractores": {
      "A": "60% atribuye más de la mitad al jueves; 20 de 40 mm es exactamente la mitad.",
      "C": "40% supone 16 mm de total; la suma registrada es 40 mm.",
      "D": "45% no resulta de 20/40; reduce indebidamente la participación del jueves."
    },
    "estrategia": "Suma la lluvia de los cuatro días para hallar el total y divide los 20 mm del jueves por ese total.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-029",
    "numero": 29,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "En un plano cartesiano, un punto de costo (cantidad, costo) es (4, 28.000) y otro es (7, 49.000).",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué costo unitario constante sugieren los datos?",
    "opciones": {
      "A": "$7.000",
      "B": "$5.000",
      "C": "$6.000",
      "D": "$8.000"
    },
    "respuesta_correcta": "A",
    "explicacion": "28.000/4=7.000 y 49.000/7=7.000 por unidad.",
    "explicacion_distractores": {
      "B": "$5.000 no reproduce ninguno de los puntos (4, $28.000) y (7, $49.000).",
      "C": "$6.000 por unidad daría $24.000 para 4, no $28.000.",
      "D": "$8.000 por unidad daría $32.000 para 4; divide costo entre cantidad."
    },
    "estrategia": "El costo unitario es costo/cantidad; calcula ambos puntos para comprobar que la tasa constante coincide.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-030",
    "numero": 30,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "Una tabla muestra goles de un equipo en seis partidos: 0, 1, 1, 2, 2 y 6.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la moda del número de goles?",
    "opciones": {
      "A": "0",
      "B": "2",
      "C": "6",
      "D": "1 y 2"
    },
    "respuesta_correcta": "D",
    "explicacion": "Los valores 1 y 2 aparecen dos veces cada uno; ambos son modas.",
    "explicacion_distractores": {
      "A": "0 aparece una vez, por lo que no alcanza la frecuencia máxima.",
      "B": "2 sí es una moda, pero omite el empate con 1, que también aparece dos veces.",
      "C": "6 aparece una vez y no es el valor más frecuente."
    },
    "estrategia": "Cuenta cuántas veces aparece cada valor; puede haber más de una moda si hay empate en la frecuencia máxima.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-031",
    "numero": 31,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "De 150 libros, 45 son de historia. Un gráfico de barras usa una escala de 10 libros por división.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántas divisiones representa la barra de historia?",
    "opciones": {
      "A": "5",
      "B": "10,5",
      "C": "4,5",
      "D": "3,5"
    },
    "respuesta_correcta": "C",
    "explicacion": "45 libros ÷ 10 libros por división = 4,5 divisiones.",
    "explicacion_distractores": {
      "A": "5 divisiones representan 50 libros; cada división vale 10.",
      "B": "10,5 divisiones representan 105 libros; revisa la división 45/10.",
      "D": "3,5 divisiones equivaldrían a 35 libros, no a 45."
    },
    "estrategia": "Divide 45 libros por 10 libros/división; al cancelar libros queda una medida en divisiones.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-032",
    "numero": 32,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "El caudal de un río fue 14 m³/s a las 6 h y 20 m³/s a las 9 h, con aumento lineal.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál fue el aumento promedio de caudal por hora?",
    "opciones": {
      "A": "6 m³/s por hora",
      "B": "2 m³/s por hora",
      "C": "1,5 m³/s por hora",
      "D": "3 m³/s por hora"
    },
    "respuesta_correcta": "B",
    "explicacion": "(20-14)/(9-6)=6/3=2 m³/s por hora.",
    "explicacion_distractores": {
      "A": "6 es el aumento total en m³/s, no el incremento por cada hora.",
      "C": "1,5 usa un cambio temporal o de caudal distinto al indicado.",
      "D": "3 m³/s por hora equivale a dividir 6 entre 2; transcurrieron 3 horas."
    },
    "estrategia": "La tasa media es el cambio de caudal dividido entre el tiempo: (20−14)/(9−6), en m³/s por hora.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-033",
    "numero": 33,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Avanzado",
    "contexto": "En un sondeo de 500 personas, 175 prefieren el producto P y 125 el producto Q.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué porcentaje prefiere alguno de esos dos productos?",
    "opciones": {
      "A": "60%",
      "B": "35%",
      "C": "50%",
      "D": "65%"
    },
    "respuesta_correcta": "A",
    "explicacion": "(175+125)/500×100=300/500×100=60%.",
    "explicacion_distractores": {
      "B": "35% informa solo la preferencia por P; Q también cuenta.",
      "C": "50% omite parte de las 300 personas que prefieren P o Q.",
      "D": "65% excede 300/500; revisa la suma antes de convertir a porcentaje."
    },
    "estrategia": "Como se pregunta por P o Q y no hay solapamiento indicado, suma 175+125 y divide entre 500.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-034",
    "numero": 34,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Básico",
    "contexto": "Un rectángulo aparece en un plano con dimensiones 6 cm por 4 cm y escala 1 cm: 3 m.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el área real del terreno?",
    "opciones": {
      "A": "72 m²",
      "B": "180 m²",
      "C": "432 m²",
      "D": "216 m²"
    },
    "respuesta_correcta": "D",
    "explicacion": "Las dimensiones reales son 18 m y 12 m; el área es 18×12=216 m².",
    "explicacion_distractores": {
      "A": "72 m² multiplica una medida dibujada por otra real; ambos lados deben escalarse.",
      "B": "$180 m² no corresponde al producto de 18 m por 12 m.",
      "C": "432 m² duplica el área calculada; los lados reales son 18 y 12 m."
    },
    "estrategia": "Convierte por separado cada lado con 1 cm=3 m y luego multiplica las longitudes reales; el área queda en m².",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-035",
    "numero": 35,
    "competencia": "Interpretación y representación",
    "afirmacion": "Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos",
    "dificultad": "Intermedio",
    "contexto": "Una gráfica de barras truncada usa marcas 40, 50, 60, 70, aunque el eje vertical empieza en 40. Dos barras llegan a 65 y 55.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la diferencia real entre los valores representados?",
    "opciones": {
      "A": "20 unidades",
      "B": "55 unidades",
      "C": "10 unidades",
      "D": "5 unidades"
    },
    "respuesta_correcta": "C",
    "explicacion": "La diferencia es 65-55=10; que el eje comience en 40 no cambia la resta.",
    "explicacion_distractores": {
      "A": "20 sobrestima la diferencia; resta los valores rotulados, no las alturas aparentes.",
      "B": "55 es el valor de una barra, no la diferencia entre las dos.",
      "D": "5 es la mitad de la diferencia; no se debe dividir entre dos."
    },
    "estrategia": "Lee los valores absolutos de ambas barras y resta 55 de 65; el inicio truncado del eje no altera la diferencia.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-036",
    "numero": 36,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Básico",
    "contexto": "Un almacén de ropa deportiva ofrece un descuento del 20% sobre el precio de lista de unos zapatos cuyo valor original es de $250.000. Si un cliente paga en efectivo, el almacén le concede un descuento adicional del 10% sobre el valor ya rebajado.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto cancela finalmente el cliente en efectivo por los zapatos?",
    "opciones": {
      "A": "$175.000",
      "B": "$180.000",
      "C": "$190.000",
      "D": "$200.000"
    },
    "respuesta_correcta": "B",
    "explicacion": "Paso 1: Aplicar el primer descuento del 20%: $250.000 * 0.80 = $200.000. Paso 2: Aplicar el descuento sucesivo del 10% sobre el valor ya rebajado: $200.000 * 0.90 = $180.000.",
    "explicacion_distractores": {
      "A": "$175.000 resulta del error clásico de sumar los porcentajes (20% + 10% = 30%): $250.000 * 0.70 = $175.000. Los descuentos sucesivos no se suman linealmente.",
      "C": "$190.000 resulta de restar el 10% del total y no considerar el 20%.",
      "D": "$200.000 es el precio con el primer descuento, omitiendo el descuento por pago en efectivo."
    },
    "estrategia": "Nunca sumes descuentos porcentuales sucesivos. Aplica los factores multiplicativos: 250.000 * 0.80 * 0.90 = 250.000 * 0.72 = 180.000.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-037",
    "numero": 37,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Una piscina rectangular de 12 metros de largo, 6 metros de ancho y 2 metros de profundidad uniforme debe llenarse con agua limpia. Un grifo bombea agua a razón constante de 4.000 litros por hora.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "Sabiendo que 1 metro cúbico equivale a 1.000 litros, ¿cuántas horas tardará el grifo en llenar la piscina por completo?",
    "opciones": {
      "A": "24 horas",
      "B": "36 horas",
      "C": "48 horas",
      "D": "72 horas"
    },
    "respuesta_correcta": "B",
    "explicacion": "Volumen de la piscina = largo * ancho * profundidad = 12 m * 6 m * 2 m = 144 m³. En litros: 144 * 1.000 = 144.000 litros. Tiempo de llenado = 144.000 litros / 4.000 litros/hora = 36 horas.",
    "explicacion_distractores": {
      "A": "24 horas resulta de omitir la profundidad y dividir (12 * 6 * 1000) / 4000 = 72000 / 4000 = 18 o error aritmético.",
      "C": "48 horas resulta de multiplicar por una profundidad errónea o dividir incorrectamente.",
      "D": "72 horas resulta de calcular el volumen como 12 * 6 * 4 / 4000."
    },
    "estrategia": "Calcula primero el volumen total en m³ (144 m³), luego convierte a litros multiplicando por 1000 y divide entre el caudal horario: 144 / 4 = 36 horas.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-038",
    "numero": 38,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "En una urna opaca hay 6 balotas rojas, 4 balotas verdes y 10 balotas azules, todas de idéntico tamaño y peso. Se extrae una balota al azar.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la probabilidad de que la balota extraída NO sea de color azul?",
    "opciones": {
      "A": "0.20",
      "B": "0.30",
      "C": "0.50",
      "D": "0.60"
    },
    "respuesta_correcta": "C",
    "explicacion": "Total de balotas en la urna = 6 (rojas) + 4 (verdes) + 10 (azules) = 20 balotas. Las balotas que NO son azules son las rojas y verdes: 6 + 4 = 10 balotas favorables. Probabilidad = 10 / 20 = 1/2 = 0.50 (50%).",
    "explicacion_distractores": {
      "A": "0.20 corresponde a la probabilidad de sacar únicamente verde (4/20 = 0.20).",
      "B": "0.30 corresponde a la probabilidad de sacar únicamente roja (6/20 = 0.30).",
      "D": "0.60 resulta de un cálculo erróneo del cociente favorable."
    },
    "estrategia": "Usa el principio del evento complementario: P(No azul) = 1 - P(Azul) = 1 - (10/20) = 1 - 0.50 = 0.50.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-039",
    "numero": 39,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Un ingeniero diseña una rampa recta de acceso para personas con movilidad reducida. La base horizontal mide 8 metros y la altura vertical que debe superar es de 1.5 metros.",
    "tabla_datos": null,
    "grafico_svg": "<svg viewBox=\"0 0 250 120\" width=\"100%\" height=\"110\" style=\"max-width:260px;\">\n        <polygon points=\"30,90 210,90 210,30\" fill=\"#f1f5f9\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n        <text x=\"120\" y=\"105\" font-size=\"11\" text-anchor=\"middle\">Base = 8 m</text>\n        <text x=\"220\" y=\"65\" font-size=\"11\">1.5 m</text>\n        <text x=\"110\" y=\"50\" font-size=\"11\" fill=\"#0f172a\">Longitud (L)</text>\n      </svg>",
    "enunciado": "Utilizando el teorema de Pitágoras, ¿cuál es la longitud exacta aproximada de la superficie inclinada de la rampa?",
    "opciones": {
      "A": "8.14 metros",
      "B": "8.50 metros",
      "C": "9.50 metros",
      "D": "10.00 metros"
    },
    "respuesta_correcta": "A",
    "explicacion": "Por teorema de Pitágoras en un triángulo rectángulo: L² = (base)² + (altura)² = 8² + 1.5² = 64 + 2.25 = 66.25. L = √66.25 ≈ 8.139 metros ≈ 8.14 metros.",
    "explicacion_distractores": {
      "B": "8.50 metros resulta de estimar 8 + 0.5 o de un error de cálculo manual.",
      "C": "9.50 metros es la suma lineal directa de los catetos (8 + 1.5), lo cual viola la desigualdad triangular.",
      "D": "10.00 metros corresponde a una terna pitagórica 6-8-10 donde la altura hubiese sido de 6 metros."
    },
    "estrategia": "La hipotenusa debe ser mayor que el cateto más largo (8 m), pero como la altura es pequeña (1.5 m), el valor debe estar ligeramente por encima de 8: √66.25 ≈ 8.14 m.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-040",
    "numero": 40,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Una chaqueta de $180.000 recibe un descuento del 15% y luego un cupón adicional de $10.000.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto se paga al final?",
    "opciones": {
      "A": "$153.000",
      "B": "$162.000",
      "C": "$126.000",
      "D": "$143.000"
    },
    "respuesta_correcta": "D",
    "explicacion": "El primer descuento es 0,15×180.000=$27.000; el precio queda en $153.000. Restando el cupón: $153.000-$10.000=$143.000.",
    "explicacion_distractores": {
      "A": "$153.000 es el precio después del 15%; falta descontar el cupón de $10.000.",
      "B": "$162.000 aplica mal el porcentaje o lo suma al precio en vez de rebajarlo.",
      "C": "$126.000 resta demasiado; comprueba $180.000×0,85−$10.000."
    },
    "estrategia": "Aplica primero el descuento al precio de lista y después resta el cupón fijo; un porcentaje y una cantidad fija no se combinan como si fueran tasas.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-041",
    "numero": 41,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una bomba llena un tanque de 900 litros a 30 L/min; una fuga simultánea deja salir 6 L/min.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "Si el tanque está vacío al inicio, ¿cuántos minutos tarda en llenarse por completo?",
    "opciones": {
      "A": "40 min",
      "B": "150 min",
      "C": "37,5 min",
      "D": "30 min"
    },
    "respuesta_correcta": "C",
    "explicacion": "El caudal neto es 30-6=24 L/min; 900/24=37,5 minutos.",
    "explicacion_distractores": {
      "A": "40 min supone un caudal neto de 22,5 L/min; revisa 30−6=24.",
      "B": "150 min divide por el caudal de fuga, no por el caudal neto que llena el tanque.",
      "D": "30 min ignora la fuga y calcula 900/30."
    },
    "estrategia": "Resta el caudal de fuga del de entrada para obtener el neto, y divide 900 L entre L/min; los litros se cancelan.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-042",
    "numero": 42,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Un equipo de 5 personas termina un inventario en 12 horas. Se asignan 8 personas al mismo ritmo.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto tardarán?",
    "opciones": {
      "A": "19,2 horas",
      "B": "7,5 horas",
      "C": "6 horas",
      "D": "8 horas"
    },
    "respuesta_correcta": "B",
    "explicacion": "El trabajo es 5×12=60 persona-horas; con 8 personas toma 60/8=7,5 horas.",
    "explicacion_distractores": {
      "A": "19,2 h invierte la proporción; más personas deben reducir el tiempo.",
      "C": "6 h multiplica trabajadores y tiempo en lugar de conservar el producto.",
      "D": "8 h ignora que el equipo aumentó de 5 a 8 personas."
    },
    "estrategia": "Con el mismo inventario, la cantidad persona-horas permanece constante: 5×12=60 y 60/8=7,5 h.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-043",
    "numero": 43,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una caja contiene 5 fichas blancas y 3 negras. Se extraen dos fichas sin reemplazo.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la probabilidad de que ambas sean blancas?",
    "opciones": {
      "A": "5/14",
      "B": "5/16",
      "C": "3/8",
      "D": "25/64"
    },
    "respuesta_correcta": "A",
    "explicacion": "P=(5/8)×(4/7)=20/56=5/14.",
    "explicacion_distractores": {
      "B": "5/16 usa 1/2 como probabilidad de la segunda extracción, aunque quedan 7 fichas.",
      "C": "3/8 corresponde a una probabilidad distinta y no multiplica los dos eventos blancos.",
      "D": "25/64 usa 5/8 dos veces, como si la primera ficha se devolviera."
    },
    "estrategia": "Sin reemplazo, la segunda probabilidad cambia: 5/8 para la primera blanca y 4/7 para la siguiente; multiplica ambas.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-044",
    "numero": 44,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Un automóvil viaja 150 km a 60 km/h y después 100 km a 50 km/h.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es su velocidad media para el trayecto completo?",
    "opciones": {
      "A": "55 km/h",
      "B": "60 km/h",
      "C": "110 km/h",
      "D": "55,6 km/h"
    },
    "respuesta_correcta": "D",
    "explicacion": "Tiempo total=150/60+100/50=2,5+2=4,5 h; velocidad media=250/4,5≈55,6 km/h.",
    "explicacion_distractores": {
      "A": "55 km/h aproxima indebidamente el promedio simple de las dos velocidades.",
      "B": "60 km/h ignora el tramo más lento; 250 km requieren 4,5 h.",
      "C": "110 km/h suma velocidades y no corresponde a distancia/tiempo total."
    },
    "estrategia": "Suma los tiempos de cada tramo (150/60 y 100/50) y divide la distancia total por el tiempo total; no promedies velocidades sin ponderar.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-045",
    "numero": 45,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una pared rectangular mide 4,8 m por 2,5 m. Cada lata cubre 3 m² y se compra solo latas enteras.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántas latas se necesitan?",
    "opciones": {
      "A": "5",
      "B": "6",
      "C": "4",
      "D": "3"
    },
    "respuesta_correcta": "C",
    "explicacion": "Área=4,8×2,5=12 m²; 12/3=4 latas.",
    "explicacion_distractores": {
      "A": "5 latas sobran: 12/3 da exactamente 4.",
      "B": "6 latas resultan de dividir por una cobertura menor que 3 m² por lata.",
      "D": "3 latas cubren solo 9 m², menos que los 12 m² requeridos."
    },
    "estrategia": "Calcula el área de pared (4,8×2,5=12 m²) y divide por cobertura de 3 m² por lata; el resultado es un número entero.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-046",
    "numero": 46,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "La suma de tres números consecutivos es 72.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el mayor de los tres números?",
    "opciones": {
      "A": "26",
      "B": "25",
      "C": "23",
      "D": "24"
    },
    "respuesta_correcta": "B",
    "explicacion": "Si el central es n, (n-1)+n+(n+1)=3n=72, n=24; el mayor es 25.",
    "explicacion_distractores": {
      "A": "26 excede el mayor; la terna consecutiva centrada en 24 termina en 25.",
      "C": "23 es el menor de la terna 23,24,25, no el mayor.",
      "D": "24 es el número central; falta sumar uno para obtener el mayor."
    },
    "estrategia": "Representa los consecutivos como n−1, n, n+1; al sumarlos los términos opuestos se cancelan y 3n=72.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-047",
    "numero": 47,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una máquina produce 420 envases en 7 minutos, a ritmo constante.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos envases produce en 25 minutos?",
    "opciones": {
      "A": "1.500",
      "B": "1.200",
      "C": "1.470",
      "D": "1.750"
    },
    "respuesta_correcta": "A",
    "explicacion": "La tasa es 420/7=60 envases/min; 60×25=1.500.",
    "explicacion_distractores": {
      "B": "1.200 supone una tasa de 48 envases/min, menor que 420/7.",
      "C": "1.470 resulta de usar 24,5 min o de un error en la multiplicación.",
      "D": "1.750 supone 70 envases/min y no conserva la tasa observada de 60."
    },
    "estrategia": "Obtén la tasa unitaria 420/7=60 envases/min y multiplícala por 25 min; verifica que las unidades den envases.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-048",
    "numero": 48,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "En una mezcla de 18 litros, agua y concentrado están en razón 5:1.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos litros de concentrado contiene?",
    "opciones": {
      "A": "2 L",
      "B": "5 L",
      "C": "6 L",
      "D": "3 L"
    },
    "respuesta_correcta": "D",
    "explicacion": "Hay 6 partes iguales; cada parte vale 18/6=3 L y una parte es concentrado.",
    "explicacion_distractores": {
      "A": "2 L divide 18 entre 9 partes, no entre las 6 partes de la razón.",
      "B": "5 L confunde el número de partes de agua con la cantidad de concentrado.",
      "C": "6 L asigna dos partes al concentrado, aunque la razón le asigna una."
    },
    "estrategia": "La razón agua:concentrado 5:1 tiene seis partes en total; una parte es 18/6=3 L.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-049",
    "numero": 49,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Un artículo cuesta US$80. La tasa es 4.000 pesos por dólar y el banco cobra una comisión fija de $6.000.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el costo total en pesos?",
    "opciones": {
      "A": "$322.000",
      "B": "$332.000",
      "C": "$326.000",
      "D": "$320.000"
    },
    "respuesta_correcta": "C",
    "explicacion": "Conversión: 80×4.000=$320.000; con comisión, $320.000+$6.000=$326.000.",
    "explicacion_distractores": {
      "A": "$322.000 añade $2.000 en vez de la comisión de $6.000.",
      "B": "$332.000 suma dos veces la comisión o añade un monto excesivo.",
      "D": "$320.000 es solo el valor convertido; omite la comisión bancaria."
    },
    "estrategia": "Convierte dólares a pesos multiplicando 80×4.000 y luego suma una sola vez la comisión fija de $6.000.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-050",
    "numero": 50,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Un rectángulo de área 96 cm² tiene lados de longitud x y x+4.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto mide el lado mayor?",
    "opciones": {
      "A": "14 cm",
      "B": "12 cm",
      "C": "8 cm",
      "D": "10 cm"
    },
    "respuesta_correcta": "B",
    "explicacion": "x(x+4)=96; x²+4x-96=0=(x-8)(x+12); la longitud positiva es x=8 y el lado mayor es 12 cm.",
    "explicacion_distractores": {
      "A": "14 cm corresponde a la raíz negativa considerada indebidamente o no satisface la ecuación.",
      "C": "8 cm es el lado menor x, no el lado mayor x+4.",
      "D": "10 cm no satisface el área: 10×14=140 cm²."
    },
    "estrategia": "Forma x(x+4)=96, resuelve x²+4x−96=0 y descarta la raíz negativa por ser una longitud; suma 4 al lado menor.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-051",
    "numero": 51,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una tienda vende 3 cuadernos por $7.500. El precio unitario se mantiene.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto cuestan 8 cuadernos?",
    "opciones": {
      "A": "$20.000",
      "B": "$18.000",
      "C": "$19.500",
      "D": "$22.500"
    },
    "respuesta_correcta": "A",
    "explicacion": "Cada cuaderno cuesta 7.500/3=$2.500; 8×2.500=$20.000.",
    "explicacion_distractores": {
      "B": "$18.000 equivale a $2.250 por cuaderno, distinto del precio unitario observado.",
      "C": "$19.500 equivale a $2.437,50 por unidad; revisa 8×2.500.",
      "D": "$22.500 cobra $2.812,50 por cuaderno y excede la tarifa proporcional."
    },
    "estrategia": "Halla el precio por cuaderno (7.500/3=2.500) y multiplícalo por 8; pesos por cuaderno × cuadernos da pesos.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-052",
    "numero": 52,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Se lanzan dos dados equilibrados de seis caras.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la probabilidad de que la suma sea 7?",
    "opciones": {
      "A": "1/12",
      "B": "5/18",
      "C": "1/3",
      "D": "1/6"
    },
    "respuesta_correcta": "D",
    "explicacion": "Hay 6 resultados favorables de 36 equiprobables: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1); 6/36=1/6.",
    "explicacion_distractores": {
      "A": "1/12 cuenta solo tres de los seis pares favorables.",
      "B": "5/18 usa 10 resultados favorables, aunque solo seis sumas dan 7.",
      "C": "1/3 cuenta 12 pares favorables; enumera los resultados para evitar duplicar casos."
    },
    "estrategia": "Cuenta los pares ordenados que suman 7 (seis) entre los 36 resultados equiprobables de dos dados.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-053",
    "numero": 53,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una rampa sube 0,9 m por cada 12 m horizontales.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué porcentaje de pendiente tiene?",
    "opciones": {
      "A": "9%",
      "B": "13,3%",
      "C": "7,5%",
      "D": "6,7%"
    },
    "respuesta_correcta": "C",
    "explicacion": "Pendiente porcentual=(0,9/12)×100=7,5%.",
    "explicacion_distractores": {
      "A": "9% usa una elevación de 1,08 m en vez de 0,9 m.",
      "B": "13,3% invierte la razón a 12/0,9 y no convierte correctamente a porcentaje; la pendiente es elevación/avance.",
      "D": "6,7% divide o redondea mal la razón 0,9/12."
    },
    "estrategia": "La pendiente porcentual compara elevación vertical con avance horizontal: 0,9/12×100; las unidades de longitud se cancelan.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-054",
    "numero": 54,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Seis trabajadores pintan una fachada en 8 días. Con productividad igual, ¿cuántos días requieren 4 trabajadores?",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el tiempo?",
    "opciones": {
      "A": "14 días",
      "B": "12 días",
      "C": "5,3 días",
      "D": "10 días"
    },
    "respuesta_correcta": "B",
    "explicacion": "Trabajo=6×8=48 trabajador-días; 48/4=12 días.",
    "explicacion_distractores": {
      "A": "14 días excede el tiempo que resulta de repartir 48 trabajador-días entre 4.",
      "C": "5,3 días aplica proporcionalidad directa: con menos trabajadores no puede tardarse menos que 8 días.",
      "D": "10 días no satisface 4×10=48 trabajador-días; comprueba el producto."
    },
    "estrategia": "Antes de dividir, escribe el trabajo total como 6×8=48 trabajador-días; menos trabajadores implican más días para la misma tarea.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-055",
    "numero": 55,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Un jardín circular tiene radio 3 m. Use π≈3,14.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es su área?",
    "opciones": {
      "A": "28,26 m²",
      "B": "18,84 m²",
      "C": "9,42 m²",
      "D": "56,52 m²"
    },
    "respuesta_correcta": "A",
    "explicacion": "A=πr²=3,14×3²=28,26 m².",
    "explicacion_distractores": {
      "B": "18,84 m² calcula 2πr, que es una longitud de circunferencia, no área.",
      "C": "9,42 m² usa πr en vez de πr² y además omite el cuadrado.",
      "D": "56,52 m² duplica el área correcta; comprueba 3²=9 y multiplica por 3,14."
    },
    "estrategia": "El área circular usa radio al cuadrado, no diámetro ni circunferencia; sustituye r=3 y expresa el resultado en m².",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-056",
    "numero": 56,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Una población de 5.000 bacterias se duplica cada 3 horas.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántas habrá después de 9 horas?",
    "opciones": {
      "A": "10.000",
      "B": "20.000",
      "C": "45.000",
      "D": "40.000"
    },
    "respuesta_correcta": "D",
    "explicacion": "En 9 horas ocurren 3 duplicaciones: 5.000×2³=40.000.",
    "explicacion_distractores": {
      "A": "10.000 contempla una sola duplicación, no las tres transcurridas.",
      "B": "20.000 contempla dos duplicaciones; falta la de las horas 6 a 9.",
      "C": "45.000 no es una potencia de 2 veces 5.000; verifica 5.000×2³."
    },
    "estrategia": "Cuenta los intervalos completos de 3 horas en 9 horas: son 3; cada intervalo multiplica la población por 2.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-057",
    "numero": 57,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Un ciclista recorre 42 km en 1 h 45 min.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál fue su rapidez media en km/h?",
    "opciones": {
      "A": "25,2",
      "B": "28",
      "C": "24",
      "D": "21"
    },
    "respuesta_correcta": "C",
    "explicacion": "1 h 45 min=1,75 h; 42/1,75=24 km/h.",
    "explicacion_distractores": {
      "A": "25,2 usa una conversión de tiempo demasiado corta y sobrestima la rapidez.",
      "B": "28 km/h también sobrestima: verifica que 24×1,75=42 km.",
      "D": "21 km/h corresponde a dividir entre 2 h; 1 h 45 min son 1,75 h."
    },
    "estrategia": "Convierte 45 minutos a 0,75 h antes de dividir; rapidez media = kilómetros/horas y debe quedar en km/h.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-058",
    "numero": 58,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Un prisma rectangular mide 2,5 m × 1,2 m × 0,8 m.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es su volumen?",
    "opciones": {
      "A": "3,6 m³",
      "B": "2,4 m³",
      "C": "1,2 m³",
      "D": "2,0 m³"
    },
    "respuesta_correcta": "B",
    "explicacion": "V=2,5×1,2×0,8=2,4 m³.",
    "explicacion_distractores": {
      "A": "3,6 m³ no coincide con el producto de las tres dimensiones.",
      "C": "1,2 m³ omite o reduce uno de los factores del producto.",
      "D": "2,0 m³ redondea indebidamente un producto exacto de 2,4."
    },
    "estrategia": "Multiplica las tres dimensiones perpendiculares para obtener volumen; m×m×m produce m³.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-059",
    "numero": 59,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Un cultivo aumenta de 240 plantas a 300 plantas.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el aumento porcentual?",
    "opciones": {
      "A": "25%",
      "B": "20%",
      "C": "60%",
      "D": "125%"
    },
    "respuesta_correcta": "A",
    "explicacion": "Aumenta 60; 60/240×100=25%.",
    "explicacion_distractores": {
      "B": "20% usa una diferencia o denominador incorrectos; 60/240=0,25.",
      "C": "60 es el aumento en plantas, no el porcentaje; falta dividir por 240.",
      "D": "125% divide el valor final entre el inicial y olvida restar el 100% inicial."
    },
    "estrategia": "El aumento relativo toma 240 como base: calcula 300−240 y divide 60 entre 240 antes de pasar a porcentaje.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-060",
    "numero": 60,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Una persona dispone de $96.000 para comprar cuadernos de $8.000 y lápices de $2.000. Compra 6 cuadernos.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos lápices puede comprar con el dinero restante?",
    "opciones": {
      "A": "12",
      "B": "18",
      "C": "36",
      "D": "24"
    },
    "respuesta_correcta": "D",
    "explicacion": "Los cuadernos cuestan 6×8.000=$48.000; quedan $48.000, suficientes para 48.000/2.000=24 lápices.",
    "explicacion_distractores": {
      "A": "12 lápices usaría solo $24.000, aunque quedan $48.000.",
      "B": "18 no resulta de dividir el saldo de $48.000 entre $2.000.",
      "C": "36 cuesta $72.000 y supera el saldo; cada lápiz cuesta $2.000."
    },
    "estrategia": "Calcula primero el gasto de los seis cuadernos, réstalo del presupuesto y divide el saldo entre el precio de un lápiz.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-061",
    "numero": 61,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "La tarifa de taxi es $4.500 de bajada de bandera más $1.200 por kilómetro.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto cuesta un recorrido de 8 km?",
    "opciones": {
      "A": "$13.500",
      "B": "$15.700",
      "C": "$14.100",
      "D": "$9.600"
    },
    "respuesta_correcta": "C",
    "explicacion": "Costo=4.500+8×1.200=4.500+9.600=$14.100.",
    "explicacion_distractores": {
      "A": "$13.500 usa una tarifa variable o suma fija incorrecta.",
      "B": "$15.700 excede el cálculo $4.500+$9.600; revisa la suma.",
      "D": "$9.600 cuenta solo los kilómetros y omite los $4.500 fijos."
    },
    "estrategia": "Separa tarifa fija y variable: multiplica $1.200 por 8 km y suma una sola bajada de bandera.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-062",
    "numero": 62,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "En una bolsa, P(roja)=0,35 y P(azul)=0,25; los colores son excluyentes.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la probabilidad de sacar una ficha que no sea ni roja ni azul?",
    "opciones": {
      "A": "0,90",
      "B": "0,40",
      "C": "0,25",
      "D": "0,60"
    },
    "respuesta_correcta": "B",
    "explicacion": "P(no roja ni azul)=1-0,35-0,25=0,40.",
    "explicacion_distractores": {
      "A": "0,90 no respeta 1−0,35−0,25=0,40; comprueba que las tres categorías sumen 1.",
      "C": "0,25 es solo P(azul), no el complemento de ambos colores.",
      "D": "0,60 suma las dos probabilidades, pero pregunta por ninguno de esos eventos."
    },
    "estrategia": "Al ser excluyentes, suma P(roja)+P(azul) y resta del total 1; la probabilidad restante no puede ser negativa.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-063",
    "numero": 63,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una cancha rectangular de 28 m por 15 m se rodea con una franja de 1 m de ancho por fuera.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el área total de la cancha y la franja?",
    "opciones": {
      "A": "510 m²",
      "B": "420 m²",
      "C": "476 m²",
      "D": "540 m²"
    },
    "respuesta_correcta": "A",
    "explicacion": "Las dimensiones exteriores son 30 m×17 m; área=510 m².",
    "explicacion_distractores": {
      "B": "420 m² es el área de la cancha, sin la franja exterior.",
      "C": "476 m² aumenta el área de forma insuficiente; se deben ampliar ambas dimensiones antes de multiplicar.",
      "D": "540 m² corresponde a dimensiones exteriores distintas de 30×17."
    },
    "estrategia": "La franja agrega 1 m a cada lado de cada dimensión: las medidas exteriores son 28+2 y 15+2.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-064",
    "numero": 64,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Un plan cobra $18.000 fijos más $250 por cada GB consumido. La factura fue de $31.500.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos GB se consumieron?",
    "opciones": {
      "A": "45 GB",
      "B": "50 GB",
      "C": "126 GB",
      "D": "54 GB"
    },
    "respuesta_correcta": "D",
    "explicacion": "Consumo variable=31.500-18.000=13.500; 13.500/250=54 GB.",
    "explicacion_distractores": {
      "A": "45 GB no produce el saldo variable de $13.500; verifica 45×250.",
      "B": "50 GB costaría $12.500 variables, menos que los $13.500 facturados.",
      "C": "126 GB confunde la factura completa con el cargo variable o divide mal."
    },
    "estrategia": "Despeja el consumo variable restando los $18.000 fijos y divide el saldo entre $250/GB; cancela pesos.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-065",
    "numero": 65,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Un tren de 180 m atraviesa completamente un puente de 420 m a 20 m/s.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos segundos tarda desde que entra hasta que sale?",
    "opciones": {
      "A": "24 s",
      "B": "36 s",
      "C": "30 s",
      "D": "21 s"
    },
    "respuesta_correcta": "C",
    "explicacion": "Debe recorrer la longitud del tren más la del puente: 180+420=600 m; 600/20=30 s.",
    "explicacion_distractores": {
      "A": "24 s también usa una distancia incompleta (480 m) en vez de 600 m.",
      "B": "36 s exagera la distancia o reduce la rapidez; 600/20=30 s.",
      "D": "21 s considera solo 420 m del puente y omite la longitud del tren."
    },
    "estrategia": "Para que el tren salga por completo, la punta trasera debe recorrer la longitud del puente más la del tren; después divide por m/s.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-066",
    "numero": 66,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Una inversión de $2.000.000 gana 6% de interés simple anual durante 9 meses.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto interés genera?",
    "opciones": {
      "A": "$180.000",
      "B": "$90.000",
      "C": "$60.000",
      "D": "$120.000"
    },
    "respuesta_correcta": "B",
    "explicacion": "I=Cr t=2.000.000×0,06×(9/12)=$90.000.",
    "explicacion_distractores": {
      "A": "$180.000 triplica el interés correcto; revisa que 0,06×9/12=0,045.",
      "C": "$60.000 usa medio año en lugar de 9/12 de año.",
      "D": "$120.000 aplica el 6% a un año completo y no prorratea nueve meses."
    },
    "estrategia": "En interés simple usa meses como fracción de año: 9/12; multiplica capital, tasa anual y tiempo en años.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-067",
    "numero": 67,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Un recipiente contiene 2,4 litros de jugo y se sirve en vasos de 150 mL.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántos vasos completos se pueden llenar?",
    "opciones": {
      "A": "16",
      "B": "12",
      "C": "15",
      "D": "18"
    },
    "respuesta_correcta": "A",
    "explicacion": "2,4 L=2.400 mL; 2.400/150=16 vasos.",
    "explicacion_distractores": {
      "B": "12 vasos implican solo 1.800 mL servidos; queda capacidad sin contabilizar.",
      "C": "15 vasos son 2.250 mL; aún no se han repartido los 2.400 mL.",
      "D": "18 vasos requerirían 2.700 mL, más jugo del disponible."
    },
    "estrategia": "Convierte 2,4 L a 2.400 mL antes de dividir por 150 mL/vaso; la razón debe dar vasos completos.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-068",
    "numero": 68,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Dos ciclistas parten al mismo tiempo desde puntos separados 45 km y avanzan uno hacia el otro a 12 y 18 km/h.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántas horas tardan en encontrarse?",
    "opciones": {
      "A": "1 h",
      "B": "2 h",
      "C": "3,75 h",
      "D": "1,5 h"
    },
    "respuesta_correcta": "D",
    "explicacion": "La rapidez de acercamiento es 12+18=30 km/h; 45/30=1,5 h.",
    "explicacion_distractores": {
      "A": "1 h cubre 30 km, así que todavía no se recorre la separación de 45 km.",
      "B": "2 h cubrirían 60 km; el encuentro ocurre antes.",
      "C": "3,75 h resulta de dividir 45 entre 12 solamente e ignorar al segundo ciclista."
    },
    "estrategia": "Al acercarse uno al otro, suma velocidades para obtener 30 km/h; divide la separación en km por esa rapidez.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-069",
    "numero": 69,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Avanzado",
    "contexto": "Una secuencia de ahorro semanal es $5.000, $8.000, $11.000, ...; cada semana se agregan $3.000.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuánto se ahorra en la semana 10?",
    "opciones": {
      "A": "$30.000",
      "B": "$35.000",
      "C": "$32.000",
      "D": "$29.000"
    },
    "respuesta_correcta": "C",
    "explicacion": "Es una progresión aritmética: a₁₀=5.000+9×3.000=$32.000.",
    "explicacion_distractores": {
      "A": "$30.000 aplica un número incorrecto de incrementos; revisa n−1=9.",
      "B": "$35.000 suma diez incrementos y vuelve a contar el valor inicial como aumento.",
      "D": "$29.000 aplica ocho incrementos y se queda una semana antes."
    },
    "estrategia": "La semana 10 está nueve incrementos después de la semana 1; suma 9×$3.000 al monto inicial.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-070",
    "numero": 70,
    "competencia": "Formulación y ejecución",
    "afirmacion": "Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas",
    "dificultad": "Intermedio",
    "contexto": "Para cubrir un piso de 24 m² se usan baldosas cuadradas de 40 cm de lado; no se consideran cortes ni desperdicio.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuántas baldosas se requieren?",
    "opciones": {
      "A": "240",
      "B": "150",
      "C": "60",
      "D": "96"
    },
    "respuesta_correcta": "B",
    "explicacion": "Cada baldosa tiene área 0,4×0,4=0,16 m²; 24/0,16=150.",
    "explicacion_distractores": {
      "A": "240 duplica el conteo: 24/0,16=150 baldosas.",
      "C": "60 baldosas asumiría 0,4 m² por baldosa, pero el área es 0,16 m².",
      "D": "96 multiplica o escala linealmente el lado; se necesitan áreas, no longitudes."
    },
    "estrategia": "Convierte el lado a metros (0,4 m), calcula el área de una baldosa y divide el piso entre esa área; m² se cancela.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-071",
    "numero": 71,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Para calcular el promedio de notas de un curso de 30 estudiantes donde 10 sacaron 4.0 y 20 sacaron 3.0, un profesor afirma que el promedio del curso es (4.0 + 3.0) / 2 = 3.5.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "La afirmación del profesor es:",
    "opciones": {
      "A": "Correcta, porque el promedio de dos notas siempre es su semisuma simple.",
      "B": "Incorrecta, porque debe calcularse una media ponderada: las 20 notas de 3.0 tienen el doble de peso que las 10 notas de 4.0, resultando en un promedio de 3.33.",
      "C": "Correcta, siempre y cuando ningún estudiante haya reprobado la materia.",
      "D": "Incorrecta, porque el promedio solo puede calcularse sumando las notas y dividiendo entre 100."
    },
    "respuesta_correcta": "B",
    "explicacion": "Cuando los grupos tienen cantidades desiguales de observaciones, no se puede promediar los promedios simples. Media ponderada = [(10 * 4.0) + (20 * 3.0)] / 30 = (40 + 60) / 30 = 100 / 30 = 3.33. El promedio real está más cercano a 3.0.",
    "explicacion_distractores": {
      "A": "La semisuma simple solo es válida si ambos grupos tienen exactamente el mismo número de estudiantes (ej. 15 y 15).",
      "C": "La reprobación de estudiantes no altera la fórmula matemática de la media ponderada.",
      "D": "El divisor debe ser el número total de alumnos (30), no 100."
    },
    "estrategia": "Identifica la trampa: cuando los tamaños de grupo son diferentes, el promedio simple es erróneo; se requiere media ponderada.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-072",
    "numero": 72,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Un analista financiero sostiene que si el precio de una acción sube un 50% en el primer mes y cae un 50% en el segundo mes, el precio final de la acción vuelve a ser exactamente igual a su precio inicial.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Es matemáticamente válida la afirmación del analista?",
    "opciones": {
      "A": "Sí, porque un incremento porcentual positivo de +50% se cancela exactamente con una disminución del -50%.",
      "B": "No, porque el 50% de disminución se aplica sobre una base mayor (el precio ya incrementado), resultando en una pérdida neta del 25% respecto al valor original.",
      "C": "Sí, únicamente si la inflación de los dos meses fue igual a cero.",
      "D": "No, porque la acción terminará costando un 10% más que el valor inicial."
    },
    "respuesta_correcta": "B",
    "explicacion": "Si el precio inicial es P = 100: Tras subir 50%, pasa a 100 * 1.50 = 150. Tras caer 50% sobre el nuevo valor, pasa a 150 * 0.50 = 75. El precio final es 75, lo que representa una disminución del 25% sobre el precio inicial.",
    "explicacion_distractores": {
      "A": "Es la falacia de aditividad porcentual: los porcentajes sucesivos operan sobre bases de cálculo diferentes.",
      "C": "La inflación es una variable externa que no modifica la aritmética de las variaciones porcentuales relativas.",
      "D": "El resultado real es una caída del 25%, no una ganancia del 10%."
    },
    "estrategia": "Prueba siempre con un valor inicial base 100: 100 * 1.50 = 150; 150 * 0.50 = 75. Hay una pérdida neta del 25%.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-073",
    "numero": 73,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Una persona afirma que un número divisible entre 6 también debe ser divisible entre 4.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Es válida la afirmación?",
    "opciones": {
      "A": "Sí: ambos divisores son pares.",
      "B": "No: ningún múltiplo de 6 es divisible entre 4.",
      "C": "No: 6 es divisible entre 6, pero no entre 4.",
      "D": "Sí: todo múltiplo de 6 es múltiplo de 4."
    },
    "respuesta_correcta": "C",
    "explicacion": "El contraejemplo n=6 basta: 6/6=1, pero 6/4 no es entero.",
    "explicacion_distractores": {
      "A": "Ser par solo garantiza divisibilidad por 2, no por 4.",
      "B": "12 es múltiplo de 6 y de 4; por eso es falso que ningún múltiplo de 6 sea divisible por 4.",
      "D": "Que algunos múltiplos sean divisibles por 4 no demuestra que lo sean todos."
    },
    "estrategia": "Para probar una afirmación universal, busca un múltiplo de 6 que no sea múltiplo de 4; un caso basta para refutarla.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-074",
    "numero": 74,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Una estudiante sostiene que el promedio de 4, 8 y 12 es 8.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cómo se evalúa el procedimiento?",
    "opciones": {
      "A": "Correcto solo si los datos son consecutivos.",
      "B": "Correcto: (4+8+12)/3=24/3=8.",
      "C": "Incorrecto: el promedio es 6.",
      "D": "Incorrecto: debe usarse el mayor, 12."
    },
    "respuesta_correcta": "B",
    "explicacion": "La suma es 24 y hay tres datos; la media aritmética es 24/3=8.",
    "explicacion_distractores": {
      "A": "La condición de ser consecutivos no es necesaria para que el promedio sea 8.",
      "C": "6 no resulta de 24/3 y queda demasiado cerca del extremo inferior.",
      "D": "12 es el mayor dato, no la media de los tres valores."
    },
    "estrategia": "Suma los tres valores y divide por tres observaciones; el promedio debe quedar entre el menor y el mayor dato.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-075",
    "numero": 75,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un informe concluye que la mediana de 2, 3, 4, 100 es 4 porque es el valor central.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Es correcta la conclusión?",
    "opciones": {
      "A": "No: la mediana es (3+4)/2=3,5.",
      "B": "Sí: en todo conjunto par se toma el mayor central.",
      "C": "No: la mediana es la media, 27,25.",
      "D": "Sí: 4 es el dato más cercano al promedio."
    },
    "respuesta_correcta": "A",
    "explicacion": "Con cuatro datos ordenados se promedian los dos centrales: (3+4)/2=3,5.",
    "explicacion_distractores": {
      "B": "En cantidad par se promedian los dos centrales, no se escoge el mayor.",
      "C": "27,25 es la media aritmética afectada por 100, no la mediana.",
      "D": "La mediana se fija por posiciones ordenadas, no por cercanía al promedio."
    },
    "estrategia": "Con cuatro datos ordenados, promedia el segundo y el tercero; la mediana no depende del valor extremo 100.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-076",
    "numero": 76,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Un vendedor suma un aumento del 20% y luego una rebaja del 20% y afirma que vuelve al precio inicial.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Tiene razón?",
    "opciones": {
      "A": "Sí: +20%-20%=0%.",
      "B": "No: el precio queda en 100.",
      "C": "Sí: los porcentajes sucesivos siempre se cancelan.",
      "D": "No: con base 100, queda 100×1,2×0,8=96."
    },
    "respuesta_correcta": "D",
    "explicacion": "La rebaja actúa sobre 120 y es 24; el precio final es 96, no 100.",
    "explicacion_distractores": {
      "A": "Los porcentajes no se cancelan porque la base del segundo cambio ya es 120.",
      "B": "100 ignora que la rebaja es 20% de 120, es decir 24.",
      "C": "La opción sostiene la cancelación errónea; el producto de factores es 1,2×0,8=0,96."
    },
    "estrategia": "Usa una base de 100: tras subir queda 120 y la rebaja del 20% se calcula sobre 120, dejando 96.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-077",
    "numero": 77,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Al resolver 3(x-2)=12, un estudiante escribe 3x-2=12 y obtiene x=14/3.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Dónde está el error?",
    "opciones": {
      "A": "Debió dividir solo el 12 entre 3; x=2.",
      "B": "La solución es x=4 porque 3x=12.",
      "C": "Distribuyó mal: 3(x-2)=3x-6; por tanto x=6.",
      "D": "No hay error: x=14/3."
    },
    "respuesta_correcta": "C",
    "explicacion": "La distributiva multiplica ambos términos del paréntesis: 3x-6=12, así 3x=18 y x=6.",
    "explicacion_distractores": {
      "A": "Dividir solo 12 no mantiene la igualdad; primero aplica la distributiva.",
      "B": "x=4 resultaría de 3x=12, pero se omitió el −6 generado por el paréntesis.",
      "D": "La respuesta correcta no es «sin error»: el 3 debe multiplicar también al −2."
    },
    "estrategia": "Aplica la distributiva a los dos términos: 3x−6=12; luego suma 6 y divide por 3 para aislar x.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-078",
    "numero": 78,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Un estudiante afirma que √(a+b)=√a+√b para todos los números positivos.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué contraejemplo refuta la afirmación?",
    "opciones": {
      "A": "No existe contraejemplo.",
      "B": "a=b=1: √2≠2.",
      "C": "a=4,b=0: 2=2.",
      "D": "a=9,b=16: 5=7."
    },
    "respuesta_correcta": "B",
    "explicacion": "Al elegir a=b=1, el lado izquierdo es √2≈1,414 y el derecho es 1+1=2.",
    "explicacion_distractores": {
      "A": "a=b=1 produce √2 frente a 2; sí hay contraejemplos.",
      "C": "a=4,b=0 da igualdad y por eso no refuta una afirmación universal.",
      "D": "a=9,b=16 también da √25=5 y 3+4=7; es otro contraejemplo válido. El ítem queda con dos respuestas correctas y requiere revisión posterior, aunque aquí se conserva la clave solicitada."
    },
    "estrategia": "Evalúa ambos lados con un par positivo sencillo; compara √(a+b) con √a+√b para refutar la regla.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-079",
    "numero": 79,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Una encuesta voluntaria en una página web recibe 800 respuestas y se usa para afirmar la opinión de toda la ciudad.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué objeción metodológica es más sólida?",
    "opciones": {
      "A": "La muestra es autoseleccionada y puede no representar a la ciudad.",
      "B": "800 respuestas siempre son representativas.",
      "C": "La conclusión es válida porque la encuesta es digital.",
      "D": "Solo sería sesgada si hubiera menos de 100 respuestas."
    },
    "respuesta_correcta": "A",
    "explicacion": "El tamaño no elimina el sesgo de selección: solo responden quienes deciden participar.",
    "explicacion_distractores": {
      "B": "Un gran número no corrige que la participación dependa de autoselección.",
      "C": "El medio digital no hace aleatoria ni representativa la muestra.",
      "D": "El sesgo no depende de un umbral de 100; importa el mecanismo de selección."
    },
    "estrategia": "Distingue tamaño de muestra y representatividad: identifica quién pudo responder y qué grupos quedaron fuera.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-080",
    "numero": 80,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "En una fábrica, 4 de 20 piezas son defectuosas. El gerente concluye que exactamente 20% de toda la producción será defectuosa.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué puede concluirse estrictamente?",
    "opciones": {
      "A": "Exactamente 20% de cualquier lote será defectuoso.",
      "B": "La población tiene cero piezas defectuosas.",
      "C": "La proporción de la muestra es 4%.",
      "D": "En la muestra, 4/20=20%; la proporción poblacional es una estimación."
    },
    "respuesta_correcta": "D",
    "explicacion": "4/20=0,20 describe la muestra observada; no garantiza que cada lote poblacional tenga idéntica proporción.",
    "explicacion_distractores": {
      "A": "La proporción muestral no garantiza que cada lote tenga exactamente el mismo porcentaje.",
      "B": "La muestra sí registra cuatro defectuosas, así que no puede concluirse que la población tenga cero.",
      "C": "4/20 equivale a 20%, no a 4%; expresa la razón como porcentaje."
    },
    "estrategia": "Limita la afirmación a las 20 piezas observadas: 4/20=20%; inferir toda la producción requiere muestreo representativo.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-081",
    "numero": 81,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un ciclista calcula su velocidad media como el promedio de 20 km/h y 40 km/h porque recorrió dos tramos.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuándo sería válido ese promedio simple?",
    "opciones": {
      "A": "Siempre, por haber dos velocidades.",
      "B": "Solo si el primer tramo fue más largo.",
      "C": "Solo si los dos tramos tuvieron igual duración.",
      "D": "Siempre que las distancias sean iguales."
    },
    "respuesta_correcta": "C",
    "explicacion": "La media temporal pondera cada velocidad por su duración; promediarlas por igual requiere tiempos iguales.",
    "explicacion_distractores": {
      "A": "Tener dos velocidades no basta para promediarlas; importa cuánto duró cada tramo.",
      "B": "Un primer tramo más largo no justifica el promedio simple y cambia su ponderación.",
      "D": "Distancias iguales no implican tiempos iguales cuando las velocidades difieren."
    },
    "estrategia": "La media de velocidades por tiempo pondera cada tramo por su duración; un promedio simple solo vale si ambos tiempos son iguales.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-082",
    "numero": 82,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Una persona dice que si 2/3=4/6, entonces 2/3 es menor que 4/6 porque 2<4.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué evaluación es correcta?",
    "opciones": {
      "A": "No pueden compararse fracciones con denominadores distintos.",
      "B": "Son iguales: numerador y denominador se duplicaron.",
      "C": "4/6 es mayor porque 4>2.",
      "D": "2/3 es menor por tener numerador menor."
    },
    "respuesta_correcta": "B",
    "explicacion": "4/6 se simplifica dividiendo numerador y denominador entre 2 y se obtiene 2/3.",
    "explicacion_distractores": {
      "A": "Sí se comparan denominadores distintos mediante simplificación o producto cruzado.",
      "C": "Los numeradores no se comparan solos: 4/6 se reduce a 2/3.",
      "D": "La fracción no es menor: ambas se simplifican a la misma razón."
    },
    "estrategia": "Multiplica numerador y denominador por el mismo factor para comprobar equivalencia, o simplifica 4/6 entre 2.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-083",
    "numero": 83,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un procedimiento concluye que (x+3)²=x²+9.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la expansión correcta?",
    "opciones": {
      "A": "x²+6x+9.",
      "B": "x²+3x+9.",
      "C": "x²+9x+9.",
      "D": "x²+6x+6."
    },
    "respuesta_correcta": "A",
    "explicacion": "(x+3)²=(x+3)(x+3)=x²+3x+3x+9=x²+6x+9.",
    "explicacion_distractores": {
      "B": "Falta uno de los dos términos cruzados; (x+3)² contiene 6x.",
      "C": "El término cruzado no es 9x: cada producto cruzado es 3x.",
      "D": "El término constante es 9, no 6; el cuadrado del binomio conserva 3²."
    },
    "estrategia": "Desarrolla el producto (x+3)(x+3); aparecen dos términos cruzados iguales a 3x.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-084",
    "numero": 84,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Un mapa usa escala 1:50.000. Un alumno afirma que 3 cm representan 150.000 km.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la corrección?",
    "opciones": {
      "A": "Representan 15 km.",
      "B": "Representan 150 km.",
      "C": "La escala no permite convertir distancias.",
      "D": "Representan 150.000 cm, es decir, 1,5 km."
    },
    "respuesta_correcta": "D",
    "explicacion": "3×50.000=150.000 cm; como 100.000 cm=1 km, son 1,5 km.",
    "explicacion_distractores": {
      "A": "150.000 cm son 1,5 km, no 15 km; divide por 100.000 cm/km.",
      "B": "150.000 cm son 1,5 km, no 150 km; se desplazó mal la conversión.",
      "C": "La escala sí permite convertir; expresa primero ambos valores en unidades compatibles."
    },
    "estrategia": "La escala 1:50.000 da centímetros reales: 3×50.000=150.000 cm; divide entre 100.000 para convertir a km.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-085",
    "numero": 85,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un estudiante calcula P(A o B)=P(A)+P(B) para dos eventos que pueden ocurrir simultáneamente.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué término debe considerar?",
    "opciones": {
      "A": "Multiplicar P(A) por P(B) siempre.",
      "B": "No se puede calcular ninguna unión.",
      "C": "Restar P(A y B) para no contar la intersección dos veces.",
      "D": "Sumar P(A y B) una segunda vez."
    },
    "respuesta_correcta": "C",
    "explicacion": "La regla general es P(A∪B)=P(A)+P(B)-P(A∩B).",
    "explicacion_distractores": {
      "A": "La regla de multiplicación es para intersecciones bajo condiciones pertinentes, no para toda unión.",
      "B": "La unión sí puede calcularse con P(A)+P(B)−P(A∩B).",
      "D": "Sumar la intersección otra vez la contaría tres veces, no corrige el doble conteo."
    },
    "estrategia": "Para la unión general, suma probabilidades y resta la intersección compartida una vez, pues se contó dos veces.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-086",
    "numero": 86,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Se afirma que el área de un cuadrado se duplica al duplicar el lado.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué ocurre en realidad?",
    "opciones": {
      "A": "No cambia porque el lado y el área son proporcionales.",
      "B": "Se cuadruplica: (2l)²=4l².",
      "C": "Se duplica: A=2l².",
      "D": "Se multiplica por 8."
    },
    "respuesta_correcta": "B",
    "explicacion": "Si el lado pasa de l a 2l, el área pasa de l² a (2l)²=4l².",
    "explicacion_distractores": {
      "A": "Lado y área no son proporcionales directamente; el área varía con l².",
      "C": "A(2l)=4l², no 2l²; se olvida elevar al cuadrado el factor 2.",
      "D": "El área no se multiplica por 8: el factor es 2²=4."
    },
    "estrategia": "Sustituye el lado duplicado en A=l²; el factor de cambio del área es el cuadrado del factor lineal.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-087",
    "numero": 87,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un informe compara ventas de $20 millones y $30 millones y dice que la segunda supera la primera en 10%.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es el aumento porcentual correcto?",
    "opciones": {
      "A": "50%, pues 10/20×100=50%.",
      "B": "10%, porque la diferencia es $10 millones.",
      "C": "33,3%, usando 30 como base.",
      "D": "150%, porque 30/20×100=150%."
    },
    "respuesta_correcta": "A",
    "explicacion": "El incremento absoluto es 10 y la base es el valor inicial 20; 10/20=0,5=50%.",
    "explicacion_distractores": {
      "B": "10 millones es el aumento absoluto; como porcentaje de 20 millones equivale a 50%.",
      "C": "Usar 30 como base da 33,3%, pero la base de aumento es el valor inicial 20.",
      "D": "30/20=150% es el nivel final respecto al inicial, no el incremento; resta el 100% base."
    },
    "estrategia": "El aumento porcentual se mide respecto a la venta inicial: diferencia 10 dividida entre 20 millones.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-088",
    "numero": 88,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Para resolver x/5=7, una alumna multiplica ambos lados por 5 y obtiene x=35.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Es correcto?",
    "opciones": {
      "A": "No: debía dividir entre 5 y x=1,4.",
      "B": "No: x=12.",
      "C": "Sí, pero solo si x es entero positivo.",
      "D": "Sí: al multiplicar ambos lados por 5 se obtiene x=35."
    },
    "respuesta_correcta": "D",
    "explicacion": "5×(x/5)=5×7 implica x=35; la operación conserva la igualdad.",
    "explicacion_distractores": {
      "A": "Dividir entre 5 vuelve a dividir el lado izquierdo; para deshacer /5 se multiplica.",
      "B": "x=12 no satisface la ecuación, pues 12/5≠7.",
      "C": "No se requiere que x sea entero; la equivalencia vale para todo x real y da 35."
    },
    "estrategia": "Multiplica ambos lados de x/5=7 por 5 y cancela el divisor; comprueba sustituyendo 35/5=7.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-089",
    "numero": 89,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un corredor completa 10 km en 50 minutos. El entrenador afirma que su ritmo fue 5 min/km.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿La afirmación es correcta?",
    "opciones": {
      "A": "No: su ritmo fue 10 min/km.",
      "B": "Sí: 10/50=5 min/km.",
      "C": "Sí: 50/10=5 min/km.",
      "D": "No: su ritmo fue 0,2 min/km."
    },
    "respuesta_correcta": "C",
    "explicacion": "El ritmo es tiempo dividido por distancia: 50 minutos/10 km=5 min/km.",
    "explicacion_distractores": {
      "A": "10 min/km sale de dividir 50 entre 5; se debe usar la distancia total de 10 km.",
      "B": "10/50=0,2 km/min es velocidad, no ritmo; invierte para obtener min/km.",
      "D": "0,2 invierte la razón y usa km/min, no minutos por kilómetro."
    },
    "estrategia": "El ritmo en min/km es tiempo dividido entre distancia: 50 min/10 km; confirma que la unidad resultante sea min/km.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-090",
    "numero": 90,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Una persona transforma 0,4 en 4% al convertir un decimal en porcentaje.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la conversión correcta?",
    "opciones": {
      "A": "400%, porque se multiplica por 1.000.",
      "B": "40%, porque 0,4×100=40.",
      "C": "4%, porque se mueve la coma un lugar.",
      "D": "0,4%."
    },
    "respuesta_correcta": "B",
    "explicacion": "Para expresar un decimal como porcentaje se multiplica por 100: 0,4×100%=40%.",
    "explicacion_distractores": {
      "A": "400% multiplica por 1.000, tres lugares, en vez de por 100.",
      "C": "4% mueve la coma solo un lugar; 0,4 equivale a 40%.",
      "D": "0,4% no multiplica el decimal por 100."
    },
    "estrategia": "Para pasar de decimal a porcentaje, multiplica por 100 y añade %; mueve la coma dos lugares.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-091",
    "numero": 91,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un rectángulo de perímetro 20 cm tiene lados 4 cm y 6 cm; se afirma que su área es 20 cm².",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué verificación es correcta?",
    "opciones": {
      "A": "El perímetro sí es 20 cm, pero el área es 4×6=24 cm².",
      "B": "Área 20 cm² porque coincide con el perímetro.",
      "C": "Área 10 cm².",
      "D": "El perímetro es 24 cm y el área 20 cm²."
    },
    "respuesta_correcta": "A",
    "explicacion": "2(4+6)=20 verifica el perímetro; el área se calcula como 4×6=24 cm².",
    "explicacion_distractores": {
      "B": "El área no coincide con el perímetro: son magnitudes distintas y 4×6=24 cm².",
      "C": "10 cm² suma los lados una sola vez; área requiere el producto 4×6.",
      "D": "El perímetro sí es 20 cm; 24 corresponde al área, no al perímetro."
    },
    "estrategia": "Verifica por separado el perímetro 2(4+6) y el área 4×6; sus unidades son cm y cm², respectivamente.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-092",
    "numero": 92,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Un pronóstico para el próximo mes se basa en que las ventas subieron cada mes durante los últimos tres meses.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué conclusión es justificable?",
    "opciones": {
      "A": "Las ventas necesariamente crecerán.",
      "B": "Las ventas se duplicarán el próximo mes.",
      "C": "La tendencia pasada no contiene información.",
      "D": "La tendencia reciente fue creciente, pero no demuestra que seguirá creciendo."
    },
    "respuesta_correcta": "D",
    "explicacion": "Tres observaciones permiten describir una tendencia pasada, no asegurar determinísticamente el futuro.",
    "explicacion_distractores": {
      "A": "Una tendencia creciente no garantiza que el mes siguiente también crezca.",
      "B": "No hay información suficiente para asegurar una duplicación.",
      "C": "Los datos sí describen una tendencia pasada; simplemente no prueban su continuación."
    },
    "estrategia": "Separa descripción de predicción: tres aumentos consecutivos muestran una tendencia pasada, no determinan el próximo dato.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-093",
    "numero": 93,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Una caja tiene 3 bolas rojas y 2 azules. Se extrae una roja y no se repone; alguien afirma que la probabilidad de roja sigue en 3/5.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es ahora la probabilidad de roja?",
    "opciones": {
      "A": "3/4.",
      "B": "1/5.",
      "C": "2/4=1/2.",
      "D": "3/5, porque la caja original tenía cinco bolas."
    },
    "respuesta_correcta": "C",
    "explicacion": "Después de extraer una roja quedan 2 rojas de 4 bolas, por lo que P(roja)=2/4=1/2.",
    "explicacion_distractores": {
      "A": "3/4 mantiene tres rojas aunque ya se retiró una; quedan dos.",
      "B": "1/5 toma una bola favorable sobre el total inicial; ahora quedan cuatro y dos rojas.",
      "D": "3/5 describe la caja antes de extraer; ambas cantidades cambiaron."
    },
    "estrategia": "Tras retirar una roja quedan 2 rojas entre 4 bolas; reduce 2/4 y recuerda que la extracción fue sin reposición.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-094",
    "numero": 94,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Un estudiante afirma que todo número cuyo cuadrado es 25 debe ser 5.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué solución completa corrige la afirmación?",
    "opciones": {
      "A": "No hay solución real negativa.",
      "B": "x=5 o x=-5, pues ambos cuadrados son 25.",
      "C": "Solo x=5, porque las raíces son positivas.",
      "D": "x=25 o x=-25."
    },
    "respuesta_correcta": "B",
    "explicacion": "Resolver x²=25 da x=±√25=±5.",
    "explicacion_distractores": {
      "A": "Sí existe raíz real negativa: el cuadrado de −5 también es 25.",
      "C": "Las raíces cuadradas al resolver una ecuación cuadrática incluyen ambos signos.",
      "D": "25 no es solución porque 25²≠25."
    },
    "estrategia": "Resuelve x²=25 como x=±√25; comprueba que tanto 5² como (−5)² valen 25.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-095",
    "numero": 95,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un gráfico de barras representa 10, 11 y 12 unidades, pero el eje vertical empieza en 9 y no en 0.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué efecto puede producir ese eje truncado?",
    "opciones": {
      "A": "Puede exagerar visualmente las diferencias entre barras.",
      "B": "Cambia los valores numéricos de los datos.",
      "C": "Garantiza que la comparación sea más precisa.",
      "D": "Hace que las tres cantidades sean iguales."
    },
    "respuesta_correcta": "A",
    "explicacion": "Al mostrar solo el tramo desde 9, la diferencia de alturas ocupa una fracción visual mayor que en un eje desde cero.",
    "explicacion_distractores": {
      "B": "El truncamiento afecta la impresión visual, no los datos numéricos.",
      "C": "Empezar en 9 no aumenta precisión; puede inducir una comparación exagerada.",
      "D": "Los valores siguen siendo 10, 11 y 12; el eje no los iguala."
    },
    "estrategia": "Compara la altura recortada con el rango real: al empezar en 9, diferencias de una unidad ocupan gran parte del dibujo.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-096",
    "numero": 96,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Una empresa afirma que su producción subió 10% y al mes siguiente bajó 10%, por lo que volvió al nivel inicial.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué resultado se obtiene partiendo de 200 unidades?",
    "opciones": {
      "A": "200 unidades, porque los porcentajes se cancelan.",
      "B": "202 unidades.",
      "C": "180 unidades.",
      "D": "198 unidades: 200×1,1×0,9=198."
    },
    "respuesta_correcta": "D",
    "explicacion": "Tras subir queda 220; bajar 10% de 220 resta 22 y deja 198, un 1% menos que 200.",
    "explicacion_distractores": {
      "A": "200 supone que el segundo 10% se calcula sobre 200; en realidad se resta 22 de 220.",
      "B": "202 no resulta de aplicar −10% a 220; calcula 220−22.",
      "C": "180 resta 20 al valor inicial y omite primero el aumento a 220."
    },
    "estrategia": "Aplica los factores sucesivos sobre sus bases nuevas: 200×1,10=220 y 220×0,90=198.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-097",
    "numero": 97,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un tanque cilíndrico conserva su altura y duplica el radio; se afirma que duplica su capacidad.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cómo se evalúa la afirmación?",
    "opciones": {
      "A": "Falsa: el volumen se octuplica.",
      "B": "Verdadera solo si r=h.",
      "C": "Falsa: V=πr²h, así que el volumen se cuadruplica.",
      "D": "Verdadera: el volumen es proporcional al radio."
    },
    "respuesta_correcta": "C",
    "explicacion": "V'/V=π(2r)²h/(πr²h)=4; duplicar radio cuadruplica el volumen.",
    "explicacion_distractores": {
      "A": "Octuplicar exigiría duplicar también una dimensión lineal adicional; h permanece igual.",
      "B": "La relación r=h no determina el cambio; con h fija, duplicar r cuadruplica V.",
      "D": "El volumen no es proporcional linealmente al radio porque este aparece al cuadrado."
    },
    "estrategia": "En V=πr²h, mantener h fija y duplicar r multiplica r² por cuatro; cancela π y h al comparar.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-098",
    "numero": 98,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Un gráfico de dispersión de horas de práctica y errores muestra asociación negativa. El autor dice que practicar causa menos errores.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Qué limitación invalida esa conclusión causal?",
    "opciones": {
      "A": "Los gráficos de dispersión no muestran asociaciones.",
      "B": "La asociación por sí sola no descarta variables de confusión ni prueba causalidad.",
      "C": "Una asociación negativa significa que ambas variables aumentan juntas.",
      "D": "La conclusión es causal porque hay muchos puntos."
    },
    "respuesta_correcta": "B",
    "explicacion": "La correlación describe relación observada; sin diseño o control de variables no establece causalidad.",
    "explicacion_distractores": {
      "A": "Un diagrama de dispersión sí permite observar asociaciones, aunque no pruebe causa.",
      "C": "Asociación negativa significa que una variable tiende a bajar cuando la otra sube.",
      "D": "Muchos puntos no eliminan confusores ni convierten correlación en causalidad."
    },
    "estrategia": "Una asociación describe variación conjunta, no causa; pregunta qué variables omitidas o diseño experimental podrían explicar el patrón.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-099",
    "numero": 99,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Intermedio",
    "contexto": "Un plano de habitación está dibujado a escala 1:100. Un lado mide 4 cm y otro 3 cm; se afirma que el área real es 12 m².",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Es correcto?",
    "opciones": {
      "A": "Sí: las medidas reales son 4 m y 3 m, y su producto es 12 m².",
      "B": "No: el área real es 1.200 m².",
      "C": "No: el área real es 7 m².",
      "D": "Sí: 12 cm² equivalen a 12 m²."
    },
    "respuesta_correcta": "A",
    "explicacion": "A escala 1:100, 4 cm y 3 cm representan 4 m y 3 m; el área es 4×3=12 m².",
    "explicacion_distractores": {
      "B": "1.200 m² resulta de escalar el área de forma equivocada; cada lado queda en metros antes del producto.",
      "C": "7 m suma longitudes y no calcula el área de 4×3 m.",
      "D": "12 cm² y 12 m² no son unidades equivalentes; el resultado correcto proviene de 4 m×3 m."
    },
    "estrategia": "Aplica la escala a cada longitud (4 cm→4 m y 3 cm→3 m) y después multiplica; cm² del plano no se convierten como cm.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  },
  {
    "id": "rc-100",
    "numero": 100,
    "competencia": "Argumentación",
    "afirmacion": "Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas",
    "dificultad": "Avanzado",
    "contexto": "Una estudiante convierte 3,2 km en 320 m al cambiar de unidad.",
    "tabla_datos": null,
    "grafico_svg": null,
    "enunciado": "¿Cuál es la conversión correcta?",
    "opciones": {
      "A": "3,2 km=32 m.",
      "B": "3,2 km=320 m.",
      "C": "3,2 km=32.000 m.",
      "D": "3,2 km=3.200 m, porque cada kilómetro contiene 1.000 metros."
    },
    "respuesta_correcta": "D",
    "explicacion": "Se multiplica 3,2 por 1.000: 3,2×1.000=3.200 m.",
    "explicacion_distractores": {
      "A": "32 m mueve la coma una posición, cuando hacen falta tres al multiplicar por 1.000.",
      "B": "320 m multiplica por 100, no por 1.000.",
      "C": "32.000 m multiplica por 10.000; se desplazó la coma un lugar de más."
    },
    "estrategia": "Usa 1 km=1.000 m: multiplica 3,2 por 1.000 y revisa que el número de metros sea mayor que los kilómetros.",
    "tiempo_objetivo": 120,
    "fuente": "Marco de Referencia de Razonamiento Cuantitativo Saber Pro (ICFES)"
  }
];
