const oracledb = require("oracledb");
const getConnection = require("../config/database");

async function obtenerPerfil(idUsuario) {

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
            WHERE ID_USUARIO = :idUsuario
            `,

            { idUsuario },

            {
                outFormat: oracledb.OUT_FORMAT_OBJECT
            }

        );

        return result.rows[0];

    } finally {

        await connection.close();

    }

}

async function actualizarPerfil(idUsuario, datos) {

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
                nombre: datos.nombre,
                correo: datos.correo,
                idioma: datos.idioma,
                tema: datos.tema,
                modoOscuro: datos.modoOscuro
            },

            {
                autoCommit: true
            }

        );

    } finally {

        await connection.close();

    }

}

const bcrypt = require("bcrypt");

async function cambiarPassword(idUsuario, passwordNueva) {

    const connection = await getConnection();

    try {

        const passwordHash = await bcrypt.hash(passwordNueva, 10);

        await connection.execute(

            `
            UPDATE USUARIOS
            SET PASSWORD = :password
            WHERE ID_USUARIO = :idUsuario
            `,

            {
                idUsuario,
                password: passwordHash
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

    obtenerPerfil,
    actualizarPerfil,
    cambiarPassword

};