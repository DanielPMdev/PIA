# Fundamentos de Blockchain

> Asignatura: Programación de Inteligencia Artificial  
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad nos aparta transitoriamente del entrenamiento y las redes neuronales para adentrarnos en un ecosistema del desarrollo seguro y distribuido que interactúa en el terreno del Big Data y ecosistemas descentralizados: la tecnología *Blockchain* (Cadena de Bloques). El enfoque es cien por cien puramente técnico e implementado paso a paso con clases de Python desde cero (orientación a *back-end* e instanciación de red interna).

## 🎯 Objetivos de Aprendizaje
- Comprender programáticamente (mediante el enfoque de la Programación Orientada a Objetos) la estructura técnica en crudo, en Python, de una transacción y su firma criptográfica validada.
- Simular criptografía real aplicando modelos asimétricos modernos y uso matemático del sistema RSA (clave pública y privada).
- Implementar algorítmicamente desde cero mecanismos de control de trabajo (*Proof of Work*, 'POW'), control de la dificultad del minado y el cómputo válido del Nonce dinámico.
- Interconectar la red, visualizar balances de carteras y simular (verificando y previniendo) las clásicas bifurcaciones en redes, determinando y operando sobre la "cadena de nodo más larga". 

## 🧠 Contenidos

### Fundamentos Cripto y Transaccionales (Básico)
- **Trazabilidad y Bloque Génesis**: Programación pura para calcular mediante `hashlib`/`sha256` las concatenaciones, firmas asimétricas del timestamp, cantidad o validaciones `rsa` del nodo emisor y nodo receptor del balance de simulación digital.
- **Clases en Python**: Definición de objetos `Transaction`, bloque `Block` conteniendo un lote de transacciones pendientes y objeto superior logístico `Node Blockchain`. 

### Proof of Work y Cadena de Reglas en Red Descentralizada (Avanzado)
- **Minado**: Requerimiento algorítmico, o rompecabezas hash, mediante las directrices de encontrar el valor ceros o prefijo específico ("0000").
- Control lógico del estado y simulación de la recompensa por incluir legalmente con el valor Nonce. 
- Prevenciones topológicas como el doble gasto y consultas o lecturas puras transaccionales hacia la cadena iterativamente concatenada subyacente. 

## 🛠️ Tecnologías y Librerías
| Herramienta | Uso en este tema |
|---|---|
| Python (POO Avanzada / Funcional) | Todo ecosistema central, manejo riguroso temporal (`time`), colecciones `dataclass` o JSON e interpretación abstracta orientada a bloques de minería. |
| Hashlib | Ejecución matemática real estricta para validación local a través del estándar Secure Hash Algorithm (`SHA256`). |
| RSA | Librería integradora de encriptación moderna para testeo y firma validada de *Public/Private Key pair*. |

## 📁 Archivos
| Archivo | Tipo | Descripción |
|---|---|---|
| `Laboratorio 1 Introduccion Blockchain.ipynb` | Notebook | Toma de contacto lógica sobre los nodos, bloques y el marco del formato transaccional en un ámbito *Single-Node*. |
| `Laboratorio 2 Mini Blockchain.ipynb` | Notebook | Simulador interactivo/interconectado, completo de inicio a fin sobre el *Proof of Work* y revalidación de firmas RSA en cadenas entrelazadas inmutables. |

## 🔗 Relación con otros temas
Este bloque de fundamentos matemáticos/descentralizados resulta transversal e independiente respecto a los bloques puramente de IA de aprendizaje automático supervisado o Visión de Keras tratados en la UD2, 3, 4 y 6. Sirve de antesala conceptual hacia despliegues inmutables o Web3 en ámbitos de la Big Data arquitectónica.
