import axios from "axios";

import API from "./api";

export async function obtenerVideojuegos() {

    const response = await API.get("/videojuegos");

    return response.data;

}