# 📖 Explicación del Código — Práctica NLP Word2Vec

Este documento explica cada bloque de código del notebook `practica_nlp_word2vec.ipynb` para facilitar su comprensión.

---

## 1. Preparación del Entorno

### Instalación de librerías

```python
!pip install gensim
```


---

### Importaciones

```python
import gensim
import gensim.downloader as api
import numpy as np
import matplotlib.pyplot as plt
from sklearn.manifold import TSNE
from sklearn.decomposition import PCA
```

- `gensim.downloader as api` → módulo para **descargar modelos pre-entrenados** directamente desde internet sin tener que buscarlos manualmente.

- `TSNE` y `PCA` → algoritmos de reducción de dimensionalidad (se usan en la sección 5).

---

### Descarga del modelo pre-entrenado

```python
modelo = api.load('word2vec-google-news-300')
```

Descarga y carga en memoria un modelo Word2Vec entrenado por Google sobre **3 millones de palabras** del corpus de Google News.

- **`word2vec`**: técnica que convierte palabras en vectores numéricos.
- **`google-news`**: corpus (conjunto de texto) usado para el entrenamiento.
- **`300`**: cada palabra se representa como un vector de **300 números** (dimensiones).

Una vez descargado, `modelo` actúa como un diccionario: `modelo['king']` devuelve el vector de la palabra *king*.

---

## 2. Toma de Contacto con Gensim

### Obtener el vector de una palabra

```python
vector_king = modelo['king']
print(vector_king.shape)   # → (300,)
print(vector_king[:10])    # Primeras 10 dimensiones
```

- `modelo['king']` devuelve un **array NumPy de 300 números** (floats). Cada número representa una característica semántica aprendida del texto.
- `.shape` muestra las dimensiones del array: `(300,)` significa 300 valores en una sola dimensión.

> 💡 Estos 300 números no tienen un significado humano directo. Lo importante es que palabras con significado similar tienen vectores "cercanos" entre sí en ese espacio de 300 dimensiones.

---

### Verificar si una palabra está en el vocabulario

```python
en_vocab = palabra in modelo.key_to_index
```

- `modelo.key_to_index` es un **diccionario** que mapea cada palabra del vocabulario a su índice interno.
- El operador `in` comprueba si la palabra existe como clave en ese diccionario.
- Si la palabra no existe al hacer `modelo['xyz']`, lanzará un `KeyError`.

---

### Similitud entre dos palabras

```python
similitud = modelo.similarity('king', 'queen')
```

Calcula la **similitud coseno** entre los vectores de dos palabras. El resultado está entre:

- **1.0** → vectores idénticos (misma dirección)
- **0.0** → vectores perpendiculares (sin relación)
- **-1.0** → vectores opuestos

---

## 3. Análisis Exploratorio

### Matriz de similitud con heatmap

```python
n = len(palabras_analisis)
matriz_similitud = np.zeros((n, n))

for i, p1 in enumerate(palabras_analisis):
    for j, p2 in enumerate(palabras_analisis):
        if p1 in modelo.key_to_index and p2 in modelo.key_to_index:
            matriz_similitud[i][j] = modelo.similarity(p1, p2)
```

- `np.zeros((n, n))` crea una **matriz cuadrada rellena de ceros**. Con 6 palabras es una matriz 6×6.
- `enumerate(...)` devuelve pares `(índice, valor)` en cada iteración.
- El doble bucle `for` rellena cada posición `[i][j]` con la similitud entre la palabra `i` y la palabra `j`.
- La diagonal (donde `i == j`) valdrá siempre **1.0** (similitud de una palabra consigo misma).

```python
im = ax.imshow(matriz_similitud, cmap='YlOrRd', vmin=0, vmax=1)
```

- `imshow` dibuja la matriz como un **mapa de calor** (heatmap).
- `cmap='YlOrRd'` establece la paleta de colores (amarillo → naranja → rojo).
- `vmin=0, vmax=1` fija el rango de colores entre 0 y 1.

---

## 4. Tareas Específicas

### 4.1 Analogías

```python
resultado = modelo.most_similar(positive=[b, c], negative=[a], topn=top_n)
```

Esta es la operación clave de las analogías en Word2Vec:

```
"a es a b, como c es a ?"
→ vector(b) - vector(a) + vector(c)
```

- **`positive=[b, c]`**: suma los vectores de `b` y `c`.
- **`negative=[a]`**: resta el vector de `a`.
- `most_similar` busca en todo el vocabulario qué palabras tienen el vector más cercano al resultado.

**Ejemplo concreto:**

```
positive=['France', 'Tokyo']  →  France + Tokyo
negative=['Paris']            →  - Paris
Resultado ≈ Japan  ✓
```

---

### 4.2 Palabras más similares

```python
similares = modelo.most_similar(termino, topn=8)
```

Devuelve una lista de `(palabra, score)` con las **8 palabras más cercanas** en el espacio vectorial. Internamente calcula la similitud coseno entre `termino` y todas las palabras del vocabulario, ordenando de mayor a menor.

