const Producto = require('../modelo/ConsultaProductoModelo');

const ConsultaProductosControlador = {};

ConsultaProductosControlador.mostrarTodos = async (req, res) => {
    try {
        const productos = await new Producto().mostrarTodos();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor al obtener los productos.' });
    }
};

module.exports = ConsultaProductosControlador;