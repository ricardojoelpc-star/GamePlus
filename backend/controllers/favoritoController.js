const Favorito = require("../models/Favorito");

async function agregarFavorito(req, res) {

    try {

        const { idUsuario, idVideojuego } = req.body;

        await Favorito.agregarFavorito(
            idUsuario,
            idVideojuego
        );

        res.status(201).json({

            mensaje: "Favorito agregado"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error"

        });

    }

}

module.exports = {

    agregarFavorito

};