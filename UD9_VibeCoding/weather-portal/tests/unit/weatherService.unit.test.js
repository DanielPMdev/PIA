const axios = require('axios');
const { getCurrentWeather, getForecast24h } = require('../../backend/src/services/weatherService');

jest.mock('axios');

describe('weatherService - getCurrentWeather', () => {
  it('debería devolver datos parseados correctamente en caso de éxito', async () => {
    const mockResponse = {
      data: {
        latitude: 39.4699,
        longitude: -0.3763,
        current: {
          temperature_2m: 20.5,
          relative_humidity_2m: 65,
          wind_speed_10m: 10.2,
          weather_code: 1,
          time: '2024-01-15T14:00',
        },
      },
    };
    axios.get.mockResolvedValue(mockResponse);

    const result = await getCurrentWeather(39.4699, -0.3763);

    expect(result).toEqual({
      latitude: 39.4699,
      longitude: -0.3763,
      temperature: 20.5,
      humidity: 65,
      windSpeed: 10.2,
      weatherText: 'Mayormente despejado',
      weatherEmoji: '🌤️',
      time: '2024-01-15T14:00',
    });
  });

  it('debería lanzar error en caso de fallo de red', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(getCurrentWeather(39.4699, -0.3763)).rejects.toThrow('Error al obtener el clima actual: Network Error');
  });

  it('debería lanzar error si no hay datos actuales', async () => {
    const mockResponse = { data: {} };
    axios.get.mockResolvedValue(mockResponse);

    await expect(getCurrentWeather(39.4699, -0.3763)).rejects.toThrow('Error al obtener el clima actual: No se encontraron datos actuales');
  });
});

describe('weatherService - getForecast24h', () => {
  it('debería devolver datos parseados correctamente en caso de éxito', async () => {
    const mockResponse = {
      data: {
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
    axios.get.mockResolvedValue(mockResponse);

    const result = await getForecast24h(39.4699, -0.3763);

    expect(result).toEqual({
      latitude: 39.4699,
      longitude: -0.3763,
      forecast: [
        {
          time: '2024-01-15T00:00',
          temperature: 15.2,
          precipitationProbability: 10,
          weatherText: 'Despejado',
          weatherEmoji: '☀️',
        },
        {
          time: '2024-01-15T01:00',
          temperature: 14.8,
          precipitationProbability: 15,
          weatherText: 'Mayormente despejado',
          weatherEmoji: '🌤️',
        },
      ],
    });
  });

  it('debería lanzar error en caso de fallo de red', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(getForecast24h(39.4699, -0.3763)).rejects.toThrow('Error al obtener la previsión de 24 horas: Network Error');
  });

  it('debería lanzar error si no hay datos de previsión', async () => {
    const mockResponse = { data: {} };
    axios.get.mockResolvedValue(mockResponse);

    await expect(getForecast24h(39.4699, -0.3763)).rejects.toThrow('Error al obtener la previsión de 24 horas: No se encontraron datos de previsión');
  });
});