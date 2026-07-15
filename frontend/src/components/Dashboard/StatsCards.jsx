import { useTranslation } from "react-i18next";

function StatsCards({

    estadisticas

}) {

    const { t } = useTranslation();

    return (

        <div className="dashboard-grid">

            <div className="dashboard-card">

                <div className="card-icon">

                    ⭐

                </div>

                <div className="card-title">

                    {t("dashboard.favorites")}

                </div>

                <div className="card-value">

                    {estadisticas.favoritos}

                </div>

            </div>

            <div className="dashboard-card">

                <div className="card-icon">

                    🎮

                </div>

                <div className="card-title">

                    {t("dashboard.games")}

                </div>

                <div className="card-value">

                    {estadisticas.videojuegos}

                </div>

            </div>

            <div className="dashboard-card">

                <div className="card-icon">

                    📂

                </div>

                <div className="card-title">

                    {t("dashboard.categories")}

                </div>

                <div className="card-value">

                    {estadisticas.categorias}

                </div>

            </div>

        </div>

    );

}

export default StatsCards;