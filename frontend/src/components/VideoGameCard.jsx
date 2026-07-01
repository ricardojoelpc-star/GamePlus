function VideoGameCard({ juego }) {

    return (

        <div className="game-card">

            <img
                src={juego.imagen}
                alt={juego.titulo}
            />

            <h3>{juego.titulo}</h3>

            <p>{juego.descripcion}</p>

        </div>

    );

}

export default VideoGameCard;