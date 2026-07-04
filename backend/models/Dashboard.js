const oracledb = require("oracledb");
const getConnection = require("../config/database");

async function obtenerEstadisticas(idUsuario) {

    const connection = await getConnection();

    try {

        // Total de favoritos del usuario
        const favoritos = await connection.execute(

            `
            SELECT COUNT(*) TOTAL
            FROM FAVORITOS
            WHERE ID_USUARIO = :idUsuario
            `,

            { idUsuario },

            {
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );

        // Total de videojuegos registrados
        const videojuegos = await connection.execute(

            `
            SELECT COUNT(*) TOTAL
            FROM VIDEOJUEGOS
            `,

            [],

            {
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );

        // Total de categorías
        const categorias = await connection.execute(

            `
            SELECT COUNT(*) TOTAL
            FROM CATEGORIAS
            `,

            [],

            {
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );

        return {

            favoritos: favoritos.rows[0].TOTAL,

            videojuegos: videojuegos.rows[0].TOTAL,

            categorias: categorias.rows[0].TOTAL

        };

    } finally {

        await connection.close();

    }

}

module.exports = {

    obtenerEstadisticas

};