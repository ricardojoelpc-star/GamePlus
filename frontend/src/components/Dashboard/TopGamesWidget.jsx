import { useTranslation } from "react-i18next";

function TopGamesWidget({ biblioteca }) {

    const { t } = useTranslation();

    if (!biblioteca || biblioteca.length === 0) {

        return (

            <div className="dashboard-card">

                <h2>

                    🏆 {t("dashboard.topGames")}

                </h2>

                <p>

                    {t("dashboard.noGames")}

                </p>

            </div>

        );

    }

    const topGames = [...biblioteca]

        .sort(

            (a, b) =>

                b.playtime_forever -

                a.playtime_forever

        )

        .slice(0, 5);

    return (

        <div className="dashboard-card">

            <h2>

                🏆 {t("dashboard.topGames")}

            </h2>

            <div className="top-games-widget">

                {

                    topGames.map((juego) => (

                        <div

                            key={juego.appid}

                            className="top-game-card"

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

                                } {t("dashboard.hours")}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TopGamesWidget;