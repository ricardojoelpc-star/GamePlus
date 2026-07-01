import { useAuth } from "../contexts/AuthContext";

import "../styles/Navbar.css";

function Navbar() {

    const { usuario, logout } = useAuth();

    return (

        <nav className="navbar">

            <h2 className="navbar-title">

                GAMEPLUS

            </h2>

            <div className="navbar-user">

                <span>

                    {usuario?.nombre}

                </span>

                <button

                    className="logout-button"

                    onClick={logout}

                >

                    Cerrar sesión

                </button>

            </div>

        </nav>

    );

}

export default Navbar;