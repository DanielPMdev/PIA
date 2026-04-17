# Predicción Preventiva de Inundaciones con CNN-LSTM

> Asignatura: Programación de Inteligencia Artificial
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Proyecto de Visión Artificial aplicado a la predicción preventiva de inundaciones fluviales mediante el análisis de secuencias temporales de imágenes de cámaras de ríos. Se entrena un modelo híbrido CNN-LSTM que clasifica el estado del nivel del agua en tres categorías (Normal, Precaución, Desbordamiento) a partir de secuencias de 5 fotogramas consecutivos. El sistema incorpora umbrales preventivos de riesgo que priorizan la seguridad, activando alertas incluso ante probabilidades moderadas de desbordamiento.

## 🎯 Objetivos de Aprendizaje
- Diseñar e implementar una arquitectura híbrida CNN-LSTM para la clasificación de secuencias de imágenes temporales.
- Aplicar técnicas de etiquetado manual supervisado sobre datasets de imágenes reales mediante herramientas propias.
- Abordar el desbalanceo de clases combinando Data Augmentation secuencial y ponderación de clases con factores de riesgo preventivos.
- Evaluar el rendimiento del modelo por categoría (Normal, Precaución, Desborde) e interpretar la salida probabilística para definir umbrales de alerta.
- Comprender el ciclo completo de un proyecto de IA aplicada a la prevención de desastres naturales.

## 🧠 Contenidos

### Arquitectura CNN-LSTM (TimeDistributed)
El modelo utiliza una arquitectura `Sequential` de Keras que combina dos etapas:
1. **Extractor de características visuales (CNN):** Tres bloques convolucionales (`Conv2D` + `MaxPooling2D`) envueltos en capas `TimeDistributed`, que procesan de forma independiente cada una de las 5 imágenes de la secuencia (128×128×3 píxeles).
2. **Análisis temporal (LSTM):** Una capa LSTM con 64 unidades recibe las características aplanadas de los 5 instantes y captura la evolución temporal del nivel del agua. Se aplica `Dropout(0.3)` para prevenir sobreajuste.
3. **Clasificador final:** Dos capas densas (`Dense(32)` + `Dense(3, softmax)`) producen las probabilidades de pertenencia a las tres clases.

El modelo total tiene **6.534.595 parámetros** entrenables y se compila con `adam` y `sparse_categorical_crossentropy`.

### Etiquetado Manual con OpenCV
El script `label_tool.py` implementa una herramienta interactiva de etiquetado visual que muestra cada imagen de las cámaras fluviales y permite al usuario asignar una etiqueta numérica (0=Normal, 1=Precaución, 2=Inundación). Las etiquetas se persisten incrementalmente en un CSV, permitiendo retomar el proceso tras interrupciones.

### Data Augmentation y Ponderación Preventiva
Para compensar el desbalanceo de clases, se aplican dos estrategias combinadas:
- **Augmentation secuencial:** Se generan secuencias sintéticas para las clases minoritarias (Normal y Precaución) mediante flip horizontal (`np.flip`) y variación aleatoria de brillo, respetando la coherencia temporal de la secuencia.
- **Class Weights con Factor de Riesgo:** Se calculan pesos balanceados automáticos (`compute_class_weight`) y se multiplican por factores manuales de riesgo (Normal ×1.0, Precaución ×2.5, Desborde ×3.0), penalizando duramente los falsos negativos en clases peligrosas.

### Umbrales Preventivos de Decisión
En lugar de utilizar directamente la clase con mayor probabilidad (`argmax`), el sistema implementa umbrales preventivos:
- Si la probabilidad de desborde supera el **25%**, se declara **ALERTA ROJA** independientemente de las demás probabilidades.
- Si la suma de precaución y desborde supera el **35%**, se emite un **AVISO** de precaución.
- Solo cuando la probabilidad de normalidad es claramente dominante se declara **Estado Normal**.

### Resultados Obtenidos
El modelo entrenado durante 15 épocas alcanza los siguientes aciertos por clase en el conjunto de test:
| Clase | Aciertos | Total | Precisión |
|---|---|---|---|
| Normal | 32 | 32 | 100.0% |
| Precaución | 19 | 21 | 90.5% |
| Desborde | 51 | 55 | 92.7% |

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| TensorFlow / Keras | Framework de Deep Learning para construir la arquitectura CNN-LSTM (Sequential, TimeDistributed, LSTM, Dense, Dropout) |
| OpenCV (cv2) | Lectura, redimensionado y visualización de imágenes de cámaras fluviales en la herramienta de etiquetado |
| NumPy | Manipulación de arrays multidimensionales, generación de secuencias y Data Augmentation (flip, brillo) |
| Pandas | Gestión del CSV de etiquetas y carga del diccionario de anotaciones |
| Scikit-Learn | División train/test estratificada (`train_test_split`) y cálculo de pesos de clase (`compute_class_weight`) |
| Matplotlib | Visualización de predicciones con matriz de imágenes etiquetadas (real vs. predicho) |
| Google Colab (GPU T4) | Entorno de ejecución en nube con aceleración GPU para el entrenamiento del modelo |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `PredecirInundaciones.ipynb` | Notebook | Pipeline completo: carga de datos, creación de secuencias, arquitectura CNN-LSTM, Data Augmentation, entrenamiento con class weights preventivos, evaluación por clase y visualización de predicciones |
| `label_tool.py` | Script Python | Herramienta interactiva de etiquetado manual de imágenes fluviales usando OpenCV. Permite clasificar cada imagen como Normal (0), Precaución (1) o Inundación (2) |
| `labels.csv` | Dataset | Fichero CSV con 560 registros etiquetados. Columnas: `camera`, `filename`, `label`. Cubre 4 cámaras del dataset River |
| `River/` | Carpeta de datos | Dataset del proyecto DARE (University of Reading). Contiene imágenes de 4 cámaras fluviales (Nov-Dic 2012), datos de observación del nivel del agua y mediciones del campo de visión de las cámaras |

## 🚀 Cómo ejecutar
El notebook está diseñado para ejecutarse en **Google Colab** con GPU habilitada:

1. Subir el dataset `River/` y `labels.csv` a Google Drive.
2. Abrir `PredecirInundaciones.ipynb` en Google Colab.
3. Activar el runtime con GPU (T4).
4. Ejecutar las celdas secuencialmente.

Para utilizar la herramienta de etiquetado en local:
```bash
pip install opencv-python pandas
python label_tool.py
```

## 🔗 Relación con otros temas
Este proyecto combina técnicas de múltiples unidades anteriores:
- **UD4_Emotions (ResNet):** Visión Artificial y clasificación de imágenes con CNNs.
- **UD5_SeriesTemporales (LSTM):** Modelado de secuencias temporales con celdas LSTM.
- **IncendiosPrevencion:** Tratamiento de clases desbalanceadas con SMOTE/Class Weights y enfoque preventivo en la predicción de fenómenos naturales.
