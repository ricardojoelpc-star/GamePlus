import "../styles/SteamCard.css";

function SteamCard({

    perfil,
    biblioteca

}) {

    if (!perfil) {

        return null;

    }

    const juegoMasJugado = biblioteca.length

        ? biblioteca.reduce(

            (a, b) =>

                a.playtime_forever >

                b.playtime_forever

                    ? a

                    : b

        )

        : null;

    const horasTotales = biblioteca.reduce(

        (total, juego) =>

            total + juego.playtime_forever,

        0

    );

    return (

        <div className="steam-card">

            <div className="steam-header">

                <img

                    src={perfil.avatarfull}

                    alt="Avatar"

                />

                <div>

                    <h2>

                        {perfil.personaname}

                    </h2>

                    <p>

                        Steam

                    </p>

                </div>

            </div>

            <div className="steam-stats">

                <div>

                    <h3>

                        Biblioteca

                    </h3>

                    <span>

                        {biblioteca.length}

                    </span>

                </div>

                <div>

                    <h3>

                        Horas jugadas

                    </h3>

                    <span>

                        {Math.floor(

                            horasTotales / 60

                        )}

                    </span>

                </div>

            </div>

            {

                juegoMasJugado && (

                    <div className="top-game">

                        <h3>

                            Juego más jugado

                        </h3>

                        <p>

                            {

                                juegoMasJugado.name

                            }

                        </p>

                        <span>

                            {

                                Math.floor(

                                    juegoMasJugado.playtime_forever /

                                    60

                                )

                            }

                            h

                        </span>

                    </div>

                )

            }

        </div>

    );

}

export default SteamCard;