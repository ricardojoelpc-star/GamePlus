const axios = require("axios");

const API = "https://www.freetogame.com/api";

async function obtenerVideojuegos() {

    const response = await axios.get(`${API}/games`);

    return response.data;

}

module.exports = {
    obtenerVideojuegos
};