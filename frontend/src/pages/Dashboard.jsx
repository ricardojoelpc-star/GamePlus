import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";

import DashboardGrid from "../components/Dashboard/DashboardGrid";
import GamerProfileWidget from "../components/Dashboard/GamerProfileWidget";
import SteamWidget from "../components/Dashboard/SteamWidget";
import StatsWidget from "../components/Dashboard/StatsWidget";
import TopGamesWidget from "../components/Dashboard/TopGamesWidget";
import RecentActivityWidget from "../components/Dashboard/RecentActivityWidget";

import { useAuth } from "../contexts/AuthContext";

import { obtenerEstadisticas } from "../services/dashboardService";
import { obtenerSteamUsuario } from "../services/steamService";

import "../styles/Dashboard.css";

function Dashboard() {

    const { usuario } = useAuth();

    const { t } = useTranslation();

    const [estadisticas, setEstadisticas] = useState({

        favoritos: 0,
        videojuegos: 0,
        categorias: 0

    });

    const [steamPerfil, setSteamPerfil] = useState(null);

    const [steamBiblioteca, setSteamBiblioteca] = useState([]);

    const [steamRecientes, setSteamRecientes] = useState([]);

    const [loadingSteam, setLoadingSteam] = useState(true);

    useEffect(() => {

        if (!usuario) return;

        async function cargarDashboard() {

            try {

                const datos = await obtenerEstadisticas(

                    usuario.id

                );

                setEstadisticas(datos);

                try {

                    const steam = await obtenerSteamUsuario(

                        usuario.id

                    );

                    setSteamPerfil(

                        steam.perfil

                    );

                    setSteamBiblioteca(

                        steam.biblioteca

                    );

                    setSteamRecientes(

                        steam.recientes || []

                    );

                }

                catch (error) {

                    console.log(

                        "El usuario no tiene una cuenta de Steam vinculada."

                    );

                }

                finally {

                    setLoadingSteam(false);

                }

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

                <DashboardGrid>

                    <div className="dashboard-right">

                        <GamerProfileWidget

                            perfil={steamPerfil}

                        />

                        {

                            loadingSteam ? (

                                <div className="dashboard-card">

                                    <h3>

                                        {t("dashboard.loadingSteam")}

                                    </h3>

                                </div>

                            )

                                : (

                                    <SteamWidget

                                        perfil={steamPerfil}

                                        biblioteca={steamBiblioteca}

                                        recientes={steamRecientes}

                                    />

                                )

                        }

                        <div className="dashboard-row">

                            <TopGamesWidget

                                biblioteca={steamBiblioteca}

                            />

                            <StatsWidget

                                estadisticas={estadisticas}

                            />

                        </div>

                        <RecentActivityWidget

                            recientes={steamRecientes}

                        />

                    </div>

                </DashboardGrid>

            </div>

        </MainLayout>

    );

}

export default Dashboard;