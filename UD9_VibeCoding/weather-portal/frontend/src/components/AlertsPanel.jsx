import React from 'react';

function LoadingState() {
  return (
    <div className="alerts-section">
      <div className="alerts-header">
        <h2 className="section-title">
          <span className="section-title-icon">🚨</span>
          Alertas Meteorológicas
        </h2>
      </div>
      <div className="alerts-list">
        {[1, 2].map(i => (
          <div key={i} className="alert-item info" style={{ opacity: 0.5 }}>
            <div className="skeleton" style={{ width: 32, height: 32, borderRadius: '50%' }} />
            <div className="alert-content">
              <div className="skeleton skeleton-text short" />
              <div className="skeleton skeleton-text long" />
            </div>
          </div>
        ))}
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

const levelLabels = {
  danger: 'Alerta Roja',
  warning: 'Alerta Naranja',
  info: 'Alerta Amarilla',
};

export default function AlertsPanel({ data, loading, error }) {
  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!data) return null;

  const alertsList = data;

  return (
    <div className="alerts-section" id="alerts-section">
      <div className="alerts-header">
        <h2 className="section-title">
          <span className="section-title-icon">🚨</span>
          Alertas Meteorológicas
        </h2>
        <span className="alerts-count">
          {alertsList.length} {alertsList.length === 1 ? 'alerta' : 'alertas'}
        </span>
      </div>

      {alertsList.length === 0 ? (
        <div className="no-alerts">
          <span className="no-alerts-icon">✅</span>
          <div>
            <div className="no-alerts-text">Sin alertas activas</div>
            <div className="no-alerts-sub">Las condiciones meteorológicas son normales</div>
          </div>
        </div>
      ) : (
        <div className="alerts-list stagger-children">
          {alertsList.map((alert, index) => (
            <div key={index} className={`alert-item ${alert.level}`}>
              <span className="alert-icon">{alert.icon}</span>
              <div className="alert-content">
                <div className="alert-level">{levelLabels[alert.level] || alert.level}</div>
                <div className="alert-message">{alert.message}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}