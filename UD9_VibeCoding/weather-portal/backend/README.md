# Weather Portal - Backend

API REST con Express que proporciona datos meteorológicos desde Open-Meteo.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev  # Modo desarrollo con nodemon
npm start    # Producción
```

Servidor en `http://localhost:3001`.

## Endpoints

- `GET /api/weather/current` - Clima actual
- `GET /api/weather/forecast` - Previsión 24h
- `GET /api/weather/alerts` - Alertas

Parámetros: `lat`, `lon` (opcionales, defecto Valencia).

## Testing

```bash
npm test  # Ejecuta tests con Jest
```

Cobertura en `coverage/`.

## Dependencias

- express: Servidor web
- axios: Llamadas HTTP
- cors: Cross-origin
- dotenv: Variables entorno