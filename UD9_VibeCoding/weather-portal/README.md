# Weather Portal

Portal meteorológico full-stack que muestra el clima actual, previsión de 24 horas y alertas basadas en datos de Open-Meteo.

## Stack Tecnológico

- **Backend**: Node.js + Express (puerto 3001)
- **Frontend**: React + Vite (puerto 5173)
- **API Externa**: Open-Meteo (https://api.open-meteo.com/v1/forecast)
- **Testing**: Jest + React Testing Library + Supertest

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd weather-portal
   ```

2. Instala dependencias del backend:
   ```bash
   cd backend
   npm install
   ```

3. Instala dependencias del frontend:
   ```bash
   cd ../frontend
   npm install
   ```

## Ejecución

1. Inicia el backend:
   ```bash
   cd backend
   npm run dev
   ```

2. En otra terminal, inicia el frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Accede a la aplicación en `http://localhost:5173`.

## Estructura del Proyecto

```
weather-portal/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── weatherController.js
│   │   ├── routes/
│   │   │   └── weatherRoutes.js
│   │   ├── services/
│   │   │   ├── weatherService.js
│   │   │   └── alertService.js
│   │   └── index.js
│   ├── package.json
│   └── jest.config.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CurrentWeather.jsx
│   │   │   ├── ForecastTable.jsx
│   │   │   └── AlertsPanel.jsx
│   │   ├── hooks/
│   │   │   └── useWeather.js
│   │   ├── services/
│   │   │   └── weatherApi.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── tests/
│   ├── unit/
│   ├── integration/
│   └── mocks/
├── .env
└── README.md
```

## API Endpoints

- `GET /api/weather/current?lat=39.4699&lon=-0.3763` - Clima actual
- `GET /api/weather/forecast?lat=39.4699&lon=-0.3763` - Previsión 24h
- `GET /api/weather/alerts?lat=39.4699&lon=-0.3763` - Alertas meteorológicas

Respuesta siempre en formato JSON:
```json
{
  "success": true,
  "data": { ... },
  "error": ""
}
```

## Testing

Ejecuta los tests desde la raíz:
```bash
npx jest --coverage
```

Tipos de tests:
- **Unitarios**: Lógica aislada con mocks.
- **Integración**: Llamadas reales a Open-Meteo.
- **Mocks**: Simulación de errores y datos incompletos.

## Convenciones

- **Backend**: Async/await con try/catch, servicios en camelCase.
- **Frontend**: Componentes en PascalCase, hooks para estado, no fetch directo.
- **Alertas**: Roja (danger), Naranja (warning), Amarilla (info).

## Coordenadas por Defecto

Valencia, España: 39.4699, -0.3763

## Licencia

Este proyecto es para fines educativos.