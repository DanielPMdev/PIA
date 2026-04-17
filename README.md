# Programación de Inteligencia Artificial

> 📚 Curso de Especialización en Inteligencia Artificial y Big Data  
> 🏫 IES Abastos (Valencia)

## 📖 Sobre esta asignatura

Este repositorio compila los materiales, prácticas completas y desarrollos técnicos de la asignatura **Programación de Inteligencia Artificial** (PIA). El propósito general es proporcionar una inmersión "End-to-End" en el diseño, entrenamiento y puesta en producción de algoritmos analíticos estadísticos y modelos de Inteligencia Artificial profundos. Está enfocado hacia un perfil de _Data Scientist_ o _Machine Learning Engineer_, comenzando por los fundamentos de Python y Pandas, escalando a redes complejas de Visión Artificial (_Computer Vision_) y Procesamiento de Lenguaje Natural (NLP), y culminando en arquitecturas descentralizadas o _cloud_.

## 🗂️ Estructura del repositorio

```text
📦 Programación de Inteligencia Artificial
 ┣ 📂 AWSBedrock
 ┃ ┗ 📋 README.md
 ┣ 📂 IncendiosPrevencion
 ┃ ┣ 📓 PredecirIncendios.ipynb
 ┃ ┗ 📋 README.md
 ┣ 📂 Inundaciones_Daniel
 ┃ ┣ 📂 River
 ┃ ┣ 📓 PredecirInundaciones.ipynb
 ┃ ┣ 🐍 label_tool.py
 ┃ ┣ 📊 labels.csv
 ┃ ┗ 📋 README.md
 ┣ 📂 Reto2_NivelIntermedio
 ┃ ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 styles
 ┃ ┗ 📋 README.md
 ┣ 📂 UD1_IntroducionPython
 ┃ ┣ 📂 1_PruebaEvaluable
 ┃ ┣ 📂 UD1_Ejercicios
 ┃ ┣ 📂 UD1_Retos
 ┃ ┗ 📋 README.md
 ┣ 📂 UD2_RNA
 ┃ ┣ 📂 Teoria
 ┃ ┣ 📂 Examen
 ┃ ┗ 📋 README.md
 ┣ 📂 UD3_DeepLearning
 ┃ ┣ 📓 Analisis_Diabetes.ipynb
 ┃ ┣ 📓 regresionBoston.ipynb
 ┃ ┗ 📋 README.md
 ┣ 📂 UD4_Emotions
 ┃ ┣ 📓 Emotion_IA_Daniel_Curso_25_26.ipynb
 ┃ ┗ 📋 README.md
 ┣ 📂 UD5_SeriesTemporales
 ┃ ┣ 📓 Series_temporales_lstm.ipynb
 ┃ ┗ 📋 README.md
 ┣ 📂 UD6_Segmentacion
 ┃ ┣ 📓 HealthCare_DanielPorrasMorales.ipynb
 ┃ ┗ 📋 README.md
 ┣ 📂 UD7_NLP
 ┃ ┣ 📂 Practica_NPL
 ┃ ┣ 📂 RepasoTokenizer
 ┃ ┗ 📋 README.md
 ┣ 📂 UD8_Blockchain
 ┃ ┣ 📓 Laboratorio 1 Introduccion Blockchain.ipynb
 ┃ ┗ 📋 README.md
 ┣ 📂 UD9_VibeCoding
 ┃ ┣ 📂 weather-portal
 ┃ ┗ 📋 README.md
 ┗ 📋 README.md
```

_(Nota: Solo se muestran los archivos principales, carpetas y READMEs a modo de resumen general del índice)._

## 📚 Bloques Temáticos

### 1. Introducción a Python y Librerías Base

📂 [`UD1_IntroducionPython/`](./UD1_IntroducionPython/)
Bloque fundacional sobre Programación Orientada a Objetos, análisis masivo, estructuración de datasets tabulares y visualización base de correlaciones.
**Conceptos clave:** `POO/Herencia` · `DataFrames` · `Broadcasting`
**Tecnologías:** `Pandas` · `NumPy` · `Matplotlib`

### 2. Redes Neuronales Artificiales (RNA)

📂 [`UD2_RNA/`](./UD2_RNA/)
Inmersión profunda al Multilayer Perceptron, Redes Convolucionales iniciales, arquitectura API estática y métricas base en TensorFlow de clasificación/regresión.
**Conceptos clave:** `Perceptrón` · `Callbacks` · `Early-Stopping`
**Tecnologías:** `Scikit-Learn` · `Keras Sequential`

