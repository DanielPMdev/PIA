const axios = require('axios');
const { getCurrentWeather, getForecast24h } = require('../../backend/src/services/weatherService');

const MOCK_DATA = {
  current: {
    latitude: 39.4699,
    longitude: -0.3763,
    current: {
      temperature_2m: 18.5,
      relative_humidity_2m: 60,
      wind_speed_10m: 12.3,
      weather_code: 3,
      time: '2024-01-15T14:00',
    },
  },
  hourly: {
    latitude: 39.4699,
    longitude: -0.3763,
    hourly: {
      time: ['2024-01-15T00:00', '2024-01-15T01:00'],
      temperature_2m: [15.2, 14.8],
      precipitation_probability: [10, 15],
      weather_code: [0, 1],
    },
  },
};

jest.mock('axios');

describe('weatherService - Tests con Mocks', () => {
  it('debería manejar respuesta lenta correctamente', async () => {
    axios.get.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ data: MOCK_DATA.current }), 2000)));

    const result = await getCurrentWeather(39.4699, -0.3763);

    expect(result.temperature).toBe(18.5);
    expect(result.weatherText).toBe('Nublado');
  });

  it('debería manejar error 500', async () => {
    axios.get.mockRejectedValue({ response: { status: 500, data: 'Internal Server Error' } });

    await expect(getCurrentWeather(39.4699, -0.3763)).rejects.toThrow('Error al obtener el clima actual');
  });

  it('debería manejar datos incompletos', async () => {
    const incompleteData = { ...MOCK_DATA.current };
    delete incompleteData.current.temperature_2m;
    axios.get.mockResolvedValue({ data: incompleteData });

    await expect(getCurrentWeather(39.4699, -0.3763)).rejects.toThrow('Error al obtener el clima actual');
  });

  it('debería manejar respuesta lenta en forecast', async () => {
    axios.get.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ data: MOCK_DATA.hourly }), 2000)));

    const result = await getForecast24h(39.4699, -0.3763);

    expect(result.forecast.length).toBe(2);
  });

  it('debería manejar error 500 en forecast', async () => {
    axios.get.mockRejectedValue({ response: { status: 500, data: 'Internal Server Error' } });

    await expect(getForecast24h(39.4699, -0.3763)).rejects.toThrow('Error al obtener la previsión de 24 horas');
  });

  it('debería manejar datos incompletos en forecast', async () => {
    const incompleteData = { ...MOCK_DATA.hourly };
    delete incompleteData.hourly.time;
    axios.get.mockResolvedValue({ data: incompleteData });

    await expect(getForecast24h(39.4699, -0.3763)).rejects.toThrow('Error al obtener la previsión de 24 horas');
  });
});