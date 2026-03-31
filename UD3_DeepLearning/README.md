# Prácticas de Deep Learning

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
En este bloque aplicamos todos los conocimientos previos de Redes Neuronales Artificiales a problemas reales de alto nivel ("End-to-End"), utilizando la API de Keras sobre TensorFlow. Las prácticas engloban la evaluación de modelos en problemas de clasificación (binaria, como el diagnóstico de la diabetes) y predicción matemática fina de variables continuas (regresión asocial a precios de venta o valoraciones de calidad).

## 🎯 Objetivos de Aprendizaje
- Dominar el flujo de trabajo integral en Ciencia de Datos: Importación de datasets, Análisis Exploratorio de Datos (EDA), Preprocesamiento, Construcción del Modelo, Entrenamiento y Validación.
- Diferenciar el enfoque arquitectónico (Neuronas, Activaciones, Funciones de pérdida) requerido para problemas de Clasificación vs problemas de Regresión.
- Implementar Feature Engineering, analizando distribuciones, correlaciones lineales y detectando valores nulos antes del entrenamiento.
- Experimentar empíricamente ajustando la profundidad y densidad de la capa oculta de la arquitectura neuronal.

## 🧠 Contenidos

### Diseño de Pipeline Completo de Machine Learning
Todas las prácticas siguen una estructura metódica: 
1. Carga, exploración inicial de los datos (Estadística Descriptiva con *describe* o gráficos).
2. Preguntas orientadas sobre los datos (composición del target a predecir).
3. Ingeniería de características y normalización/escalado (StandardScaler/RobustScaler y One-Hot-Encoding).
4. Configuración topológica del modelo (Capa `Input`, Capas densas y dimensionamiento final del parámetro *Output*).
5. Entrenamiento, iteraciones cíclicas mejoradas e inferencia o visualización (*Loss* vs *Accuracy* / RMSE).

### Clasificación y Regresión en Escenarios Reales
- **Boston Housing**: Determinación de un precio en base al número de habitaciones de residencias, impuestos y criminalidad asociada (Regresión + Clasificación adaptada).
- **Vinos**: Predicción de la tasación sensorial de calidad en vinos.
- **Diabetes Pima Indians**: Predicción del riesgo o diagnóstico diabético usando funciones de coste binarias.

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| TensorFlow y Keras | Construcción, ajuste dinámico mediante el optimizador `Adam`, `EarlyStopping`, métricas multicategóricas. |
| Scikit-learn (Sklearn) | Transformadores de normalización, matrices de confusión, curvas ROC (`roc_curve`), `accuracy_score` y `classification_report`. |
| Pandas | Limpieza de datos estructurados e ingestión (*CSV Pipeline*). |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `Analisis_Diabetes.ipynb` | Notebook | Pipeline completo con Keras: preprocesado de la diabetes y gráficos integrados (Accuracy/ROC). |
| `diabetes.ipynb` | Notebook | Análisis en profundidad y clasificación binaria utilizando de forma directa Keras `Sequential`. |
| `regresionBoston.ipynb` | Notebook | Notebook robusto mostrando diferencias estructurales en un mismo archivo (clasificación y regresión simultánea). |
| `calidadVino.ipynb` | Notebook | Resolución de un problema evaluatorio real de vinos a partir de features complejas. |

## 🔗 Relación con otros temas
Este bloque de experimentación es el paso anterior natural al estudio de arquitecturas pre-entrenadas complejas en el campo de la visión artificial (Computer Vision y ResNets de Bloques Residuales - UD4).
