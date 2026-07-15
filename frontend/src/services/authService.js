import API from "./api";

export async function login(correo, password) {

    const response = await API.post(

        "/auth/login",

        {

            correo,
            password

        }

    );

    return response.data;

}

export async function register(usuario) {

    const response = await API.post(

        "/auth/register",

        usuario

    );

    return response.data;

}