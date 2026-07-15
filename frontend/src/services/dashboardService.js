import axios from "axios";

import API from "./api";


export async function obtenerEstadisticas(idUsuario) {

    const response = await API.get(

        `/dashboard/${idUsuario}`

    );

    return response.data;

}