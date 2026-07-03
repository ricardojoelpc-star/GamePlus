const oracledb = require("oracledb");
const getConnection = require("../config/database");

// Agregar favorito
async function agregarFavorito(idUsuario, idVideojuego) {

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            INSERT INTO FAVORITOS
            (ID_USUARIO, ID_VIDEOJUEGO)
            VALUES
            (:idUsuario, :idVideojuego)
            `,

            {
                idUsuario,
                idVideojuego
            },

            {
                autoCommit: true
            }

        );

    } finally {

        await connection.close();

    }

}

// Obtener favoritos de un usuario
async function obtenerFavoritosPorUsuario(idUsuario) {

    const connection = await getConnection();

    try {

        const result = await connection.execute(

            `
            SELECT
                F.ID_FAVORITO,
                V.ID_VIDEOJUEGO,
                V.TITULO,
                V.DESCRIPCION,
                V.IMAGEN
            FROM FAVORITOS F
            INNER JOIN VIDEOJUEGOS V
                ON F.ID_VIDEOJUEGO = V.ID_VIDEOJUEGO
            WHERE F.ID_USUARIO = :idUsuario
            `,

            { idUsuario },

            {
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );

        return result.rows;

    } finally {

        await connection.close();

    }

}

// Eliminar favorito
async function eliminarFavorito(idFavorito) {

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            DELETE FROM FAVORITOS
            WHERE ID_FAVORITO = :idFavorito
            `,

            { idFavorito },

            {
                autoCommit: true
            }

        );

    } finally {

        await connection.close();

    }

}

module.exports = {

    agregarFavorito,
    obtenerFavoritosPorUsuario,
    eliminarFavorito

};