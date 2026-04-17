const API_BASE_URL = 'http://localhost:3001/api/weather';

export async function getCurrentWeather(lat, lon) {
  const response = await fetch(`${API_BASE_URL}/current?lat=${lat}&lon=${lon}`);
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error || 'Error al obtener clima actual');
  }
  return data.data;
}

export async function getForecast(lat, lon) {
  const response = await fetch(`${API_BASE_URL}/forecast?lat=${lat}&lon=${lon}`);
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error || 'Error al obtener previsión');
  }
  return data.data;
}

export async function getAlerts(lat, lon) {
  const response = await fetch(`${API_BASE_URL}/alerts?lat=${lat}&lon=${lon}`);
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error || 'Error al obtener alertas');
  }
  return data.data;
}