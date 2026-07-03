const oracledb = require("oracledb");
const getConnection = require("../config/database");

async function buscarPorApiId(apiId) {

    const connection = await getConnection();

    try {

        const result = await connection.execute(

            `
            SELECT *
            FROM VIDEOJUEGOS
            WHERE API_ID = :apiId
            `,

            { apiId },

            {
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );

        return result.rows[0];

    } finally {

        await connection.close();

    }

}

async function crearVideojuego(juego) {

    const connection = await getConnection();

    try {

        const result = await connection.execute(

            `
            INSERT INTO VIDEOJUEGOS
            (
                API_ID,
                TITULO,
                DESCRIPCION,
                FECHA_LANZAMIENTO,
                IMAGEN,
                ID_CATEGORIA
            )
            VALUES
            (
                :apiId,
                :titulo,
                :descripcion,
                :fecha,
                :imagen,
                :categoria
            )
            RETURNING ID_VIDEOJUEGO INTO :idVideojuego
            `,

            {
                apiId: juego.id,
                titulo: juego.title,
                descripcion: juego.short_description,
                fecha: new Date(juego.release_date),
                imagen: juego.thumbnail,
                categoria: 1,

                idVideojuego: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.NUMBER
                }

            },

            {
                autoCommit: true
            }

        );

        return result.outBinds.idVideojuego[0];

    } finally {

        await connection.close();

    }

}

async function obtenerOCrearVideojuego(juego) {

    const existente = await buscarPorApiId(juego.id);

    if (existente) {

        return existente.ID_VIDEOJUEGO;

    }

    return await crearVideojuego(juego);

}

module.exports = {

    buscarPorApiId,
    crearVideojuego,
    obtenerOCrearVideojuego

};