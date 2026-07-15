function RecentGames({ recientes }) {

    if (!recientes.length) {

        return null;

    }

    return (

        <div className="steam-section">

            <h3>

                🕒 Jugados recientemente

            </h3>

            <div className="recent-games">

                {

                    recientes.map((juego) => (

                        <div

                            key={juego.appid}

                            className="recent-game"

                        >

                            <img

                                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${juego.appid}/header.jpg`}

                                alt={juego.name}

                            />

                            <h4>

                                {juego.name}

                            </h4>

                            <p>

                                {

                                    Math.floor(

                                        juego.playtime_2weeks /

                                        60

                                    )

                                }

                                h últimas 2 semanas

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default RecentGames;