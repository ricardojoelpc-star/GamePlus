const Categoria = require("../models/Categoria");

// Obtener todas las categorías
async function obtenerCategorias(req, res) {

    try {

        const categorias = await Categoria.obtenerCategorias();

        res.json(categorias);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al obtener categorías"

        });

    }

}

// Crear categoría
async function crearCategoria(req, res) {

    try {

        const { nombre } = req.body;

        await Categoria.crearCategoria(nombre);

        res.status(201).json({

            mensaje: "Categoría creada correctamente"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al crear la categoría"

        });

    }

}

// Actualizar categoría
async function actualizarCategoria(req, res) {

    try {

        const { idCategoria } = req.params;

        const { nombre } = req.body;

        await Categoria.actualizarCategoria(

            idCategoria,

            nombre

        );

        res.json({

            mensaje: "Categoría actualizada correctamente"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al actualizar la categoría"

        });

    }

}

// Eliminar categoría
async function eliminarCategoria(req, res) {

    try {

        const { idCategoria } = req.params;

        await Categoria.eliminarCategoria(idCategoria);

        res.json({

            mensaje: "Categoría eliminada correctamente"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al eliminar la categoría"

        });

    }

}

module.exports = {

    obtenerCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria

};