import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/Sidebar.css";

function Sidebar() {

    const { t } = useTranslation();

    return (

        <aside className="sidebar">

            <h3>{t("sidebar.menu")}</h3>

            <Link to="/profile">

                👤 {t("sidebar.profile")}

            </Link>

            <Link to="/dashboard">

                🏠 {t("sidebar.dashboard")}

            </Link>

            <Link to="/catalog">

                🎮 {t("sidebar.catalog")}

            </Link>

            <Link to="/favorites">

                ⭐ {t("sidebar.favorites")}

            </Link>

            <Link to="/admin">

                ⚙ {t("sidebar.admin")}

            </Link>

        </aside>

    );

}

export default Sidebar;