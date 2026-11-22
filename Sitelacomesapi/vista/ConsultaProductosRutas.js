const express = require('express');
const router = express.Router();
const ConsultaControlador = require('../controlador/ConsultaProductosControlador');
const ConsultaGControlador = require('../controlador/GuardarProductoControlador');


router.get('/', ConsultaControlador.mostrarTodos);
router.post('/productos/guardar', ConsultaGControlador.guardarProducto);

module.exports = router;