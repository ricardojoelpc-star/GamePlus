import "../../styles/Steam.css";

import SteamHeader from "./SteamHeader";
import SteamStats from "./SteamStats";
import RecentGames from "./RecentGames";

function SteamCard({

    perfil,

    biblioteca,

    recientes

}) {

    return (

        <div className="steam-card">

            <SteamHeader

                perfil={perfil}

            />

            <SteamStats

                biblioteca={biblioteca}

            />

            <RecentGames

                recientes={recientes}

            />

        </div>

    );

}

export default SteamCard;