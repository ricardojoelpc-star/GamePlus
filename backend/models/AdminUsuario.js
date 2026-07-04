const oracledb = require("oracledb");
const getConnection = require("../config/database");

// Obtener todos los usuarios
async function obtenerUsuarios() {

    const connection = await getConnection();

    try {

        const result = await connection.execute(

            `
            SELECT
                ID_USUARIO,
                NOMBRE,
                CORREO,
                IDIOMA,
                TEMA,
                MODO_OSCURO
            FROM USUARIOS
            ORDER BY ID_USUARIO
            `,

            [],

            {
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );

        return result.rows;

    } finally {

        await connection.close();

    }

}

// Actualizar usuario
async function actualizarUsuario(idUsuario, usuario) {

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            UPDATE USUARIOS
            SET
                NOMBRE = :nombre,
                CORREO = :correo,
                IDIOMA = :idioma,
                TEMA = :tema,
                MODO_OSCURO = :modoOscuro
            WHERE ID_USUARIO = :idUsuario
            `,

            {
                idUsuario,
                nombre: usuario.nombre,
                correo: usuario.correo,
                idioma: usuario.idioma,
                tema: usuario.tema,
                modoOscuro: usuario.modoOscuro
            },

            {
                autoCommit: true
            }

        );

    } finally {

        await connection.close();

    }

}

// Eliminar usuario
async function eliminarUsuario(idUsuario) {

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            DELETE FROM USUARIOS
            WHERE ID_USUARIO = :idUsuario
            `,

            {
                idUsuario
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

    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario

};