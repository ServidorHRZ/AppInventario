const express = require('express');
const obtenerDatos = require('./ConexionBD');

const app = express();

const port = '192.168.1.156';

// Ruta para obtener datos del inventario
// app.get('/inventario','', async (req, res) => {
//     const datos = await obtenerDatos();
//     res.json(datos);
// });

app.listen(port, () => {
    console.log('Servidor corriendo');
});


