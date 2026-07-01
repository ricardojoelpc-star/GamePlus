const getConnection = require("../config/database");

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

module.exports = {

    agregarFavorito

};