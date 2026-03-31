# Reconocimiento de Emociones (ResNet)

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad explora las Redes Neuronales Convolucionales (CNN) de diseño ultra-profundo aplicadas a la Visión Artificial. El foco principal es la implementación y uso de la arquitectura **ResNet** (Redes Residuales) para solucionar el problema fundamental del desvanecimiento del gradiente (*Vanishing Gradient*) en arquitecturas complejas de detección facial y reconocimiento de emociones.

## 🎯 Objetivos de Aprendizaje
- Comprender de manera profunda y teórica la estructura de un Bloque Residual e implementar atajos o conexiones skip (Skip Connections).
- Implementar modelos complejos y no lineales en visón artificial empleando la `Functional API` de Keras/TensorFlow, alejándonos del modo Secuencial estricto.
- Aplicar *Transfer Learning* partiendo de pesos previamente instanciados de redes masivas como `ResNet50`.
- Procesar masivamente imágenes usando librerías de flujo de datos en lote (`ImageDataGenerator` de Keras, PIL y OpenCV).
- Analizar los métodos necesarios de visualización en Jupyter Notebook trabajando con tensores y arreglos multidimensionales de representaciones de píxeles (`cv2_imshow`).

## 🧠 Contenidos

### Comprendiendo las Redes Neuronales Residuales
- **La barrera de la Profundidad**: Reflexión sobre cómo el añadir capas, en modelos tradicionales, detiene la convergencia de la fase de entrenamiento y el aumento exponencial del error.
- **Implementación Funcional (Custom Block)**: Creación de funciones encapsuladas propias (`res_block`) usando `Add`, dimensionamiento `ZeroPadding2D`, operaciones convolucionales `BatchNormalization` y activación no-lineal ReLU.

### Flujo Analítico de Computer Vision y *Transfer Learning*
- Manejo inicial del repositorio y preprocesamiento de imágenes (`flow_from_directory`).
- Importación directa de la clase `ResNet50` y fijación de los pesos genéricos (congelamiento de las representaciones generalistas de entrada), y el calibrado de la fase final o de las últimas capas para especializarlas en la tarea de agrupamiento deseado. 
- Discusión sobre *Overfitting* vs *Underfitting* en casos críticos o sesgados. Evaluación a alta escala utilizando el resumen o reporte de clasificación y validación manual (matrices de predicción sobre rostros).

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| Keras TensorFlow (Functional API) | Diseño no secuencial (ramificado), creación programada de bloques visualizados y uso de `ResNet50`. |
| OpenCV (cv2) & PIL | Tratamiento de las representaciones en formato RGB, dimensionado y display sobre la celda gráfica de Colab. |
| ImageDataGenerator | Recorte automático de imágenes y estructuración masiva de memoria y de *batches*. |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `Emotion_IA_Daniel_Curso_25_26.ipynb` | Notebook | Práctica guiada estructurada en fases (teoría, implementación del bloque, arquitectura completa de visón). |
| `model2.ipynb` | Notebook | Práctica paralela de la red pre-entrenada evaluando matrices de clasificación visual reales (Transfer Learning con `ResNet50`). |

## 🔗 Relación con otros temas
Este bloque, como hito avanzado de Visión Compleja, requiere el dominio absoluto de tensores y configuraciones multiclase, sentando el precedente directo del procesamiento denso empleado después en el reto `UD6_Segmentacion` (Healthcare).
