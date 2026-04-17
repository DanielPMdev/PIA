const { getCurrentWeather, getForecast24h } = require('../services/weatherService');
const { generateAlerts } = require('../services/alertService');

// Controlador para obtener el clima actual
async function getCurrent(req, res) {
  try {
    const lat = parseFloat(req.query.lat) || 39.4699; // Valencia por defecto
    const lon = parseFloat(req.query.lon) || -0.3763;

    const data = await getCurrentWeather(lat, lon);
    res.json({ success: true, data, error: '' });
  } catch (error) {
    res.status(500).json({ success: false, data: null, error: error.message });
  }
}

// Controlador para obtener la previsión de 24 horas
async function getForecast(req, res) {
  try {
    const lat = parseFloat(req.query.lat) || 39.4699;
    const lon = parseFloat(req.query.lon) || -0.3763;

    const data = await getForecast24h(lat, lon);
    res.json({ success: true, data, error: '' });
  } catch (error) {
    res.status(500).json({ success: false, data: null, error: error.message });
  }
}

// Controlador para obtener alertas
async function getAlerts(req, res) {
  try {
    const lat = parseFloat(req.query.lat) || 39.4699;
    const lon = parseFloat(req.query.lon) || -0.3763;

    // Obtener datos actuales y forecast para generar alertas
    const [currentData, forecastData] = await Promise.all([
      getCurrentWeather(lat, lon),
      getForecast24h(lat, lon),
    ]);

    const alerts = generateAlerts(currentData, forecastData);
    res.json({ success: true, data: alerts, error: '' });
  } catch (error) {
    res.status(500).json({ success: false, data: null, error: error.message });
  }
}

module.exports = {
  getCurrent,
  getForecast,
  getAlerts,
};