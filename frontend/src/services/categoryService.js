import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:3000/api"

});

// Obtener categorías
export async function obtenerCategorias() {

    const response = await API.get("/categorias");

    return response.data;

}

// Crear categoría
export async function crearCategoria(nombre) {

    const response = await API.post("/categorias", {

        nombre

    });

    return response.data;

}

// Actualizar categoría
export async function actualizarCategoria(idCategoria, nombre) {

    const response = await API.put(

        `/categorias/${idCategoria}`,

        {

            nombre

        }

    );

    return response.data;

}

// Eliminar categoría
export async function eliminarCategoria(idCategoria) {

    const response = await API.delete(

        `/categorias/${idCategoria}`

    );

    return response.data;

}