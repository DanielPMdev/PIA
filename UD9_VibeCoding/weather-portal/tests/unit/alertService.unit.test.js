const { generateAlerts } = require('../../backend/src/services/alertService');

describe('alertService - generateAlerts', () => {
  it('debería devolver array vacío si no hay alertas', () => {
    const currentData = { temperature: 20, windSpeed: 5, precipitationProbability: 10, weatherText: 'Despejado' };
    const forecastData = { forecast: [] };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toEqual([]);
  });

  it('debería generar alerta roja por temperatura alta', () => {
    const currentData = { temperature: 45, windSpeed: 5, precipitationProbability: 10, weatherText: 'Despejado' };
    const forecastData = { forecast: [] };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      level: 'danger',
      message: expect.stringContaining('Temperatura extrema'),
      icon: '🔴',
    });
  });

  it('debería generar alerta roja por viento fuerte', () => {
    const currentData = { temperature: 20, windSpeed: 90, precipitationProbability: 10, weatherText: 'Despejado' };
    const forecastData = { forecast: [] };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      level: 'danger',
      message: expect.stringContaining('Viento muy fuerte'),
      icon: '🔴',
    });
  });

  it('debería generar alerta roja por tormenta', () => {
    const currentData = { temperature: 20, windSpeed: 5, precipitationProbability: 85, weatherText: 'Despejado' };
    const forecastData = { forecast: [] };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      level: 'danger',
      message: expect.stringContaining('Alta probabilidad de tormenta'),
      icon: '🔴',
    });
  });

  it('debería generar alerta naranja por temperatura moderada', () => {
    const currentData = { temperature: 37, windSpeed: 5, precipitationProbability: 10, weatherText: 'Despejado' };
    const forecastData = { forecast: [] };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      level: 'warning',
      message: expect.stringContaining('Temperatura elevada'),
      icon: '🟠',
    });
  });

  it('debería generar alerta amarilla por niebla', () => {
    const currentData = { temperature: 20, windSpeed: 5, precipitationProbability: 10, weatherText: 'Niebla' };
    const forecastData = { forecast: [] };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      level: 'info',
      message: expect.stringContaining('Niebla'),
      icon: '🟡',
    });
  });

  it('debería generar múltiples alertas', () => {
    const currentData = { temperature: 45, windSpeed: 90, precipitationProbability: 10, weatherText: 'Niebla' };
    const forecastData = { forecast: [] };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toHaveLength(3);
    expect(result.map(a => a.level)).toEqual(['danger', 'danger', 'info']);
  });

  it('debería incluir alertas de forecast', () => {
    const currentData = { temperature: 20, windSpeed: 5, precipitationProbability: 10, weatherText: 'Despejado' };
    const forecastData = {
      forecast: [
        { time: '2024-01-15T12:00', temperature: 20, precipitationProbability: 90, weatherText: 'Tormenta' },
      ],
    };

    const result = generateAlerts(currentData, forecastData);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      level: 'danger',
      message: expect.stringContaining('Tormenta prevista'),
      icon: '🔴',
    });
  });
});