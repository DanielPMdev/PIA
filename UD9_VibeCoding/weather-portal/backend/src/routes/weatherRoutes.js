const express = require('express');
const { getCurrent, getForecast, getAlerts } = require('../controllers/weatherController');

const router = express.Router();

// Ruta para obtener el clima actual
router.get('/current', getCurrent);

// Ruta para obtener la previsión de 24 horas
router.get('/forecast', getForecast);

// Ruta para obtener alertas
router.get('/alerts', getAlerts);

module.exports = router;