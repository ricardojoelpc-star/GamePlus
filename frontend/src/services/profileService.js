import axios from "axios";

import API from "./api";

// Obtener perfil
export async function obtenerPerfil(idUsuario) {

    const response = await API.get(

        `/perfil/${idUsuario}`

    );

    return response.data;

}

// Actualizar perfil
export async function actualizarPerfil(idUsuario, datos) {

    const response = await API.put(

        `/perfil/${idUsuario}`,

        datos

    );

    return response.data;
}

export async function cambiarPassword(idUsuario, password) {

    const response = await API.put(

        `/perfil/${idUsuario}/password`,

        {

            password

        }

    );

    return response.data;

}

export async function vincularSteam(

    idUsuario,

    steamId

) {

    const response = await API.post(

        `/perfil/${idUsuario}/steam`,

        {

            steamId

        }

    );

    return response.data;

}