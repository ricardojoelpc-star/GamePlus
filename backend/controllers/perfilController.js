const Perfil = require("../models/Perfil");
const steamService = require("../services/steamService");

// Obtener perfil
async function obtenerPerfil(req, res) {

    try {

        const { idUsuario } = req.params;

        const perfil = await Perfil.obtenerPerfil(idUsuario);

        if (!perfil) {

            return res.status(404).json({

                mensaje: "Usuario no encontrado"

            });

        }

        res.json(perfil);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al obtener el perfil"

        });

    }

}

// Actualizar perfil
async function actualizarPerfil(req, res) {

    try {

        const { idUsuario } = req.params;

        await Perfil.actualizarPerfil(

            idUsuario,

            req.body

        );

        res.json({

            mensaje: "Perfil actualizado correctamente"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al actualizar el perfil"

        });

    }

}

async function cambiarPassword(req, res) {

    try {

        const { idUsuario } = req.params;

        const { password } = req.body;

        await Perfil.cambiarPassword(

            idUsuario,

            password

        );

        res.json({

            mensaje: "Contraseña actualizada correctamente"

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al actualizar la contraseña"

        });

    }

}

async function vincularSteam(req, res) {

    try {

        const { idUsuario } = req.params;

        const { steamId } = req.body;

        const perfilSteam = await steamService.obtenerPerfil(

            steamId

        );

        if (!perfilSteam) {

            return res.status(404).json({

                mensaje: "No se encontró el perfil de Steam."

            });

        }

        await steamService.guardarCuentaSteam(

            idUsuario,

            perfilSteam

        );

        res.json({

            mensaje: "Cuenta de Steam vinculada correctamente.",

            perfil: perfilSteam

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al vincular la cuenta de Steam."

        });

    }

}

module.exports = {

    obtenerPerfil,
    actualizarPerfil,
    cambiarPassword,
    vincularSteam

};