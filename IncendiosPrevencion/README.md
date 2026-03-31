# Prevención y Predicción de Incendios Forestales

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad monográfica expone un caso de uso práctico crítico y directo enfocado a la protección civil y el medio ambiente: la detección del nivel de alerta y predicción de propagación de incendios forestales usando atributos meteorológicos en tiempo real o histórico. En este modelo prevalecen las decisiones analíticas para tratar el fortísimo desbalanceo de las clases ambientales.

## 🎯 Objetivos de Aprendizaje
- Solucionar y dominar el **Desbalanceo Estructural de Clases** ('Imbalanced Dataset'), ya que los eventos anómalos (incendio=1) son ínfimos matemáticamente comparados con cientos de registros comunes regulares (no incendio=0). 
- Comparar pragmáticamente las técnicas de equilibrado y sobremuestreo (`SMOTE`) aplicadas y su efectividad analítica frente a la estrategia imperativa de penalización integrada con `Class Weight`. 
- Diferenciar cuándo debe emplearse *HistGradientBoostingClassifier* sobre otros clasificadores en árboles de decisión estándar como el Random Forest, y extraer sus pesos, reglas de influencia jerárquica o 'Permutation Importance'. 
- Identificar y evaluar por qué las métricas *Recall* (Exhaustividad) o curva Precisión-Recall, son el pilar o fin decisorio primordial en sistemas críticos médicos/ambientales ante los clásicos análisis de exactitud de otro tipo (Ej: 'si un 2% estadístico son alertas rojas no puedes simplemente decir que ignorarlas supone un 98% de Exactitud predictiva').

## 🧠 Contenidos

### Diseño Base en Escenarios de Crisis (Features)
- Análisis de variables exógenas influyentes (Precipitaciones, Temperatura Superficial, Humedad vs Riesgo Cuantitativo).
- Generación y Codificación matemática de la Alerta\_Incendio.

###  Algorítmica y Equilibrio (Imbalanced Learning) 
- Partición *Estratificada*: Técnicas fundamentales para garantizar y salvaguardar mediante `train_test_split(stratify=y)` proporciones minúsculas en el banco de ensayo. 
- *SMOTE* (Synthetic Minority Over-sampling Technique): Aproximaciones y métodos generativos.
- Integración *Class Weight*: Ponderando la rareza matemática en el propio algoritmo de estimación.
- *HistGradientBoostingClassifier*: Ventajas numéricas vs el Bosque Aleatorio Clásico en grandes repositorios y matrices densas de entrenamiento. 

### Puesta en Producción 
- Exportación e ingesta en flujos reales (Guardado logístico iterativo `.pkl` vía `Joblib`). 

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| Scikit-learn (Imblearn/SMOTE) | Relevancia directa para la síntesis de casos y muestreo estadístico compensatorio. Estabilización de matrices. |
| Scikit-learn (Ensemble Methods) | Evaluación técnica del `HistGradientBoostingClassifier` sobre estimadores clásicos. `Class_Weight` integral. |
| Joblib | Volcado, persistencia o compresión empaquetada binaria y exportación para puestas en producción. |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `PredecirIncendios.ipynb` | Notebook | Notebook *End-to-End* unificado dividiendo rigurosamente los bloques (Ingesta, Desbalanceo y Métricas Ambientales de Rescate - Recall). |

## 🔗 Relación con otros temas
Este modelo refuerza directamente conceptos evaluatorios de falsos negativos / falsos positivos tocados en Healthcare (segmentaciones médicas CT, unidades UD6) a la vez que profundiza en alternativas algorítmicas sin usar las APIs de Tensorflow habituales manejadas globalmente. 
