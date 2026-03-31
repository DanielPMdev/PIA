# IA en el Sector Salud: Segmentación de Tumores (Healthcare)

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad temática aplica las técnicas de *Deep Learning* más avanzadas al campo de la medicina y la investigación (Healthcare AI). A través de modelos *ResUNet*, los alumnos aprenden no solo a clasificar si una imagen de resonancia magnética contiene un tumor (Clasificación Clásica), sino a localizarlo espacialmente generando una máscara de segmentación precisa sobre la región afectada.

## 🎯 Objetivos de Aprendizaje
- Comprender e interpretar la topología geométrica de los modelos *UNet* y cómo sus "puentes" (*skip connections* simétricas) permiten la reconstrucción anatómica densa con una mínima pérdida de precisión.
- Aplicar heurísticas y funciones de pérdida avanzadas propias del ámbito médico (`Tversky Loss`, `Focal Tversky`) debido al crítico desbalanceo de las imágenes médicas corporales o de fondo.
- Diferenciar el proceso de **Clasificación** (existe tumor: S/N) del proceso superior de **Segmentación Semántica** (dónde está ubicado con precisión píxel a píxel).
- Implementar tuberías (*pipelines*) complejas de procesamiento e ingesta de resonancias, utilizando un generador de imágenes de datos masivos a través de utilidades como `ImageDataGenerator`, `Opencv` o librerías homólogas (*glob* & *skimage.io*).

## 🧠 Contenidos

### Introducción e inmersión médica al Deep Transfer Learning
- Aplicación de las librerías base (Visualización de resonancias `cv2` y visualización matricial densa).
- Uso teórico y aplicado del Aprendizaje por Transferencia (*Transfer Learning*), empleando `ResNet50` pre-entrenada para identificar tejido anómalo vs. sano. Evaluando qué aporta reutilizar modelos con gran cantidad de conocimiento almacenado respecto a una tarea puramente clínica.
- Módulos paralelos para reportar o notificar las curvas de desempeño durante las épocas.

### Arquitectura de Segmentación (ResUNet)
- **Topología**: Análisis lógico de una red segmentante: Codificador (*Encoder* para la comprensión visual/anomalía), Cuello de Botella (*Bottleneck* - condensación matricial densa) y Decodificador (*Decoder* - para generar la resolución topográfica en alta definición en base al cuello de botella).
- **Métricas Personalizadas**: En casos donde el "fondo" negro clínico prevalece sobre un diminuto tumor, utilizar *Accuracy* es inútil. Sustitución teórica e implementación técnica de métricas relativas basadas en pesos para reducir el umbral de Falsos Positivos (*Tversky/Dice Coefficient*).

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| Keras TensorFlow (*Custom Layers & Optimizers*) | Definiciones complejas (Bloques concatenados mediante la capa `Concatenate`, `UpSampling2D`). |
| Utilities Python Customizadas | Importación de métricas o utilidades médicas como `tversky_loss`. |
| OpenCV & Glob & ZipFile | Descompresión al vuelo de bancos de resonancias magnéticas comprimidas (archivos Zip). Estructurado, etiquetado lógico espacial, y normalización (`StandardScaler/normalize`). |
| Skimage.io | Visualización especializada rápida. |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `Práctica_Puntuable_Healthcare_AI.ipynb` | Notebook | Notebook guiado y estructurado por tareas desde el import del dataset médico y entendimiento de la imagen, hasta la creación exhaustiva del optimizador métrico. |
| `HealthCare_DanielPorrasMorales.ipynb` | Notebook | Versión o implementación evaluable desarrollada con la resolución técnica de clasificación y la segmentación tumoral (*ResUNet*). |

## 🔗 Relación con otros temas
Este sumun visual y de programación de Inteligencia artificial engloba estructuralmente los conocimientos pormenorizados en UD4 (Redes Residuales Resnet50) de la API funcional de TensorFlow, extrapolados al bloque médico más relevante de la analítica compleja.
