import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:3000/api"

});

// Obtener usuarios
export async function obtenerUsuarios() {

    const response = await API.get("/admin/usuarios");

    return response.data;

}

// Actualizar usuario
export async function actualizarUsuario(idUsuario, usuario) {

    const response = await API.put(

        `/admin/usuarios/${idUsuario}`,

        usuario

    );

    return response.data;

}

// Eliminar usuario
export async function eliminarUsuario(idUsuario) {

    const response = await API.delete(

        `/admin/usuarios/${idUsuario}`

    );

    return response.data;

}