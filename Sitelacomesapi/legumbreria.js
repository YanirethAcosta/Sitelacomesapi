const express = require('express');
const cors = require('cors');
const app = express();
const ConsultaProductoRuta = require('./vista/ConsultaProductosRutas'); 

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/legumbreria', ConsultaProductoRuta);//pruductos-usuario

// Ruta base o principal
app.get('/', (req, res) => {
    res.send('API de Si Te la Comes funcionando');
});

// Iniciar el servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});