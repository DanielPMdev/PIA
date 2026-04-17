## SKILL: Parsear respuesta de Open-Meteo

La API de Open-Meteo devuelve este formato:
{
  "latitude": 37.39,
  "longitude": -5.99,
  "current": {
    "time": "2024-01-15T14:00",
    "temperature_2m": 18.5,
    "relative_humidity_2m": 65,
    "wind_speed_10m": 12.3,
    "weather_code": 3
  },
  "hourly": {
    "time": ["2024-01-15T00:00", "2024-01-15T01:00", ...],
    "temperature_2m": [15.2, 14.8, ...],
    "precipitation_probability": [10, 15, ...]
  }
}

Los weather_code se interpretan así:
- 0: Despejado
- 1-3: Parcialmente nublado
- 45-48: Niebla
- 51-67: Lluvia
- 71-77: Nieve
- 80-82: Chubascos
- 95-99: Tormenta

Siempre que proceses datos de Open-Meteo, transforma weather_code 
a texto legible y añade un emoji representativo.