```python
intruso = modelo.doesnt_match(['cat', 'dog', 'bird', 'car'])
```

Calcula el **centroide** (media) de los vectores del grupo y devuelve la palabra cuyo vector está más alejado de ese centroide — el intruso.

---

### 4.3 Divergencias

```python
def palabras_menos_similares(palabra, modelo, candidatos, top_n=5):
    similitudes = [(c, modelo.similarity(palabra, c)) for c in candidatos if c in modelo.key_to_index]
    similitudes.sort(key=lambda x: x[1])
    return similitudes[:top_n]
```

Línea a línea:

1. **List comprehension**: crea una lista de tuplas `(candidato, similitud)` para cada candidato que existe en el vocabulario.
2. **`.sort(key=lambda x: x[1])`**: ordena por el segundo elemento de la tupla (la similitud) de **menor a mayor**. La lambda es una función anónima que extrae el valor de comparación.
3. **`return similitudes[:top_n]`**: devuelve las primeras `top_n` — las de **menor similitud** (más divergentes).

---

## 5. Visualización con t-SNE

### Por qué necesitamos reducción de dimensionalidad

Los vectores Word2Vec tienen **300 dimensiones**, imposibles de visualizar directamente. Las técnicas de reducción de dimensionalidad proyectan esos 300 números en **2 dimensiones** intentando preservar las distancias relativas entre palabras.

---

### Conversión a array NumPy (paso crucial)

```python
vectores = np.array([modelo[palabra] for palabra in palabras])
```

> ⚠️ **Importante:** `TSNE.fit_transform()` requiere un **array NumPy**, no una lista Python. Sin `np.array(...)` se produce el error `AttributeError: 'list' object has no attribute 'shape'`.

- La **list comprehension** `[modelo[palabra] for ...]` crea una lista de arrays de 300 dimensiones.
- `np.array(...)` la convierte en una **matriz 2D** de forma `(n_palabras, 300)`.

---

### Aplicar t-SNE

```python
tsne = TSNE(n_components=2, random_state=42, perplexity=5)
vectores_2d = tsne.fit_transform(vectores)
```

| Parámetro | Significado |
|-----------|-------------|
| `n_components=2` | Reducir a 2 dimensiones para graficar |
| `random_state=42` | Semilla aleatoria para resultados reproducibles |
| `perplexity=5` | Nº de vecinos considerados; debe ser **< nº de muestras** |

- `fit_transform()` ajusta el modelo y transforma los datos en un solo paso.
- Devuelve `vectores_2d`: una matriz `(n_palabras, 2)` con las coordenadas 2D de cada palabra.

---

### Diferencia entre t-SNE y PCA

| | t-SNE | PCA |
|--|-------|-----|
| **Tipo** | No lineal | Lineal |
| **Preserva** | Vecinos cercanos (clusters) | Varianza global |
| **Velocidad** | Lento | Rápido |
| **Mejor para** | Ver agrupaciones semánticas | Análisis de varianza |

```python
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)
print(pca.explained_variance_ratio_.sum())  # % de información conservada
```

`explained_variance_ratio_` indica qué porcentaje de la información original conservan las 2 componentes principales.

---

### Gráfica con grupos y colores

```python
for grupo, info in grupos.items():
    idx = [i for i, g in enumerate(etiquetas_grupos) if g == grupo]
    ax.scatter(coords[idx, 0], coords[idx, 1], c=info['color'], ...)
```

- `grupos.items()` itera por cada categoría semántica (Realeza, Tecnología, etc.).
- La list comprehension extrae los **índices** de las palabras que pertenecen a ese grupo.
- `coords[idx, 0]` usa *fancy indexing* de NumPy: selecciona múltiples filas a la vez con una lista de índices.
- Cada grupo se dibuja con su propio color `c=info['color']`.

---

### Flechas de relación vectorial

```python
ax.annotate('', xy=destino, xytext=origen,
            arrowprops=dict(arrowstyle='->', color='gray', lw=1.5))
```

- `ax.annotate()` con texto vacío `''` se usa exclusivamente para **dibujar flechas**.
- `xy` → punta de la flecha (destino).
- `xytext` → cola de la flecha (origen).
- `arrowprops` → diccionario con el estilo visual de la flecha.

---

## Resumen del Flujo Completo

```
Texto (corpus Google News)
        ↓
   Entrenamiento Word2Vec
        ↓
  Vocabulario: 3M palabras
  Cada palabra → vector de 300 números
        ↓
  ┌─────────────────────────────────┐
  │  Operaciones vectoriales        │
  │  • Similitud coseno             │
  │  • Analogías (suma/resta)       │
  │  • Búsqueda de vecinos cercanos │
  └─────────────────────────────────┘
        ↓
  Reducción dimensional (t-SNE / PCA)
        ↓
  Visualización 2D de relaciones semánticas
```
