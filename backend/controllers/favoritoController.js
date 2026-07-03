const Favorito = require("../models/Favorito");
const VideoJuego = require("../models/VideoJuego");

async function agregarFavorito(req, res) {

    try {

        const { idUsuario, juego } = req.body;

        console.log("Juego recibido:", juego);

        // Obtiene el ID de Oracle o crea el videojuego si aún no existe
        const idVideojuego = await VideoJuego.obtenerOCrearVideojuego(juego);

        console.log("ID Oracle:", idVideojuego);

        await Favorito.agregarFavorito(
            idUsuario,
            idVideojuego
        );

        res.status(201).json({
            mensaje: "Favorito agregado correctamente"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al agregar favorito"
        });

    }

}

async function obtenerFavoritos(req, res) {

    try {

        const { idUsuario } = req.params;

        const favoritos = await Favorito.obtenerFavoritosPorUsuario(idUsuario);

        res.json(favoritos);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener favoritos"
        });

    }

}

async function eliminarFavorito(req, res) {

    try {

        const { idFavorito } = req.params;

        await Favorito.eliminarFavorito(idFavorito);

        res.json({
            mensaje: "Favorito eliminado"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al eliminar favorito"
        });

    }

}

module.exports = {

    agregarFavorito,
    obtenerFavoritos,
    eliminarFavorito

};