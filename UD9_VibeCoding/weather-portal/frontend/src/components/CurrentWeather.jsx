import React from 'react';

function LoadingState() {
  return (
    <div className="current-weather glass-card">
      <div className="current-weather-content">
        <div className="current-weather-main">
          <div className="skeleton skeleton-circle" style={{ marginBottom: '1rem' }} />
          <div className="skeleton skeleton-text" style={{ height: '3rem', width: '180px', marginBottom: '0.75rem' }} />
          <div className="skeleton skeleton-text short" />
        </div>
        <div className="current-weather-details">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="weather-detail-card">
              <div className="skeleton" style={{ width: 32, height: 32, borderRadius: '50%' }} />
              <div className="skeleton skeleton-text short" style={{ margin: '0.5rem 0 0.25rem' }} />
              <div className="skeleton skeleton-text" style={{ width: '50px', height: '0.6rem' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="error-container">
      <span className="error-icon">⚠️</span>
      <span>{message}</span>
    </div>
  );
}

export default function CurrentWeather({ data, loading, error }) {
  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!data) return null;

  const { temperature, weatherEmoji, weatherText, windSpeed, humidity, time } = data;

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    const date = new Date(timeStr);
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="current-weather glass-card" id="current-weather-card">
      <div className="current-weather-content">
        <div className="current-weather-main">
          <div className="current-weather-emoji">{weatherEmoji}</div>
          <div className="current-weather-temp">{Math.round(temperature)}°</div>
          <div className="current-weather-description">{weatherText}</div>
          {time && (
            <div className="current-weather-time">
              Actualizado a las {formatTime(time)}
            </div>
          )}
        </div>
        <div className="current-weather-details">
          <div className="weather-detail-card">
            <span className="weather-detail-icon">🌡️</span>
            <span className="weather-detail-value">{temperature}°C</span>
            <span className="weather-detail-label">Temperatura</span>
          </div>
          <div className="weather-detail-card">
            <span className="weather-detail-icon">💧</span>
            <span className="weather-detail-value">{humidity}%</span>
            <span className="weather-detail-label">Humedad</span>
          </div>
          <div className="weather-detail-card">
            <span className="weather-detail-icon">💨</span>
            <span className="weather-detail-value">{windSpeed}</span>
            <span className="weather-detail-label">Viento km/h</span>
          </div>
          <div className="weather-detail-card">
            <span className="weather-detail-icon">🧭</span>
            <span className="weather-detail-value">{weatherEmoji}</span>
            <span className="weather-detail-label">Estado</span>
          </div>
        </div>
      </div>
    </div>
  );
}