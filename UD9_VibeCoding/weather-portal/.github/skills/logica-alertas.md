## SKILL: Lógica de alertas meteorológicas

Cuando el agente implemente alertas, debe usar SIEMPRE estas reglas:

ALERTA ROJA (nivel: 'danger'):
- Temperatura > 40°C o < -5°C
- Viento > 80 km/h
- Probabilidad de tormenta > 80%

ALERTA NARANJA (nivel: 'warning'):  
- Temperatura entre 35-40°C o entre -5°C y 0°C
- Viento entre 50-80 km/h
- Precipitación > 20mm en 1 hora

ALERTA AMARILLA (nivel: 'info'):
- Temperatura entre 32-35°C
- Viento entre 30-50 km/h
- Niebla (weather_code 45-48)

La función debe devolver un array de alertas:
[{ level: 'danger'|'warning'|'info', message: '...', icon: '🔴|🟠|🟡' }]
Si no hay alertas, devuelve un array vacío [].