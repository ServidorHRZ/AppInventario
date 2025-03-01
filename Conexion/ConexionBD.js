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
        const inventario = await pool.request().query('SELECT * FROM inventario');
        const vista_mproducto_mcodbarra = await pool.request().query('SELECT * FROM vista_mproducto_mcodbarra');
        return {
            inventario: inventario.recordset,
            vista_mproducto_mcodbarra: vista_mproducto_mcodbarra.recordset
        }
    } catch (err) {
        console.error('Error al conectar al la BD', err);
    }
}

module.exports = obtenerDatos;