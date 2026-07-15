const Estadistica = require("../models/Estadistica");

async function obtenerEstadisticas(req, res) {

    try {

        const estadisticas = await Estadistica.obtenerEstadisticas();

        res.json(estadisticas);

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al obtener las estadísticas"

        });

    }

}

module.exports = {

    obtenerEstadisticas

};