import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api"
});

export async function obtenerVideojuegos() {

    const response = await API.get("/videojuegos");

    return response.data;

}
