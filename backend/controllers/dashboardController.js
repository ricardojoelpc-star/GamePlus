const Dashboard = require("../models/Dashboard");

async function obtenerEstadisticas(req, res) {

    try {

        const { idUsuario } = req.params;

        const estadisticas = await Dashboard.obtenerEstadisticas(idUsuario);

        res.json(estadisticas);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al obtener estadísticas"

        });

    }

}

module.exports = {

    obtenerEstadisticas

};