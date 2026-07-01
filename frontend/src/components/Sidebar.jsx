import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <aside style={{

            width: "250px",

            height: "calc(100vh - 70px)",

            background: "#1E293B",

            color: "white",

            padding: "25px"

        }}>

            <h3>Menú</h3>

            <br />

            <Link to="/dashboard">🏠 Dashboard</Link>

            <br /><br />

            <Link to="/catalog">🎮 Catálogo</Link>

            <br /><br />

            <Link to="/favorites">⭐ Favoritos</Link>

        </aside>

    );

}

export default Sidebar;