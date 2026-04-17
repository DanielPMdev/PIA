// Función para generar alertas basadas en datos meteorológicos parseados
function generateAlerts(currentData, forecastData) {
  const alerts = [];

  // Datos actuales
  const { temperature, windSpeed, weatherText, precipitationProbability } = currentData;

  // Reglas para ALERTA ROJA (danger)
  if (temperature > 40 || temperature < -5) {
    alerts.push({
      level: 'danger',
      message: `Temperatura extrema: ${temperature}°C. ${temperature > 40 ? 'Riesgo de calor extremo.' : 'Riesgo de frío extremo.'}`,
      icon: '🔴',
    });
  }
  if (windSpeed > 80) {
    alerts.push({
      level: 'danger',
      message: `Viento muy fuerte: ${windSpeed} km/h. Riesgo de vientos peligrosos.`,
      icon: '🔴',
    });
  }
  // Para tormenta, usar precipitationProbability > 80% como proxy
  if (precipitationProbability > 80) {
    alerts.push({
      level: 'danger',
      message: `Alta probabilidad de tormenta: ${precipitationProbability}%. Riesgo de tormentas severas.`,
      icon: '🔴',
    });
  }

  // Reglas para ALERTA NARANJA (warning)
  if ((temperature >= 35 && temperature <= 40) || (temperature >= -5 && temperature <= 0)) {
    alerts.push({
      level: 'warning',
      message: `Temperatura elevada/baja: ${temperature}°C. Precaución con el clima.`,
      icon: '🟠',
    });
  }
  if (windSpeed >= 50 && windSpeed <= 80) {
    alerts.push({
      level: 'warning',
      message: `Viento fuerte: ${windSpeed} km/h. Posible impacto en actividades al aire libre.`,
      icon: '🟠',
    });
  }
  // Para precipitación, usar precipitationProbability > 50% como proxy para >20mm (aproximado)
  if (precipitationProbability > 50 && precipitationProbability <= 80) {
    alerts.push({
      level: 'warning',
      message: `Alta probabilidad de precipitación: ${precipitationProbability}%. Posible lluvia intensa.`,
      icon: '🟠',
    });
  }

  // Reglas para ALERTA AMARILLA (info)
  if (temperature >= 32 && temperature < 35) {
    alerts.push({
      level: 'info',
      message: `Temperatura cálida: ${temperature}°C. Mantente hidratado.`,
      icon: '🟡',
    });
  }
  if (windSpeed >= 30 && windSpeed < 50) {
    alerts.push({
      level: 'info',
      message: `Viento moderado: ${windSpeed} km/h. Ten cuidado al conducir.`,
      icon: '🟡',
    });
  }
  if (weatherText.includes('Niebla')) {
    alerts.push({
      level: 'info',
      message: 'Niebla presente. Reduce la velocidad y usa luces.',
      icon: '🟡',
    });
  }

  // Si hay datos de forecast, analizar para alertas adicionales (ej. tormenta en forecast)
  if (forecastData && forecastData.forecast) {
    forecastData.forecast.forEach(hour => {
      if (hour.precipitationProbability > 80) {
        alerts.push({
          level: 'danger',
          message: `Tormenta prevista a las ${hour.time}: ${hour.precipitationProbability}%.`,
          icon: '🔴',
        });
      }
    });
  }

  return alerts;
}

module.exports = {
  generateAlerts,
};