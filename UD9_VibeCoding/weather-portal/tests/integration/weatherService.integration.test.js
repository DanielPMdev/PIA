const request = require('supertest');
const app = require('../../backend/src/index');

describe('weatherService - Integración con Open-Meteo', () => {
  jest.setTimeout(10000); // Timeout de 10 segundos para llamadas externas

  it('debería devolver clima actual con formato correcto', async () => {
    const response = await request(app)
      .get('/api/weather/current')
      .query({ lat: 39.4699, lon: -0.3763 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('error', '');
    expect(response.body.data).toHaveProperty('temperature');
    expect(response.body.data).toHaveProperty('weatherText');
  });

  it('debería devolver previsión de 24 horas con formato correcto', async () => {
    const response = await request(app)
      .get('/api/weather/forecast')
      .query({ lat: 39.4699, lon: -0.3763 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('error', '');
    expect(response.body.data).toHaveProperty('forecast');
    expect(Array.isArray(response.body.data.forecast)).toBe(true);
  });
});