const getConnection = require("./config/database");

async function testConnection() {
    try {
        const connection = await getConnection();
        console.log('Conexión a la base de datos exitosa');
        await connection.close();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

testConnection();