const db = require('./bd/Conexion');


class ConsultaProductoModelo {
async mostrarTodos() {
    try {
      const result = await db.query('SELECT * FROM productos ORDER BY idproductos ASC');
      return result.rows;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw error;
    }
  }
}
module.exports = ConsultaProductoModelo;