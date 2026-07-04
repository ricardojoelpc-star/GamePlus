import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import { useAuth } from "../contexts/AuthContext";

import LanguageSelector from "../components/LanguageSelector";

import {

    obtenerPerfil,
    actualizarPerfil,
    cambiarPassword

} from "../services/profileService";

import "../styles/Profile.css";

function Profile() {

    const { usuario } = useAuth();

    const { t } = useTranslation();

    const [perfil, setPerfil] = useState({

        nombre: "",
        correo: "",
        idioma: "",
        tema: "",
        modoOscuro: 0

    });

    const [password, setPassword] = useState("");

    useEffect(() => {

        if (usuario) {

            cargarPerfil();

        }

    }, [usuario]);

    async function cargarPerfil() {

        try {

            const datos = await obtenerPerfil(usuario.id);

            setPerfil({

                nombre: datos.NOMBRE,
                correo: datos.CORREO,
                idioma: datos.IDIOMA,
                tema: datos.TEMA,
                modoOscuro: datos.MODO_OSCURO

            });

        }

        catch (error) {

            console.error(error);

        }

    }

    function cambiar(e) {

        const { name, value } = e.target;

        setPerfil({

            ...perfil,

            [name]: value

        });

    }

    async function guardar(e) {

        e.preventDefault();

        try {

            await actualizarPerfil(

                usuario.id,

                perfil

            );

            if (password.trim() !== "") {

                await cambiarPassword(

                    usuario.id,

                    password

                );

                setPassword("");

            }

            alert(

                t("profile.success")

            );

        }

        catch (error) {

            console.error(error);

            alert(

                t("profile.error")

            );

        }

    }

    return (

        <MainLayout>

            <div className="profile">

                <h1>

                    👤 {t("profile.title")}

                </h1>

                <form onSubmit={guardar}>

                    <label>

                        {t("profile.name")}

                    </label>

                    <input

                        type="text"
                        name="nombre"
                        value={perfil.nombre}
                        onChange={cambiar}

                    />

                    <label>

                        {t("profile.email")}

                    </label>

                    <input

                        type="email"
                        name="correo"
                        value={perfil.correo}
                        onChange={cambiar}

                    />

                    <label>

                        {t("profile.language")}

                    </label>

                    <LanguageSelector />

                    <label>

                        {t("profile.theme")}

                    </label>

                    <input

                        type="text"
                        name="tema"
                        value={perfil.tema}
                        onChange={cambiar}

                    />

                    <label>

                        {t("profile.password")}

                    </label>

                    <input

                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t("profile.passwordPlaceholder")}

                    />

                    <button

                        className="btn-primary"
                        type="submit"

                    >

                        {t("profile.save")}

                    </button>

                </form>

            </div>

        </MainLayout>

    );

}

export default Profile;