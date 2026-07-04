import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import VideoGameCard from "../components/VideoGameCard";

import {
    obtenerFavoritos,
    eliminarFavorito
} from "../services/favoriteService";

import { useAuth } from "../contexts/AuthContext";

function Favorites() {

    const { t } = useTranslation();

    const [favoritos, setFavoritos] = useState([]);

    const { usuario } = useAuth();

    async function cargarFavoritos() {

        try {

            const datos = await obtenerFavoritos(usuario.id);

            setFavoritos(datos);

        }

        catch (error) {

            console.error(error);

        }

    }

    async function eliminar(idFavorito) {

        try {

            await eliminarFavorito(idFavorito);

            await cargarFavoritos();

            alert(

                t("favorites.removeSuccess")

            );

        }

        catch (error) {

            console.error(error);

            alert(

                t("favorites.removeError")

            );

        }

    }

    useEffect(() => {

        if (usuario) {

            cargarFavoritos();

        }

    }, [usuario]);

    return (

        <MainLayout>

            <div style={{ padding: "30px" }}>

                <h1>

                    ⭐ {t("favorites.title")}

                </h1>

                <p>

                    {t("favorites.total")} {favoritos.length}

                </p>

                {

                    favoritos.length === 0 && (

                        <p>

                            {t("favorites.empty")}

                        </p>

                    )

                }

                <div

                    style={{

                        display: "grid",

                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",

                        gap: "20px",

                        marginTop: "30px"

                    }}

                >

                    {

                        favoritos.map((juego) => (

                            <VideoGameCard

                                key={juego.ID_FAVORITO}

                                juego={{

                                    id: juego.ID_VIDEOJUEGO,

                                    title: juego.TITULO,

                                    thumbnail: juego.IMAGEN,

                                    genre: "Favorito",

                                    platform: "GAMEPLUS"

                                }}

                                mostrarBotonFavorito={false}

                                onEliminar={() =>

                                    eliminar(juego.ID_FAVORITO)

                                }

                            />

                        ))

                    }

                </div>

            </div>

        </MainLayout>

    );

}

export default Favorites;