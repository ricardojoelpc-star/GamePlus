import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("usuario"))
    );

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    function login(usuarioData, tokenData) {

        setUsuario(usuarioData);
        setToken(tokenData);

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuarioData)
        );

        localStorage.setItem(
            "token",
            tokenData
        );

    }

    function logout() {

        setUsuario(null);
        setToken(null);

        localStorage.removeItem("usuario");
        localStorage.removeItem("token");

    }

    return (

        <AuthContext.Provider
            value={{
                usuario,
                token,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}