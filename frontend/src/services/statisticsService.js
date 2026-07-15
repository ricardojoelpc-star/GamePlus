import axios from "axios";

import API from "./api";

export async function obtenerEstadisticas() {

    const response = await API.get("/estadisticas");

    return response.data;

}