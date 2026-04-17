import React from 'react';

function LoadingState() {
  return (
    <div className="forecast-section">
      <div className="forecast-header">
        <h2 className="section-title">
          <span className="section-title-icon">📅</span>
          Previsión 24 Horas
        </h2>
      </div>
      <div className="forecast-scroll-container">
        <div className="forecast-cards">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="forecast-card" style={{ opacity: 1 - i * 0.05 }}>
              <div className="skeleton" style={{ width: 36, height: 12, borderRadius: 6 }} />
              <div className="skeleton" style={{ width: 32, height: 32, borderRadius: '50%' }} />
              <div className="skeleton" style={{ width: 40, height: 16, borderRadius: 6 }} />
              <div className="skeleton" style={{ width: 30, height: 10, borderRadius: 6 }} />
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

export default function ForecastTable({ data, loading, error }) {
  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!data || !data.forecast) return null;

  const { forecast: forecastList } = data;

  const formatHour = (timeStr) => {
    const date = new Date(timeStr);
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Determine which hour is closest to "now"
  const now = new Date();
  const nowHour = now.getHours();

  return (
    <div className="forecast-section" id="forecast-section">
      <div className="forecast-header">
        <h2 className="section-title">
          <span className="section-title-icon">📅</span>
          Previsión 24 Horas
        </h2>
      </div>
      <div className="forecast-scroll-container">
        <div className="forecast-cards stagger-children">
          {forecastList.map((hour, index) => {
            const hourDate = new Date(hour.time);
            const isNow = hourDate.getHours() === nowHour;
            return (
              <div
                key={index}
                className={`forecast-card${isNow ? ' is-now' : ''}`}
              >
                <span className="forecast-time">
                  {isNow ? 'Ahora' : formatHour(hour.time)}
                </span>
                <span className="forecast-emoji">{hour.weatherEmoji}</span>
                <span className="forecast-temp">{Math.round(hour.temperature)}°</span>
                <span className="forecast-rain">
                  <span className="forecast-rain-icon">💧</span>
                  {hour.precipitationProbability}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}