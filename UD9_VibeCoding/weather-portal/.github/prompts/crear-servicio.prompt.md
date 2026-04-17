---
description: 'Crea un nuevo servicio en el backend de Express'
---

Crea un servicio llamado ${input:serviceName}Service.js en backend/src/services/.

El servicio debe:
- Exportar funciones individuales (no una clase)
- Usar axios o fetch para llamadas HTTP externas
- Incluir manejo de errores en cada función
- Incluir JSDoc con los parámetros y el tipo de retorno
- Seguir la estructura del proyecto (ver instructions)

Funcionalidad a implementar: ${input:functionality}

Endpoint de Open-Meteo a usar (si aplica): ${input:endpoint}

Después de crear el servicio, crea su controlador correspondiente 
en backend/src/controllers/ y registra la ruta en backend/src/routes/.