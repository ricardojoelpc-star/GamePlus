const oracledb = require("oracledb");
const getConnection = require("../config/database");

// Obtener todas las categorías
async function obtenerCategorias() {

    const connection = await getConnection();

    try {

        const result = await connection.execute(

            `
            SELECT
                ID_CATEGORIA,
                NOMBRE
            FROM CATEGORIAS
            ORDER BY ID_CATEGORIA
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

// Crear categoría
async function crearCategoria(nombre) {

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            INSERT INTO CATEGORIAS
            (
                NOMBRE
            )
            VALUES
            (
                :nombre
            )
            `,

            {
                nombre
            },

            {
                autoCommit: true
            }

        );

    } finally {

        await connection.close();

    }

}

// Actualizar categoría
async function actualizarCategoria(idCategoria, nombre) {

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            UPDATE CATEGORIAS
            SET NOMBRE = :nombre
            WHERE ID_CATEGORIA = :idCategoria
            `,

            {
                idCategoria,
                nombre
            },

            {
                autoCommit: true
            }

        );

    } finally {

        await connection.close();

    }

}

// Eliminar categoría
async function eliminarCategoria(idCategoria) {

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            DELETE FROM CATEGORIAS
            WHERE ID_CATEGORIA = :idCategoria
            `,

            {
                idCategoria
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

    obtenerCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria

};