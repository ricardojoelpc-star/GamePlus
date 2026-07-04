import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:3000/api"

});

export async function obtenerVideojuegosAdmin() {

    const response = await API.get("/videojuegos");

    return response.data;

}