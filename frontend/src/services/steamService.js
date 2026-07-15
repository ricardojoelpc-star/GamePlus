import axios from "axios";

import API from "./api";

export async function obtenerPerfilSteam(steamId) {

    const response = await API.get(

        `/steam/profile/${steamId}`

    );

    return response.data;

}

export async function obtenerBibliotecaSteam(steamId) {

    const response = await API.get(

        `/steam/library/${steamId}`

    );

    return response.data;

}



export async function obtenerSteamUsuario(idUsuario) {

    const response = await API.get(

        `/steam/user/${idUsuario}`

    );

    return response.data;

}

export async function desvincularSteam(idUsuario) {

    const response = await API.delete(

        `/steam/unlink/${idUsuario}`

    );

    return response.data;

}