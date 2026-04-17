# Weather Portal - Frontend

Interfaz React que consume la API del backend y muestra clima, previsión y alertas.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev   # Desarrollo con Vite
npm run build # Build para producción
npm run preview # Vista previa build
```

Aplicación en `http://localhost:5173`.

## Componentes

- **CurrentWeather**: Temperatura, icono, viento, humedad
- **ForecastTable**: Tabla previsión 24h
- **AlertsPanel**: Alertas con colores

## Testing

```bash
npm test  # Tests con Jest + RTL
```

## Dependencias

- react: UI
- react-dom: Renderizado
- @vitejs/plugin-react: Plugin Vite