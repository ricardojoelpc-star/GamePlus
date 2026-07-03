import "./../styles/VideoGameCard.css";
import { agregarFavorito } from "../services/favoriteService";
import { useAuth } from "../contexts/AuthContext";

function VideoGameCard({
    juego,
    mostrarBotonFavorito = true,
    onEliminar
}) {

    const { usuario } = useAuth();

    async function guardarFavorito() {

        try {

            await agregarFavorito(

                usuario.id,

                juego

            );

            alert("Favorito agregado correctamente.");

        } catch (error) {

            console.error(error);

            alert("No fue posible agregar el favorito.");

        }

    }

    return (

        <div className="game-card">

            <img
                src={juego.thumbnail}
                alt={juego.title}
            />

            <h3>{juego.title}</h3>

            <p>{juego.genre}</p>

            <p>{juego.platform}</p>

            {mostrarBotonFavorito ? (

                <button onClick={guardarFavorito}>
                    ⭐ Agregar a Favoritos
                </button>

            ) : (

                <button onClick={onEliminar}>
                    🗑 Eliminar de Favoritos
                </button>

            )}

        </div>

    );

}

export default VideoGameCard;