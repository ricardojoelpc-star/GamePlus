import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    async function iniciarSesion(e) {

        e.preventDefault();

        try {

            const respuesta = await login(correo, password);

            localStorage.setItem("token", respuesta.token);

            localStorage.setItem(
                "usuario",
                JSON.stringify(respuesta.usuario)
            );

            alert("Bienvenido " + respuesta.usuario.nombre);

            navigate("/dashboard");

        } catch (error) {

            alert("Correo o contraseña incorrectos");

            console.error(error);

        }

    }

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>GAMEPLUS</h1>

                <h2>Bienvenido nuevamente</h2>

                <form onSubmit={iniciarSesion}>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">

                        Iniciar sesión

                    </button>

                </form>

                <p>

                    ¿No tienes cuenta?

                    <Link to="/register">

                        Registrarse

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;