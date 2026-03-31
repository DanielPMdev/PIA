# Procesamiento de Lenguaje Natural (NLP)

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad se centra en el campo heurístico del Procesamiento de Lenguaje Natural (NLP), que dota a las inteligencias artificiales de la capacidad de entender, procesar y predecir el lenguaje humano. Cubrimos desde la vectorización estática (Tokenizador y bolsa de palabras) hasta los *Embeddings* contextuales bidimensionales o tridimensionales manejados mediante Redes Neuronales Recurrentes modernas. 

## 🎯 Objetivos de Aprendizaje
- Comprender el flujo natural de conversión de cadenas de texto humano a tensores aptos para redes neuronales (*Tokenization*, *Padding*, y vocabularios Out-of-Vocabulary 'OOV').
- Evaluar métricas semánticas y utilizar modelos pre-entrenados masivos usando herramientas de la industria como `Gensim`/`Word2Vec` o repositorios de *HuggingFace*.
- Emplear librerías matemáticas como PCA/T-SNE para ilustrar visualmente, de forma plana o euclidiana, los "grados perceptibles de parentesco y sesgo semántico" entre nubes de palabras/tokens.
- Experimentar y diseñar Redes Neuronales Recurrentes (`SimpleRNN`, `GRU`, `LSTM`) frente a textos o críticas (*reviews*), evaluando cómo varían radicalmente la retentiva del contexto a largo plazo frente a la desactualización o estancamiento del peso numérico.

## 🧠 Contenidos

### Embeddings y Representación Semántica
- Análisis de vectores (*Word2Vec*), entendimiento del peso y uso de métodos propios de utilidades de modelado de temas (`Gensim.downloader`). Distancias aritméticas del Coseno, analogías (Rey-Hombre+Mujer=Reina) y análisis explícito o social de los vectores numéricos respecto a sus sesgos cognitivos.
- Módulos gráficos *Principal Component Analysis (PCA)* o T-SNE para la demostración dimensional vectorizada del grupo de variables. 

### Keras/TensorFlow para NLP
- Uso intensivo y recursivo de la capa abstracta `Embedding`, acompañada del módulo lógico `Tokenizer` y homogeneización tabular usando el util  `pad_sequences`. Comparativa de eficacia (rendimiento iterativo - epochs vs overfitting) de una *RNN*, frente al módulo de purgado *GRU* o la retentiva permanente de la memoria en la topología de compuertas *LSTM*. 

### Modelos Completos y Transformers
- Retos reales (Kaggle Amazon Reviews) aplicando *Stopwords* NLTK, clasificaciones literarias (Galdós vs Pardo Bazán) o modelos de sátiras contextuales (Sarcasmo / Reuters / IMDB Dataset).
- Utilización directa introductoria de *Transformers* asfálticos (Clasificadores y pipelines) llamando a repositorios robustos modernos de la suite y arquitectura *HuggingFace*. 

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| NLTK | Retención o descarte estático de las palabras léxicamente vacías (*stopwords*). |
| Gensim (Word2Vec) | Importación y uso heurístico de modelos de incrustamiento de palabras vectorizadas clásicos e investigación semántica. |
| TensorFlow (NLP Tools) | Capas recurrentes (`RNN`,`GRU`, `LSTM`) empaquetadas o embebidas para arquitecturas multiclase. Transformadores matriciales como Tokenizadores o Padding. |
| HuggingFace Transformers | Capas introductorias directas de AutoModel, métricas modernas `evaluate` y librerías de `datasets`. |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `practica_nlp3.ipynb` / `practica_nlp4.ipynb` | Notebook | Base teórica y guía paso-a-paso de la limpieza morfológica, tokenización densa ("OOV", diccionarios) y encodings. |
| `AmazonReseñas..ipynb` | Notebook | Soluciones de NLP orientadas a e-commerce (polaridad y sentimiento de la compra). |
| `Chelo_de_NLP_Clase_1_ok.ipynb` / `BenitoEmilia..ipynb` | Notebook | Identificación autoral clásica mediante arquitecturas profundas LSTM usando conjuntos de datos históricos o dataset externos (Google Colab Files, url requests). |
| `practica_nlp_word2vec.ipynb` y `word2vec.ipynb` | Notebook | Investigación técnica/gráfica de la distancia semántica coseno y la aplicación teórica de Gensim (Divergencias verbales/nominales). |
| `comparacionRNNGRULSTM.ipynb` | Notebook | Módulo comparativo arquitectural para afianzar el entendimiento del flujo u olvido del estado cíclico (*state*). |
| `sequence_classification.ipynb` | Notebook | Inferencia directa y evaluación de conjuntos literarios (IMDB) desde modelos precompilados de plataforma HuggingFace. |

## 🔗 Relación con otros temas
NLP requiere obligatoriamente del dominio y entendimiento vectorizado de la API Secuencial (UD2), con cierta abstracción de las secuencias LSTM/Temporal introducidas ligeramente en UD5 (*Series temporales*).