### 3. Prácticas de Deep Learning

📂 [`UD3_DeepLearning/`](./UD3_DeepLearning/)
Casos guiados aplicados a escala real, desde variables biomédicas del estado de la diabetes al cálculo matemático para tasar la calidad de un activo con capas densas funcionales.
**Conceptos clave:** `Feature Engineering` · `Optimizador Adam` · `Loss Functions`
**Tecnologías:** `TensorFlow` · `Scikit-Learn (Scalers)`

### 4. Reconocimiento de Emociones (ResNet)

📂 [`UD4_Emotions/`](./UD4_Emotions/)
Visión Artificial avanzada para solventar el atascamiento del gradiente al añadir cientos de capas convolucionales al usar bloques residuales dinámicos.
**Conceptos clave:** `Skip Connections` · `Transfer Learning` · `ImageDataGenerator`
**Tecnologías:** `OpenCV` · `ResNet50` · `Keras (Functional API)`

### 5. Modelado de Series Temporales (LSTMs)

📂 [`UD5_SeriesTemporales/`](./UD5_SeriesTemporales/)
Manejo lógico de características meteorológicas o continuas de forma secuencial cíclica sin obviar el estado del tensor para secuencias interanuales de largo plazo.
**Conceptos clave:** `LSTM Cell` · `Ventana de Predicción` · `Estacionalidad (Sin/Cos)`
**Tecnologías:** `TensorFlow.keras.layers (LSTM)` · `Matplotlib Animado`

### 6. IA en el Sector Salud: Segmentación de Tumores (Healthcare)

📂 [`UD6_Segmentacion/`](./UD6_Segmentacion/)
Máximo estamento de la Visión Artificial para demarcar topológicamente en base a U-Nets (Encoders densos) el píxel o zona diferencial clínica.
**Conceptos clave:** `ResUNet` · `Tversky Loss` · `Segmentación y Máscara`
**Tecnologías:** `Keras Layers (Concatenate/UpSampling)` · `Glob`

### 7. Procesamiento de Lenguaje Natural (NLP)

📂 [`UD7_NLP/`](./UD7_NLP/)
Interpretación matemática vectorial de las palabras o documentos en textos complejos, integrando métricas espaciales para la clasificación o análisis del tono emotivo (ej. Amazon).
**Conceptos clave:** `Tokenization/Padding` · `Word2Vec` · `Embeddings`
**Tecnologías:** `NLTK` · `Gensim` · `HuggingFace (Transformers)`

### 8. Fundamentos de Blockchain

📂 [`UD8_Blockchain/`](./UD8_Blockchain/)
Transición orientada al backend matemático de ecosistemas logísticos paralelos para dominar la inmutabilidad o la prueba del consenso de trabajo (minado SHA/RSA).
**Conceptos clave:** `Proof-of-Work` · `Criptografía RSA` · `Hashing`
**Tecnologías:** `Python (Time, Hashlib)` · `RSA Object`

### 9. Prevención y Predicción de Incendios Forestales

📂 [`IncendiosPrevencion/`](./IncendiosPrevencion/)
Modelado de predicciones críticas ante el desbalanceo agudo de la clase (casi siempre el evento de incendio es nulo o altamente infrecuente/sesgado).
**Conceptos clave:** `SMOTE` · `Class Weight` · `Recall Metric`
**Tecnologías:** `Ensemble Trees` · `Imblearn` · `Joblib`

### 10. Taller Monográfico AWS Bedrock

📂 [`AWSBedrock/`](./AWSBedrock/)
Evaluación arquitectural corporativa en nube. Abstrae la infraestructura hacia el pago flexible a demanda usando redes base robustas y multimodales centralizadas.
**Conceptos clave:** `Model-as-a-Service (MaaS)` · `Foundation Models (FM)` · `Token Costs`
**Tecnologías:** `AWS Bedrock`

### 11. Prototipo Buscador Tipo TikTok (MERN / React)

📂 [`Reto2_NivelIntermedio/`](./Reto2_NivelIntermedio/)
Entorno cruzado de Front-End reactivo para el testeo o implementación asíncrona ágil en un simulador visual sobre la base de Vite de UX fluido dinámico.
**Conceptos clave:** `State/Hooks` · `UX/UI Interactivo` · `Node Modules`
**Tecnologías:** `React TypeScript (Vite)` · `CSS Custom` · `Diagrama Make`

