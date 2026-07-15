import axios from "axios";

import API from "./api";
// Agregar favorito
export async function agregarFavorito(idUsuario, juego) {

    const response = await API.post("/favoritos", {

        idUsuario,

        juego

    });

    return response.data;

}

// Obtener favoritos
export async function obtenerFavoritos(idUsuario) {

    const response = await API.get(`/favoritos/${idUsuario}`);

    return response.data;

}

// Eliminar favorito
export async function eliminarFavorito(idFavorito) {

    const response = await API.delete(`/favoritos/${idFavorito}`);

    return response.data;

}