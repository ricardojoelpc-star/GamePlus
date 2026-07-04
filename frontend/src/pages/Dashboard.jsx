import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import { useAuth } from "../contexts/AuthContext";
import { obtenerEstadisticas } from "../services/dashboardService";

import "../styles/Dashboard.css";

function Dashboard() {

    const { usuario } = useAuth();

    const { t } = useTranslation();

    const [estadisticas, setEstadisticas] = useState({

        favoritos: 0,
        videojuegos: 0,
        categorias: 0

    });

    useEffect(() => {

        if (!usuario) return;

        async function cargarDashboard() {

            try {

                const datos = await obtenerEstadisticas(usuario.id);

                setEstadisticas(datos);

            }

            catch (error) {

                console.error(error);

            }

        }

        cargarDashboard();

    }, [usuario]);

    return (

        <MainLayout>

            <div className="dashboard">

                <div className="dashboard-header">

                    <h1 className="dashboard-title">

                        👋 {t("dashboard.welcome")}, {usuario?.nombre}

                    </h1>

                    <p className="dashboard-subtitle">

                        {t("dashboard.subtitle")}

                    </p>

                </div>

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

            </div>

        </MainLayout>

    );

}

export default Dashboard;