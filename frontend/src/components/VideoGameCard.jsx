import { useTranslation } from "react-i18next";

import "../styles/VideoGameCard.css";

import { agregarFavorito } from "../services/favoriteService";
import { useAuth } from "../contexts/AuthContext";

function VideoGameCard({

    juego,
    mostrarBotonFavorito = true,
    onEliminar

}) {

    const { usuario } = useAuth();

    const { t } = useTranslation();

    async function guardarFavorito() {

        try {

            await agregarFavorito(

                usuario.id,

                juego

            );

            alert(

                t("favorites.addSuccess")

            );

        }

        catch (error) {

            console.error(error);

            alert(

                t("favorites.addError")

            );

        }

    }

    return (

        <div className="game-card">

            <img

                src={juego.thumbnail}

                alt={juego.title}

            />

            <h3>

                {juego.title}

            </h3>

            <p>

                <strong>

                    {t("games.genre")}:

                </strong>{" "}

                {juego.genre}

            </p>

            <p>

                <strong>

                    {t("games.platform")}:

                </strong>{" "}

                {juego.platform}

            </p>

            {mostrarBotonFavorito ? (

                <button onClick={guardarFavorito}>

                    ⭐ {t("favorites.add")}

                </button>

            ) : (

                <button onClick={onEliminar}>

                    🗑 {t("favorites.remove")}

                </button>

            )}

        </div>

    );

}

export default VideoGameCard;