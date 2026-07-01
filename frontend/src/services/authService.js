import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/auth"
});

export async function login(correo, password) {

    const response = await API.post("/login", {
        correo,
        password
    });

    return response.data;
}

export async function register(usuario) {

    const response = await API.post("/register", usuario);

    return response.data;
}