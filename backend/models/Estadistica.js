const oracledb = require("oracledb");
const getConnection = require("../config/database");

async function obtenerEstadisticas() {

    const connection = await getConnection();

    try {

        const usuarios = await connection.execute(
            `SELECT COUNT(*) TOTAL FROM USUARIOS`
        );

        const categorias = await connection.execute(
            `SELECT COUNT(*) TOTAL FROM CATEGORIAS`
        );

        const videojuegos = await connection.execute(
            `SELECT COUNT(*) TOTAL FROM VIDEOJUEGOS`
        );

        const favoritos = await connection.execute(
            `SELECT COUNT(*) TOTAL FROM FAVORITOS`
        );

        return {

            usuarios: usuarios.rows[0][0],

            categorias: categorias.rows[0][0],

            videojuegos: videojuegos.rows[0][0],

            favoritos: favoritos.rows[0][0]

        };

    } finally {

        await connection.close();

    }

}

module.exports = {

    obtenerEstadisticas

};