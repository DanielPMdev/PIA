const axios = require('axios');

// Coordenadas por defecto de Valencia
const DEFAULT_LAT = 39.4699;
const DEFAULT_LON = -0.3763;

// Función para mapear weather_code a texto y emoji
function mapWeatherCode(code) {
  const mappings = {
    0: { text: 'Despejado', emoji: '☀️' },
    1: { text: 'Mayormente despejado', emoji: '🌤️' },
    2: { text: 'Parcialmente nublado', emoji: '⛅' },
    3: { text: 'Nublado', emoji: '☁️' },
    45: { text: 'Niebla', emoji: '🌫️' },
    48: { text: 'Niebla helada', emoji: '🌫️' },
    51: { text: 'Lluvia ligera', emoji: '🌦️' },
    53: { text: 'Lluvia moderada', emoji: '🌦️' },
    55: { text: 'Lluvia intensa', emoji: '🌧️' },
    61: { text: 'Lluvia ligera', emoji: '🌦️' },
    63: { text: 'Lluvia moderada', emoji: '🌦️' },
    65: { text: 'Lluvia intensa', emoji: '🌧️' },
    71: { text: 'Nieve ligera', emoji: '🌨️' },
    73: { text: 'Nieve moderada', emoji: '🌨️' },
    75: { text: 'Nieve intensa', emoji: '❄️' },
    80: { text: 'Chubascos ligeros', emoji: '🌦️' },
    81: { text: 'Chubascos moderados', emoji: '🌦️' },
    82: { text: 'Chubascos intensos', emoji: '🌧️' },
    95: { text: 'Tormenta', emoji: '⛈️' },
    96: { text: 'Tormenta con granizo', emoji: '⛈️' },
    99: { text: 'Tormenta intensa con granizo', emoji: '⛈️' },
  };
  return mappings[code] || { text: 'Desconocido', emoji: '❓' };
}

// Función para obtener el clima actual
async function getCurrentWeather(lat = DEFAULT_LAT, lon = DEFAULT_LON) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
    const response = await axios.get(url);
    const data = response.data;

    if (!data.current || !data.current.temperature_2m) {
      throw new Error('No se encontraron datos actuales completos');
    }

    const weather = mapWeatherCode(data.current.weather_code);

    return {
      latitude: data.latitude,
      longitude: data.longitude,
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      weatherText: weather.text,
      weatherEmoji: weather.emoji,
      time: data.current.time,
    };
  } catch (error) {
    throw new Error(`Error al obtener el clima actual: ${error.message}`);
  }
}

// Función para obtener la previsión de 24 horas
async function getForecast24h(lat = DEFAULT_LAT, lon = DEFAULT_LON) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,weather_code&forecast_days=1`;
    const response = await axios.get(url);
    const data = response.data;

    if (!data.hourly || !data.hourly.time) {
      throw new Error('No se encontraron datos de previsión');
    }

    const forecast = data.hourly.time.map((time, index) => {
      const weather = mapWeatherCode(data.hourly.weather_code[index]);
      return {
        time,
        temperature: data.hourly.temperature_2m[index],
        precipitationProbability: data.hourly.precipitation_probability[index],
        weatherText: weather.text,
        weatherEmoji: weather.emoji,
      };
    });

    return {
      latitude: data.latitude,
      longitude: data.longitude,
      forecast,
    };
  } catch (error) {
    throw new Error(`Error al obtener la previsión de 24 horas: ${error.message}`);
  }
}

module.exports = {
  getCurrentWeather,
  getForecast24h,
};