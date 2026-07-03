import { useEffect, useState } from "react";

import {
    obtenerFavoritos,
    eliminarFavorito
} from "../services/favoriteService";

import { useAuth } from "../contexts/AuthContext";
import VideoGameCard from "../components/VideoGameCard";

function Favorites() {

    const [favoritos, setFavoritos] = useState([]);

    const { usuario } = useAuth();

    async function cargarFavoritos() {

        try {

            const datos = await obtenerFavoritos(usuario.id);

            setFavoritos(datos);

        } catch (error) {

            console.error(error);

        }

    }

    async function eliminar(idFavorito) {

        try {

            await eliminarFavorito(idFavorito);

            await cargarFavoritos();

            alert("Favorito eliminado correctamente.");

        } catch (error) {

            console.error(error);

            alert("No fue posible eliminar el favorito.");

        }

    }

    useEffect(() => {

        if (usuario) {

            cargarFavoritos();

        }

    }, [usuario]);

    return (

        <div style={{ padding: "30px" }}>

            <h1>⭐ Mis Favoritos</h1>

            <p>Total de favoritos: {favoritos.length}</p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >

                {favoritos.map((juego) => (

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
                        onEliminar={() => eliminar(juego.ID_FAVORITO)}
                    />

                ))}

            </div>

        </div>

    );

}

export default Favorites;