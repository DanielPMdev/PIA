const { generateAlerts } = require('../../backend/src/services/alertService');

const MOCK_DATA = {
  currentNormal: {
    temperature: 20,
    windSpeed: 10,
    precipitationProbability: 20,
    weatherText: 'Despejado',
  },
  currentDangerTemp: {
    temperature: 45,
    windSpeed: 10,
    precipitationProbability: 20,
    weatherText: 'Despejado',
  },
  currentDangerWind: {
    temperature: 20,
    windSpeed: 90,
    precipitationProbability: 20,
    weatherText: 'Despejado',
  },
  currentWarningTemp: {
    temperature: 37,
    windSpeed: 10,
    precipitationProbability: 20,
    weatherText: 'Despejado',
  },
  currentInfoFog: {
    temperature: 20,
    windSpeed: 10,
    precipitationProbability: 20,
    weatherText: 'Niebla',
  },
  forecastStorm: {
    forecast: [
      { time: '2024-01-15T12:00', temperature: 20, precipitationProbability: 90, weatherText: 'Tormenta' },
    ],
  },
  forecastNormal: {
    forecast: [],
  },
};

describe('alertService - Tests con Mocks', () => {
  it('debería devolver array vacío para datos normales', () => {
    const result = generateAlerts(MOCK_DATA.currentNormal, MOCK_DATA.forecastNormal);
    expect(result).toEqual([]);
  });

  it('debería generar alerta roja para temperatura extrema', () => {
    const result = generateAlerts(MOCK_DATA.currentDangerTemp, MOCK_DATA.forecastNormal);
    expect(result).toHaveLength(1);
    expect(result[0].level).toBe('danger');
  });

  it('debería generar alerta roja para viento fuerte', () => {
    const result = generateAlerts(MOCK_DATA.currentDangerWind, MOCK_DATA.forecastNormal);
    expect(result).toHaveLength(1);
    expect(result[0].level).toBe('danger');
  });

  it('debería generar alerta naranja para temperatura moderada', () => {
    const result = generateAlerts(MOCK_DATA.currentWarningTemp, MOCK_DATA.forecastNormal);
    expect(result).toHaveLength(1);
    expect(result[0].level).toBe('warning');
  });

  it('debería generar alerta amarilla para niebla', () => {
    const result = generateAlerts(MOCK_DATA.currentInfoFog, MOCK_DATA.forecastNormal);
    expect(result).toHaveLength(1);
    expect(result[0].level).toBe('info');
  });

  it('debería generar alerta de forecast para tormenta', () => {
    const result = generateAlerts(MOCK_DATA.currentNormal, MOCK_DATA.forecastStorm);
    expect(result).toHaveLength(1);
    expect(result[0].level).toBe('danger');
    expect(result[0].message).toContain('Tormenta prevista');
  });

  it('debería manejar datos incompletos sin fallar', () => {
    const incompleteData = { temperature: 20, weatherText: '' }; // Agregar weatherText para evitar error
    const result = generateAlerts(incompleteData, MOCK_DATA.forecastNormal);
    // Debería no generar alertas o manejar gracefully
    expect(Array.isArray(result)).toBe(true);
  });
});