const Usuario = require("../models/AdminUsuario");

// Obtener usuarios
async function obtenerUsuarios(req, res) {

    try {

        const usuarios = await Usuario.obtenerUsuarios();

        res.json(usuarios);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al obtener usuarios"

        });

    }

}

// Actualizar usuario
async function actualizarUsuario(req, res) {

    try {

        const { idUsuario } = req.params;

        await Usuario.actualizarUsuario(

            idUsuario,

            req.body

        );

        res.json({

            mensaje: "Usuario actualizado correctamente"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al actualizar usuario"

        });

    }

}

// Eliminar usuario
async function eliminarUsuario(req, res) {

    try {

        const { idUsuario } = req.params;

        await Usuario.eliminarUsuario(idUsuario);

        res.json({

            mensaje: "Usuario eliminado correctamente"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al eliminar usuario"

        });

    }

}

module.exports = {

    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario

};