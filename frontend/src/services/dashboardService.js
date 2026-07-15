import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:3000/api"

});

export async function obtenerEstadisticas(idUsuario) {

    const response = await API.get(

        `/dashboard/${idUsuario}`

    );

    return response.data;

}