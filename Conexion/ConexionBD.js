// Constante para definicion de conexion
const sql = require('mssql');

// CONSTANTE PARA CONFIG DE BASE DATA
const config ={
    user: 'sa',
    password: 'root',
    server: '192.168.1.156',
    database: 'LAMUNDIAL_LOCAL',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

async function obtenerDatos(){
    try {
        let pool = await sql.connect(config);
        let productos = await pool.request().query('SELECT * FROM inventario');
        return resultado.recordset;
    } catch (err) {
        alert.error('Error al conectar al la BD', err);
    }
}

module.exports = obtenerDatos;