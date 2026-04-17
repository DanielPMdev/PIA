---
description: 'Genera los 3 tipos de test para un módulo del proyecto'
---

Genera los 3 tipos de test para el módulo: ${input:moduleName}

## TEST UNITARIO (tests/unit/${input:moduleName}.unit.test.js)
- Testea cada función de forma aislada
- Mockea todas las dependencias externas (axios, fetch, otros servicios)
- Cubre el caso de éxito y al menos 2 casos de error
- Usa describe() y it() con nombres descriptivos en español

## TEST DE INTEGRACIÓN (tests/integration/${input:moduleName}.integration.test.js)
- Testea el endpoint completo de Express con Supertest
- Hace una llamada REAL a la API de Open-Meteo (sin mocks)
- Verifica que la respuesta tiene el formato correcto { success, data }
- Incluye timeout de 10 segundos para llamadas externas

## TEST CON MOCKS (tests/mocks/${input:moduleName}.mock.test.js)
- Define los datos de ejemplo de Open-Meteo en una constante MOCK_DATA
- Simula respuestas lentas, errores de red y datos incompletos
- Testea el comportamiento del sistema ante fallos externos
- El mock debe parecerse a la respuesta real de Open-Meteo

Usa Jest para todo. Importa los módulos con la ruta relativa correcta.