const express = require('express');
const CRutas = require('../../controlador/admin/CrearClienteControlador');
const TRutas = require('../../controlador/admin/CrearTrabajadorControlador');
const ARutas = require('../../controlador/admin/CrearAdminControlador');
const LRutas = require('../../controlador/admin/LoginAdminControlador');
const HRutas = require('../../controlador/admin/ConsultarHorariosAdminControlador');

const router = express.Router();

router.post('/seguridad/crearcliente', CRutas.crearCliente);//RF01
router.post('/seguridad/creartrabajador', TRutas.crearTrabajador);//RF04
router.post('/seguridad/crearadmin', ARutas.crearAdmin);
router.post('/seguridad/login', LRutas.validarCredencial);
router.get('/seguridad/horarios', HRutas.consultarHorarios);

module.exports = router;