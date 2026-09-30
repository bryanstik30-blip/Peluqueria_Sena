const express = require('express');
const CRutas = require('../../controlador/horarios/ConsultarHorariosControlador');

const router = express.Router();

router.get('/horarios', CRutas.consultarHorarios);//RF06

module.exports = router;