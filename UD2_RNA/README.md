# Redes Neuronales Artificiales (RNA)

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad nos adentra en la base del Deep Learning: las Redes Neuronales Artificiales. Abarcamos desde modelos históricos iniciales —el Perceptrón y el MLP (Multilayer Perceptron)— hasta arquitecturas modernas como las Redes Convolucionales (CNN) utilizadas en Visión Artificial. Además, aprendemos a implementar los mecanismos de regularización (`callbacks`) y normalización (`BatchNormalization` y `Dropout`) vitales para el entrenamiento eficiente.

## 🎯 Objetivos de Aprendizaje
- Comprender e interpretar la unidad fundamental de Deep Learning: el perceptrón simple y los límites de decisión.
- Diseñar e implementar redes de tipo Perceptrón Multicapa para problemas de regresión y clasificación (como la estimación del precio de la vivienda, tipos de cáncer, etc).
- Comprender y aplicar arquitecturas convolucionales mediante abstracciones visuales e instanciando filtros.
- Implementar mecanismos de control, detención temprana (*early stopping*), guardados dinámicos (`ModelCheckpoint`) y otros *callbacks*.
- Experimentar activamente con las características de las capas (neuronas, lotes, optimizadores).

## 🧠 Contenidos

### Fundamentos 
- **El Perceptrón:** Carga de datos, sanity checks, splits de entramiento, funciones `.fit` y métricas. 
- **Multilayer Perceptron:** Uso de `sklearn.neural_network.MLPClassifier`. Selección y reducción de características visuales. Límite de decisión multiclase.

### Deep Learning y CNNs
- **Modelado Secuencial (APIs de Keras/TensorFlow)**: Aproximación de funciones y problemas de regresión o clasificación binaria.
- **Computer Vision & Convolución**: Análisis de la Red Fully Connected frente a la Red Convolucional. Capas `Conv2D`, `MaxPool2D`, tamaño de lote (*batch size*), y técnicas de regularización para abatir el sobreajuste.

### Casos Prácticos Completos (End-to-End)
- Ejercicios completos desde la importación de datos (`load_breast_cancer`, diabetes, hormigón, Boston housing), preprocesamiento con `StandardScaler`, construcción de la arquitectura y la evaluación (`accuracy`/`f1-score`) de los resultados.
- Incorporación de clases heredadas para programación dinámica de Callbacks a medida sobre datos del conjunto Fashion MNIST.

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| TensorFlow & Keras | Framework principal para diseñar y entrenar redes neuronales artificiales avanzadas (`Sequential`/`Model`). |
| Scikit-learn (Sklearn) | Modelos base (Perceptrón y MLP) y preprocesamiento de datos (escaladores y splits). |
| Numpy & Pandas | Tratamiento, manipulación  e ingestión inicial de los *datasets* estructurados. |
| Matplotlib & Seaborn | Gráficas del histórico de pérdidas y evaluación (límites de decisión, AUC, ROC y matrices de confusión). |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `MiPrimerPerceptron` / `PerceptronMulticapa.ipynb` | Notebook | Evolución desde el clasificador lineal base hasta el Perceptrón Multicapa (MLP) usando Scikit-Learn. |
| `Intro Redes Neuronales Convolucionales.ipynb` | Notebook | Migración de Fully Connected a CNNs (Filtros, Batch Normalization, Pooling...). |
| `libreta1..`, `libreta4..`, `libreta5..ipynb` | Notebook | Ejercicios de creación de redes y programación orientada a objetos para *Custom Callbacks*. |
| `Analisis_Diabetes_Clasificacion(Binaria).ipynb` | Notebook | Proyecto *end-to-end* implementando Keras. Clasificación pura. |
| `Analisis_Hormigon_Regresion(Valores).ipynb` | Notebook | Proyecto *end-to-end* implementando Keras para un problema de Regresión Lineal. |
| `Intuiciones_End_to_End.ipynb` / `Aplicando..` | Notebook | Reflexiones teórico-prácticas a la hora de estructurar todo el proceso ML. |
| `UD2.pdf` / `Resumen UD2.docx` | Apuntes | Material complementario que sintetiza la teoría de la segunda unidad didáctica. |

## 🔗 Relación con otros temas
Este bloque consolida el conocimiento general necesario de TensorFlow/Keras que se aplica en las siguientes temáticas, como Deep Learning en imágenes, Sistemas secuenciales, NLP y el bloque del Healthcare.
