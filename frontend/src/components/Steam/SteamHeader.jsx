import SteamStatus from "./SteamStatus";

function SteamHeader({ perfil }) {

    return (

        <div className="steam-header">

            <img

                src={perfil.avatarfull}

                alt={perfil.personaname}

            />

            <div>

                <h2>

                    {perfil.personaname}

                </h2>

                <SteamStatus

                    state={perfil.personastate}

                />

            </div>

        </div>

    );

}

export default SteamHeader;