import { useTranslation } from "react-i18next";

function StatsWidget({ estadisticas }) {

    const { t } = useTranslation();

    return (

        <div className="dashboard-card">

            <h2>

                📊 Estadísticas

            </h2>

            <div className="dashboard-grid">

                <div>

                    <h3>

                        ⭐

                    </h3>

                    <p>

                        {t("dashboard.favorites")}

                    </p>

                    <strong>

                        {estadisticas.favoritos}

                    </strong>

                </div>

                <div>

                    <h3>

                        🎮

                    </h3>

                    <p>

                        {t("dashboard.games")}

                    </p>

                    <strong>

                        {estadisticas.videojuegos}

                    </strong>

                </div>

                <div>

                    <h3>

                        📂

                    </h3>

                    <p>

                        {t("dashboard.categories")}

                    </p>

                    <strong>

                        {estadisticas.categorias}

                    </strong>

                </div>

            </div>

        </div>

    );

}

export default StatsWidget;