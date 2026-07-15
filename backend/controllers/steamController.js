const Steam = require("../services/steamService");

async function obtenerPerfil(req, res) {

    try {

        const { steamId } = req.params;

        const perfil = await Steam.obtenerPerfil(

            steamId

        );

        res.json(perfil);

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "No fue posible obtener el perfil de Steam."

        });

    }

}

async function obtenerBiblioteca(req, res) {

    try {

        const { steamId } = req.params;

        const juegos = await Steam.obtenerBiblioteca(

            steamId

        );

        res.json(juegos);

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "No fue posible obtener la biblioteca."

        });

    }

}

async function vincularCuenta(req, res) {

    try {

        const { idUsuario } = req.params;

        const { steamId } = req.body;

        const perfil = await Steam.obtenerPerfil(steamId);

        if (!perfil) {

            return res.status(404).json({

                mensaje: "Cuenta de Steam no encontrada."

            });

        }

        await Steam.guardarCuentaSteam(

            idUsuario,

            perfil

        );

        res.json({

            mensaje: "Cuenta vinculada correctamente.",

            perfil

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "No fue posible vincular la cuenta."

        });

    }

}

async function obtenerSteamUsuario(req, res) {

    try {

        const { idUsuario } = req.params;

        const datos = await Steam.obtenerSteamPorUsuario(

            idUsuario

        );

        if (!datos) {

            return res.status(404).json({

                mensaje: "El usuario no tiene una cuenta Steam vinculada."

            });

        }

        res.json(datos);

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "No fue posible obtener la información de Steam."

        });

    }

}

async function desvincularCuenta(req, res) {

    try {

        const { idUsuario } = req.params;

        await Steam.desvincularCuenta(idUsuario);

        res.json({

            mensaje: "Cuenta desvinculada correctamente."

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "No fue posible desvincular la cuenta."

        });

    }

}

module.exports = {

    obtenerPerfil,
    obtenerBiblioteca,
    vincularCuenta,
    obtenerSteamUsuario,
    desvincularCuenta

};