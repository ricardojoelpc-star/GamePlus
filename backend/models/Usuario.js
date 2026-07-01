const getConnection = require("../config/database");

async function crearUsuario(usuario) {

    const connection = await getConnection();

    try {

        const sql = `
            INSERT INTO USUARIOS
            (NOMBRE, CORREO, PASSWORD, IDIOMA, TEMA, MODO_OSCURO)
            VALUES
            (:nombre, :correo, :password, :idioma, :tema, :modoOscuro)
        `;

        await connection.execute(
            sql,
            {
                nombre: usuario.nombre,
                correo: usuario.correo,
                password: usuario.password,
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

async function buscarPorCorreo(correo) {

    const connection = await getConnection();

    try {

        const result = await connection.execute(
            `SELECT *
             FROM USUARIOS
             WHERE CORREO = :correo`,
            { correo },
            { outFormat: require("oracledb").OUT_FORMAT_OBJECT }
        );

        return result.rows[0];

    } finally {

        await connection.close();

    }

}

module.exports = {
    crearUsuario,
    buscarPorCorreo
};