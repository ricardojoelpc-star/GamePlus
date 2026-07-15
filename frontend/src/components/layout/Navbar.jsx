import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import "../../styles/Navbar.css";

function Navbar() {

    const { usuario, logout } = useAuth();

    const { t } = useTranslation();

    const navigate = useNavigate();

    function cerrarSesion() {

        logout();

        navigate("/");

    }

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

                    onClick={cerrarSesion}

                >

                    {t("login.logout")}

                </button>

            </div>

        </nav>

    );

}

export default Navbar;