import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:3000/api"

});

export async function obtenerEstadisticas() {

    const response = await API.get("/estadisticas");

    return response.data;

}