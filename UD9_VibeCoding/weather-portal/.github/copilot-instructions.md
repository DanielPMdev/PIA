# Instrucciones del Proyecto: Weather Portal

## Stack tecnológico
- Backend: Node.js + Express (puerto 3001)
- Frontend: React + Vite (puerto 5173)
- API externa: Open-Meteo (https://api.open-meteo.com/v1/forecast)
- Testing: Jest + React Testing Library + Supertest

## Reglas de código
- Usa siempre async/await, nunca .then()/.catch() encadenados
- Maneja TODOS los errores con try/catch y mensajes descriptivos
- Las funciones deben ser pequeñas y con una sola responsabilidad
- Usa variables de entorno (.env) para configuración, nunca hardcodees valores
- Comenta solo lo que no sea obvio por el nombre de la función

## Estructura de carpetas obligatoria
- backend/src/routes/       → Rutas de Express
- backend/src/services/     → Lógica de negocio y llamadas a APIs externas
- backend/src/controllers/  → Controladores que unen rutas y servicios
- frontend/src/components/  → Componentes React reutilizables
- frontend/src/services/    → Llamadas al backend desde React
- frontend/src/hooks/       → Custom hooks de React
- tests/unit/               → Tests unitarios
- tests/integration/        → Tests de integración
- tests/mocks/              → Datos de prueba y mocks

## Convenciones de nombres
- Archivos de servicios: weatherService.js, alertService.js
- Archivos de componentes: WeatherCard.jsx, ForecastTable.jsx
- Archivos de test: weatherService.test.js, WeatherCard.test.jsx
- Rutas de la API: /api/weather/current, /api/weather/forecast, /api/weather/alerts

## Respuesta de la API
Siempre devuelve JSON con esta estructura:
{
  "success": true/false,
  "data": { ... },
  "error": "mensaje de error si aplica"
}