# Modelado de Series Temporales (LSTMs)

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad aborda el análisis y la prospección estocástica de secuencias temporales en las que rige el orden de los eventos. Nos adentramos en modelos específicos como las Redes recurrentes con Memoria a Corto y Largo Plazo (**LSTMs** - *Long Short-Term Memory*) aplicadas a eventos climáticos complejos (predicciones meteorológicas, precipitaciones interanuales e hitos estacionales). 

## 🎯 Objetivos de Aprendizaje
- Entender la estructuración del histórico secuencial: ventana de observación histórica y ventana predictiva a futuro (generación de tensores en *3D*).
- Manejar librerías orientadas a la conexión vía API para ingesta de datos en tiempo real o en diferido sobre *datasets* meteorológicos (e.g. AEMET, Kaggle).
- Implementar unidades LSTMs en la arquitectura `Sequential` de Keras/TensorFlow.
- Emplear técnicas matemáticas para lidiar con el componente cíclico estacional inherente a los datos ambientales (transformaciones de Fourier/Seno-Coseno).
- Visualizar de manera animada, atractiva e interactiva el progreso histórico usando módulos dinámicos y HTML integrados.

## 🧠 Contenidos

### Transformaciones y Preprocesamiento Predictivo Temporal
- **La Dimensión Cíclica**: Los datos continuos en fechas/horas no siempre respetan la temporalidad humana. Ingesta de *features* periódicas modificándolas mediante la superposición matemática `sin-cos` para informar al modelo adecuadamente de un periodo del año.
- **Ventana Dinámica de Predicción:** Función iteradora (`create_sequences`) adaptando o mapeando cada matriz a la temporalidad recurrente; escalado imperativo (`MinMaxScaler`) y gestión de imputaciones (nulos de información de estaciones meteorológicas).

###  Estructura de la Capa LSTM
- Conceptos clave de las LSTMs (célula, estados de la memoria e ignorado).
- Predicción a 1 punto vs predicción a múltiples lapsos futuros.
- Evaluación usando variables absolutas o continuas típicas: Error Absoluto de la Media (MAE) o Error Cuadrático (MSE) frente al habitual *accuracy* que se aplicó en modelos clasificadores previos de otras unidades.

### Integración Visual Interactiva
- Despliegues renderizados generados en formato video HTML para ilustrar el desempeño de la serie temporal usando de base `matplotlib.animation`.
- Interfaz gráfica superpuesta del patrón real *vs* modelo.

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| TensorFlow.keras.layers (LSTM) | Unidad central de recolección temporal recursiva dentro del esquema API estándar general. |
| Scikit-learn (MinMaxScaler) | Escalador vital para estabilizar matrices dependientes, ya que los modelos RNN son altamente susceptibles a variaciones. |
| Requests / Sys | Solicitud y captura vía REST-API de parámetros para la ingesta. |
| Matplotlib.Animation & HTML | Capacidad dinámica para reproducir los patrones predecidos vs patrones reales sobre las libretas Jupyter. |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `Series_temporales_lstm.ipynb` | Notebook | Macro libreta englobando teoría de predicción de temperaturas, estacionalidad, ventanas secuenciales y Random Forest. |
| `SeriesTemporales_Lluvia_ValenciaAEMET.ipynb` | Notebook | Actividad aplicada con conexión directa al sistema e inventario general histórico de precipitaciones de Valencia (AEMET). |
| `SeriesTemporales_LluviaBangladesh.ipynb` | Notebook | Actividad guiada y modelada sobre la detección o predicción en la variación de las precipitaciones torrenciales/monzónicas en la región de Bangladesh. |

## 🔗 Relación con otros temas
Representa la antesala directa para el bloque de Procesamiento de Lenguaje Natural (UD7), ya que se introducen características recursivas que servirán conceptualmente para entender el flujo sintáctico en textos o cualquier variable de secuencias vectoriales ordenadas.
