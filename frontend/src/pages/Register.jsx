import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/Register.css";
import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const { t } = useTranslation();

    const [formulario, setFormulario] = useState({

        nombre: "",
        correo: "",
        password: "",
        confirmarPassword: ""

    });

    const [mostrarPassword, setMostrarPassword] = useState(false);

    function cambiar(e) {

        const { name, value } = e.target;

        setFormulario({

            ...formulario,

            [name]: value

        });

    }

    async function registrar(e) {

        e.preventDefault();

        if (formulario.password !== formulario.confirmarPassword) {

            alert(t("register.passwordMismatch"));

            return;

        }

        try {

            await register({

                nombre: formulario.nombre,
                correo: formulario.correo,
                password: formulario.password

            });

            alert(t("register.success"));

            navigate("/");

        }

        catch (error) {

            console.error(error);

            alert(t("register.error"));

        }

    }

    return (

        <div className="register-container">

            <form
                className="register-card"
                onSubmit={registrar}
            >

                <h1>

                    🎮 GAMEPLUS

                </h1>

                <h2>

                    {t("register.title")}

                </h2>

                <p>

                    {t("register.subtitle")}

                </p>

                <input
                    type="text"
                    name="nombre"
                    placeholder={t("register.name")}
                    value={formulario.nombre}
                    onChange={cambiar}
                    required
                />

                <input
                    type="email"
                    name="correo"
                    placeholder={t("register.email")}
                    value={formulario.correo}
                    onChange={cambiar}
                    required
                />

                <input
                    type={mostrarPassword ? "text" : "password"}
                    name="password"
                    placeholder={t("register.password")}
                    value={formulario.password}
                    onChange={cambiar}
                    required
                />

                <input
                    type={mostrarPassword ? "text" : "password"}
                    name="confirmarPassword"
                    placeholder={t("register.confirmPassword")}
                    value={formulario.confirmarPassword}
                    onChange={cambiar}
                    required
                />

                <label className="checkbox">

                    <input
                        type="checkbox"
                        checked={mostrarPassword}
                        onChange={() =>
                            setMostrarPassword(!mostrarPassword)
                        }
                    />

                    {t("register.showPassword")}

                </label>

                <button type="submit">

                    {t("register.button")}

                </button>

                <p>

                    {t("register.alreadyAccount")}{" "}

                    <Link to="/">

                        {t("register.login")}

                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Register;