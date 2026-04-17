# Vibe Coding: Ingeniería de Agentes y Orquestación de IA

> Asignatura: Programación de Inteligencia Artificial
> Curso de Especialización en Inteligencia Artificial y Big Data

## 📌 Descripción
Esta unidad supone un cambio de paradigma total: dejamos atrás la programación algorítmica manual para adentrarnos en el **Vibe Coding**. El centro de este bloque no es el software o código final que se obtenga, sino **cómo** se instruye a una Inteligencia Artificial para que lo genere de forma determinista y segura. Aprenderemos a programar a la propia IA mediante la inyección estructurada de contexto, reglas de comportamiento, roles y restricciones. El alumno evoluciona de "programador" a orquestador y director de agentes sintéticos (LLMs).

## 🎯 Objetivos de Aprendizaje
- Dominar el paradigma **Vibe Coding**, transicionando de la escritura manual de líneas de código a la dirección declarativa de asistentes de programación IA.
- Configurar y enforzar *System Prompts* globales (`copilot-instructions.md`) que restrinjan fallos, limiten las alucinaciones y fijen arquitecturas estrictas.
- Diseñar **Perfiles de Agentes** (`agents/*.agent.md`) definiendo explícitamente sus heurísticas, herramientas de IDE permitidas y modos de razonamiento paso a paso.
- Modularizar conocimiento en fragmentos denominados **Skills** (`skills/`), que actúen como "memorias portables" para contextualizar las capacidades del modelo.
- Estandarizar las peticiones mediante **Prompts parametrizados** (`prompts/`) para lograr entregables de IA puramente predecibles y unificados.

## 🧠 Contenidos: La Anatomía del Vibe Coding

El bloque pivota íntegramente sobre la estructuración semántica de la carpeta de contexto `.github/`, actuando como el "cerebro operativo" de nuestro agente IA.

### 1. El Contrato Maestro: `copilot-instructions.md`
El documento fundacional que la IA está obligada a consultar e interiorizar en cada iteración. En lugar de codificar funciones, codificamos defensas y restricciones:
- Prohibición absoluta de ciertos algoritmos, métodos deprecados o malas prácticas arquitectónicas.
- Forzado de estructuras de control y manejo unificado de errores.
- Reglas de estilo impuestas y blindajes de seguridad.

### 2. Definición de Agentes Supervisores: `/agents`
Se trabaja la creación de entidades supervisoras y arquitectas (por ejemplo `weather-agent.agent.md`). En lugar de un chat genérico, creamos un ente guiado por un sistema de pensamiento crítico:
- Definición de herramientas que puede accionar de forma autónoma (lectura del *workspace*, ejecución de terminal, aplicación de *Grep/Find*).
- Restricción del flujo de decisiones: la IA debe presentar un mini-plan al usuario en tareas disruptivas, y proceder solo bajo aprobación.

### 3. Inyección de Capacidades e Inteligencia: `/skills`
En el paradigma Vibe Coding dictamos el conocimiento en cápsulas Markdown abstractas (Skills). En vez de lidiar en la ventana de chat con largas explicaciones, delegamos en manuales de "saber hacer":
- Reglas lógicas de negocio, fórmulas matemáticas o umbrales determinísticos.
- Arquitecturas esperadas de ciertos módulos.
La IA "chupa" esta información de los *skills* antes de tomar decisiones corporativas.

### 4. Prompts Parametrizados: `/prompts`
Sistematización de la cadena de montaje de código. A través de delimitadores y variables (como `${input:nombreComponente}`), se restringe a la IA para que cese de ser "creativa" y pase a ser una factoría que sigue estrictamente un proceso estructurado (p.ej. obligar a que todo componente traiga su test unitario *mocked* asociado sin excepción).

## 💻 El Software como un Lienzo Menor
Cualquier resultado funcional autogenerado (en este caso alojado visualmente bajo la excusa de un portal de meteorología en Node y React) es puramente circunstancial y pasivo. El éxito de la unidad no se mide porque la aplicación meteorológica sea funcional o atractiva, sino por **la precisión con la que el Agente de IA fue capaz de orquestarla e implementarla matemáticamente por su cuenta**, bajo los grilletes y guías puestas en la configuración del `.github/`.

## 🛠️ Tecnologías y Paradigmas Protagonistas
| Concepto / Herramienta | Rol en la unidad |
|---|---|
| **Vibe Coding** | Metodología matriz abstracta donde la labor del humano es guiar (escribir el *prompting* o contexto subyacente) a la entidad LLM encargada de operar. |
| **Markdown (Contexto Semántico)** | Leguaje vehicular imprescindible para fijar jerarquías lógicas, árboles de decisión e impartir doctrina a las IAs generativas. |
| **Agentes IA / Cursor / Copilot** | Los ejecutores mecánicos y cognitivos que absorben, procesan y respetan las restricciones codificadas para materializar infraestructuras sistémicas completas. |

## 🚀 Cómo poner en práctica el Vibe Coding

Es fundamental valerse de IDEs modernos que comprendan directorios nativos de configuración Agente.

1. **Provisión de Contexto**: Abrir el repositorio directamente sobre la carpeta raíz de la orquestación.
2. **Invocación Orquestal**: Llamar explícitamente a nuestro Agente parametrizado (p. ej. `@weather-agent`) para forzar sus reglas asociadas, anulando el comportamiento estándar por defecto del bot.
3. **Delegación Sistematizada**: Ordenar acciones combinadas.
   > *"Usa el archivo de variables `crear-servicio.prompt` y genera toda la estructura, asegurándote de inyectarte primero el conocimiento de la carpeta `skills/logica-alertas`".*
4. **Evaluación de Rendimiento**: El código emitido debe juzgarse en base a si la IA cumplió rigurosamente el *copilot-instructions.md* sin desviarse de la trazabilidad.

## 🔗 Relación con otros temas
Este tema materializa el apogeo aplicativo del itinerario tecnológico de MLOps y NLP. Tras estudiar modelos Transformer vectoriales en Procesamiento de Lenguaje Natural y redes asíncronas pasadas, el alumnado salta a utilizar un LLM productivo real como eslabón multiplicador; aprendiendo a dictar directrices metódicas para automatizar procesos infinitos de software mediante Agentes.
