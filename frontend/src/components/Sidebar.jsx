import { Link } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar(){

    return(

        <aside className="sidebar">

            <h3>Menú</h3>

            <Link to="/dashboard">

                🏠 Dashboard

            </Link>

            <Link to="/catalog">

                🎮 Catálogo

            </Link>

            <Link to="/favorites">

                ⭐ Favoritos

            </Link>

            <Link to="/admin">

                ⚙ Administración

            </Link>

        </aside>

    );

}

export default Sidebar;