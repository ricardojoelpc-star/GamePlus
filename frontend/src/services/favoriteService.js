import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api"
});

export async function agregarFavorito(idUsuario, idVideojuego){

    return await API.post("/favoritos",{
        idUsuario,
        idVideojuego
    });

}