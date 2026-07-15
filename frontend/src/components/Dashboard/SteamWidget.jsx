import SteamCard from "../Steam/SteamCard";
import { useTranslation } from "react-i18next";

function SteamWidget({

    perfil,

    biblioteca,

    recientes

}) {

    const { t } = useTranslation();

    if (!perfil) {

        return (

            <div className="dashboard-card">

                <h3>🎮 {t("dashboard.steam")}</h3>

                <p>{t("dashboard.noSteam")}</p>

            </div>

        );

    }
    return (

        <div className="widget">

            <SteamCard

                perfil={perfil}

                biblioteca={biblioteca}

                recientes={recientes}

            />

        </div>

    );

}

export default SteamWidget;