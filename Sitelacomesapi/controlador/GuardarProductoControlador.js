const GuardarProductoModelo = require('../modelo/GuardarProductoModelo');

class GuardarProductoControlador {
  static async guardarProducto(req, res) {
    try {
      const { producto } = req.body;
      if (!producto || producto.trim() === '') {
        return res.status(400).json({ error: 'El campo "producto" es obligatorio.' });
      }
      const nuevoProducto = await GuardarProductoModelo.guardarProducto({ producto });
      return res.status(201).json({
        mensaje: 'Producto registrado correctamente',
        data: nuevoProducto
      });
    } catch (error) {
      console.error('Error en GuardarProductoControlador.guardarProducto:', error);
      if (error.code === '23505') {
        return res.status(400).json({
          error: `El producto "${req.body.producto}" ya existe.`
        });
      }

      if (error.code === '23502') {
        return res.status(400).json({
          error: 'Falta el valor obligatorio del campo "producto".'
        });
      }

      // Error general
      return res.status(500).json({
        error: 'Error interno del servidor',
        detalle: error.message
      });
    }
  }
}

module.exports = GuardarProductoControlador;
