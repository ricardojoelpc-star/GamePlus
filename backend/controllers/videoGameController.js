const gameService = require("../services/gameService");

async function obtenerVideojuegos(req, res) {

    try {

        const juegos = await gameService.obtenerVideojuegos();

        res.json(juegos);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener videojuegos"
        });

    }

}

module.exports = {

    obtenerVideojuegos

};