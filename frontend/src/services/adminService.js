import axios from "axios";

import API from "./api";

export async function obtenerVideojuegosAdmin() {

    const response = await API.get("/videojuegos");

    return response.data;

}