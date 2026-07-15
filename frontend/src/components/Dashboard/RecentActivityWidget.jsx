import { useTranslation } from "react-i18next";

function RecentActivityWidget({ recientes }) {

    const { t } = useTranslation();

    if (!recientes || recientes.length === 0) {

        return (

            <div className="dashboard-card">

                <h2>

                    🕒 {t("dashboard.recentActivity")}

                </h2>

                <p>

                    {t("dashboard.noRecentActivity")}

                </p>

            </div>

        );

    }

    return (

        <div className="dashboard-card">

            <h2>

                🕒 {t("dashboard.recentActivity")}

            </h2>

            <div className="recent-activity">

                {

                    recientes.map((juego) => (

                        <div

                            key={juego.appid}

                            className="recent-activity-card"

                        >

                            <img

                                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${juego.appid}/header.jpg`}

                                alt={juego.name}

                            />

                            <div>

                                <h4>

                                    {juego.name}

                                </h4>

                                <p>

                                    {

                                        Math.floor(

                                            juego.playtime_2weeks / 60

                                        )

                                    }{" "}

                                    {t("dashboard.lastTwoWeeks")}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default RecentActivityWidget;