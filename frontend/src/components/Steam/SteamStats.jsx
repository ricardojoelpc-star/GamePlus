import { useTranslation } from "react-i18next";

function SteamStats({ biblioteca }) {

    const { t } = useTranslation();

    const horasTotales = biblioteca.reduce(

        (total, juego) =>

            total + juego.playtime_forever,

        0

    );

    const juegoMasJugado = biblioteca.length

        ? biblioteca.reduce(

            (a, b) =>

                a.playtime_forever >

                b.playtime_forever

                    ? a

                    : b

        )

        : null;

    return (

        <div className="steam-stats">

            <div>

                <h4>

                    {t("dashboard.library")}

                </h4>

                <span>

                    {biblioteca.length}

                </span>

            </div>

            <div>

                <h4>

                    {t("dashboard.hours")}

                </h4>

                <span>

                    {

                        Math.floor(

                            horasTotales / 60

                        )

                    }

                </span>

            </div>

            <div>

                <h4>

                    {t("dashboard.mostPlayed")}

                </h4>

                <span>

                    {

                        juegoMasJugado

                            ? juegoMasJugado.name

                            : "-"

                    }

                </span>

            </div>

        </div>

    );

}

export default SteamStats;