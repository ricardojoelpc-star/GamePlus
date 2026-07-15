import SteamStatus from "../Steam/SteamStatus";
import { useTranslation } from "react-i18next";

function GamerProfileWidget({ perfil }) {

    const { t } = useTranslation();

    if (!perfil) {

        return (

            <div className="dashboard-card">

                <h3>👤 {t("dashboard.gamerProfile")}</h3>

                <p>{t("dashboard.noSteam")}</p>

            </div>

        );

    }

    return (

        <div className="dashboard-card">

            <div className="gamer-profile">

                <img

                    className="gamer-avatar"

                    src={perfil.avatarfull}

                    alt={perfil.personaname}

                />

                <div>

                    <h2>{perfil.personaname}</h2>

                    <SteamStatus

                        state={perfil.personastate}

                    />

                    <p>{t("dashboard.steamId")}</p>

                    <small>

                        {perfil.steamid}

                    </small>

                </div>

            </div>

        </div>

    );

}

export default GamerProfileWidget;