const db = require('./bd/Conexion');

class GuardarProductoModelo {
  static async guardarProducto({ producto }) {
    try {
      const query = 'INSERT INTO productos (producto) VALUES ($1) RETURNING *';
      const values = [producto];
      const { rows } = await db.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error en GuardarProductoModelo.guardarProducto:', error);
      throw error;
    }
  }
}

module.exports = GuardarProductoModelo;
