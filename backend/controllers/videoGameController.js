const rawgService = require("../services/rawgService");

async function obtenerVideojuegos(req, res) {

    try {

        const videojuegos = await rawgService.obtenerVideojuegos();

        res.json(videojuegos);

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