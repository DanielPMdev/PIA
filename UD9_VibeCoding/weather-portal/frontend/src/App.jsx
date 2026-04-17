import React, { useState, useCallback } from 'react';
import CurrentWeather from './components/CurrentWeather';
import ForecastTable from './components/ForecastTable';
import AlertsPanel from './components/AlertsPanel';
import CitySearch from './components/CitySearch';
import { useWeather } from './hooks/useWeather';

const DEFAULT_CITY = {
  name: 'Valencia, Comunidad Valenciana, España',
  lat: 39.4699,
  lon: -0.3763,
};

export default function App() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const { current, forecast, alerts, refresh, isAnyLoading } = useWeather(city.lat, city.lon);

  const handleCitySelect = useCallback((newCity) => {
    setCity(newCity);
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="app-logo">
          <span className="app-logo-icon">⛅</span>
          <div>
            <h1 className="app-title">Weather Portal</h1>
            <div className="app-subtitle">Datos meteorológicos en tiempo real</div>
          </div>
        </div>
        <div className="header-actions">
          <button
            className={`refresh-btn${isAnyLoading ? ' spinning' : ''}`}
            onClick={refresh}
            disabled={isAnyLoading}
            title="Actualizar datos"
            id="refresh-button"
          >
            ↻
          </button>
        </div>
      </header>

      {/* City Search */}
      <CitySearch onCitySelect={handleCitySelect} />

      {/* Location Badge */}
      <div className="location-badge">
        <span className="location-badge-icon">📍</span>
        <span className="location-badge-name">{city.name}</span>
        <span className="location-badge-coords">
          ({city.lat.toFixed(4)}°, {city.lon.toFixed(4)}°)
        </span>
      </div>

      {/* Main Content Grid */}
      <main className="main-grid">
        <CurrentWeather
          data={current.data}
          loading={current.loading}
          error={current.error}
        />
        <ForecastTable
          data={forecast.data}
          loading={forecast.loading}
          error={forecast.error}
        />
        <AlertsPanel
          data={alerts.data}
          loading={alerts.loading}
          error={alerts.error}
        />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        Datos proporcionados por{' '}
        <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
          Open-Meteo
        </a>{' '}
        · Proyecto educativo
      </footer>
    </div>
  );
}