### 12. Predicción Preventiva de Inundaciones con CNN-LSTM

📂 [`Inundaciones_Daniel/`](./Inundaciones_Daniel/)
Proyecto de Visión Artificial que clasifica secuencias temporales de imágenes de cámaras de ríos mediante una arquitectura híbrida CNN-LSTM, abordando umbrales preventivos y desbalanceos.
**Conceptos clave:** `CNN-LSTM` · `Data Augmentation` · `TimeDistributed`  
**Tecnologías:** `TensorFlow / Keras` · `OpenCV` · `Scikit-Learn`

### 13. Vibe Coding: Desarrollo Asistido por Agentes IA
📂 [`UD9_VibeCoding/`](./UD9_VibeCoding/)

Introducción al paradigma de "Vibe Coding". Orquestación y estructuración de Agentes IA mediante instrucciones globales, *skills* y *prompts* para la generación autónoma de un proyecto Full-Stack.

**Conceptos clave:** `Vibe Coding` · `Agents` · `Prompts & Skills`  
**Tecnologías:** `GitHub Copilot` · `Markdown (Contexto IA)` · `Cursor/IDE`

---

## 🧰 Stack Tecnológico General

| Tecnología               | Rol                                                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Python**               | Lenguaje principal del ecosistema IA y de la ingesta estadística.                                                                      |
| **Jupyter Notebook**     | Entorno de experimentación, gráficas, markdown y depuración al vuelo del modelo.                                                       |
| **TensorFlow / Keras**   | Framework y API neural nuclear para diseñar en la unidad Sequential/Functional un Deep Learning complejo (CNNs, LSTMs, U-Net).         |
| **Scikit-Learn**         | Soporte analítico para algoritmos base, desbalanceados (SMOTE), ensembales de regresores y escaladores (StandardScaler).               |
| **Pandas / NumPy**       | Librerías indispensables del tratamiento masivo cruzado, limpieza Nul y array del tensor matemático numérico del proyecto.             |
| **Matplotlib / OpenCV**  | Visualizaciones dinámicas de pérdida, exactitud, mapas métricos del tumor, recortes bi-dimensionales (cv2) y display.                  |
| **Gensim / HuggingFace** | Suite avanzada referenciada especializada únicamente en utilidades para distancias vectoriales NLP (Word2Vec) o modelos fundacionales. |
| **GitHub Copilot / Agentes IA** | Asistentes LLM de inferencia integrados para el dictado y orquestación arquitectónica bajo el paradigma de Vibe Coding. |
| **Markdown (Contexto IA)** | Lenguaje semántico estructurado utilizado para el paso de instrucciones, *prompts* definidos y capacidades / *skills*. |

### Orden de estudio recomendado

Basado en la progresión lógica e incremental del conocimiento arquitectónico para este itinerario (_Machine Learning_ y _Deep Learning_):

1. `UD1_IntroducionPython` _(Pre-requisito)._
2. `UD2_RNA` _(Fundamentos Keras y Backpropagation)._
3. `UD3_DeepLearning` _(Consolidación de APIs con Casos End-To-End)._
4. `IncendiosPrevencion` _(Intermedio alternativo: Reto de Desbalanceos y Clasificación Avanzada)._
5. `UD4_Emotions` _(Visión Artificial Intermedia: Transfer Learning y Bloques)._
6. `UD6_Segmentacion` _(Visión Artificial Avanzada: Capas cruzadas anatómicas)._
7. `UD5_SeriesTemporales` _(Secuencias de Memoria a Corto y Largo Plazo RNN)._
8. `Inundaciones_Daniel` _(Visión Temporal: CNN-LSTM sobre secuencias reales - Práctica Avanzada)._
9. `UD7_NLP` _(Aplicando vectores u olvidos RNNs sobre textos en el entorno semántico)._
10. `AWSBedrock` _(Alternativa Teórica MLOps)_.
11. `UD8_Blockchain` _(Módulo complementario y puramente arquitectural)._
12. `Reto2_NivelIntermedio` _(Extra Front-end)_.
13. `UD9_VibeCoding` _(Orquestación de Agentes e IA para Full-Stack automáticos)_.

## 📝 Notas

- Los materiales de esta asignatura son de carácter estrictamente educativo.
- Los notebooks incluyen tanto plantillas guiadas en blanco como ejercicios finales resueltos con flujos métricos cruzados de evaluación práctica real.
