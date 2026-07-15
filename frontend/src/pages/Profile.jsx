import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

import LanguageSelector from "../components/LanguageSelector";
import ThemeSelector from "../components/ThemeSelector";

import { desvincularSteam } from "../services/steamService";

import {

    obtenerPerfil,
    actualizarPerfil,
    cambiarPassword,
    vincularSteam

} from "../services/profileService";

import "../styles/Profile.css";

function Profile() {

    const { usuario } = useAuth();

    const {

        color,
        theme,
        cargarPreferencias

    } = useTheme();

    const { t } = useTranslation();

    const [perfil, setPerfil] = useState({

        nombre: "",
        correo: "",
        idioma: "",
        tema: "",
        modoOscuro: 0,

        steamId: "",
        steamUsername: "",
        steamAvatar: ""

    });

    const [password, setPassword] = useState("");

    const [steamId, setSteamId] = useState("");

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
                modoOscuro: datos.MODO_OSCURO,

                steamId: datos.STEAM_ID,
                steamUsername: datos.STEAM_USERNAME,
                steamAvatar: datos.STEAM_AVATAR

            });

            cargarPreferencias({

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

            const datosActualizados = {

                ...perfil,

                tema: color,

                modoOscuro: theme === "dark" ? 1 : 0

            };

            await actualizarPerfil(

                usuario.id,

                datosActualizados

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

    async function conectarSteam() {

        if (!steamId.trim()) {

            alert(

                t("profile.enterSteamId")

            );

            return;

        }

        try {

            const respuesta = await vincularSteam(

                usuario.id,

                steamId

            );

            alert(

                respuesta.mensaje

            );

            cargarPerfil();

            setSteamId("");

        }

        catch (error) {

            console.error(error);

            alert(

                t("profile.steamLinkError")

            );

        }

    }

    async function handleDesvincularSteam() {

        try {

            await desvincularSteam(

                usuario.id

            );

            alert(

                t("dashboard.unlinkSuccess")

            );

            cargarPerfil();

        }

        catch (error) {

            console.error(error);

            alert(

                t("profile.steamUnlinkError")

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

                    <br />

                    <ThemeSelector />

                    <br />

                    <label>

                        {t("profile.password")}

                    </label>

                    <input

                        type="password"

                        value={password}

                        onChange={(e) =>

                            setPassword(e.target.value)

                        }

                        placeholder={

                            t("profile.passwordPlaceholder")

                        }

                    />

                    <hr />

                    <h3>

                        🎮 {t("profile.steamAccount")}

                    </h3>

                    <input

                        type="text"

                        placeholder={

                            t("profile.steamPlaceholder")

                        }

                        value={steamId}

                        onChange={(e) =>

                            setSteamId(e.target.value)

                        }

                    />

                    <div className="steam-buttons">

                        <button

                            type="button"

                            className="btn-steam"

                            onClick={conectarSteam}

                        >

                            🎮 {t("profile.linkSteam")}

                        </button>

                        <button

                            type="button"

                            className="btn-unlink-steam"

                            onClick={handleDesvincularSteam}

                        >

                            ❌ {t("dashboard.unlinkSteam")}

                        </button>

                    </div>

                    {

                        perfil.steamId && (

                            <div className="steam-info">

                                <h4>

                                    {t("profile.linkedAccount")}

                                </h4>

                                <img

                                    src={perfil.steamAvatar}

                                    alt={t("profile.steamAvatar")}

                                    width={80}

                                />

                                <p>

                                    <strong>

                                        {perfil.steamUsername}

                                    </strong>

                                </p>

                                <p>

                                    {t("dashboard.steamId")}:

                                    {" "}

                                    {perfil.steamId}

                                </p>

                            </div>

                        )

                    }

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