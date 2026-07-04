import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { login } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const auth = useAuth();

    const { t } = useTranslation();

    const [correo, setCorreo] = useState("");

    const [password, setPassword] = useState("");

    async function iniciarSesion(e) {

        e.preventDefault();

        try {

            const respuesta = await login(correo, password);

            auth.login(

                respuesta.usuario,

                respuesta.token

            );

            alert(

                `${t("dashboard.welcome")} ${respuesta.usuario.nombre}`

            );

            navigate("/dashboard");

        }

        catch (error) {

            alert(t("login.invalidCredentials"));

            console.error(error);

        }

    }

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>

                    GAMEPLUS

                </h1>

                <h2>

                    {t("login.welcome")}

                </h2>

                <form onSubmit={iniciarSesion}>

                    <input

                        type="email"

                        placeholder={t("login.email")}

                        value={correo}

                        onChange={(e) => setCorreo(e.target.value)}

                    />

                    <input

                        type="password"

                        placeholder={t("login.password")}

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                    />

                    <button type="submit">

                        {t("login.button")}

                    </button>

                </form>

                <p>

                    {t("login.noAccount")}{" "}

                    <Link to="/register">

                        {t("register.title")}

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;