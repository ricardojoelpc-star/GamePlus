function TopGames({ biblioteca }) {

    if (!biblioteca.length) {

        return null;

    }

    const topGames = [...biblioteca]

        .sort(

            (a, b) =>

                b.playtime_forever -

                a.playtime_forever

        )

        .slice(0, 5);

    return (

        <div className="steam-section">

            <h3>

                🏆 Top 5 juegos más jugados

            </h3>

            <div className="top-games">

                {

                    topGames.map((juego) => (

                        <div

                            key={juego.appid}

                            className="top-game"

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

                                        juego.playtime_forever / 60

                                    )

                                }

                                h

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TopGames;