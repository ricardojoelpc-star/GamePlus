import { useEffect, useState } from "react";

import MainLayout from "../components/MainLayout";

import { useAuth } from "../contexts/AuthContext";

import { obtenerEstadisticas } from "../services/dashboardService";

import "../styles/Dashboard.css";

function Dashboard() {

    const { usuario } = useAuth();

    const [estadisticas, setEstadisticas] = useState({

        favoritos: 0,

        videojuegos: 0,

        categorias: 0

    });

    useEffect(() => {

        async function cargarDashboard() {

            try {

                const datos = await obtenerEstadisticas(usuario.id);

                setEstadisticas(datos);

            } catch (error) {

                console.error(error);

            }

        }

        if (usuario) {

            cargarDashboard();

        }

    }, [usuario]);

    return (

        <MainLayout>

            <div className="dashboard">

                <div className="dashboard-header">

                    <h1 className="dashboard-title">

                        👋 Bienvenido, {usuario?.nombre}

                    </h1>

                    <p className="dashboard-subtitle">

                        Tu centro de control de GAMEPLUS.

                    </p>

                </div>

                <div className="dashboard-grid">

                    <div className="dashboard-card">

                        <div className="card-icon">

                            ⭐

                        </div>

                        <div className="card-title">

                            Favoritos

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

                            Videojuegos

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

                            Categorías

                        </div>

                        <div className="card-value">

                            {estadisticas.categorias}

                        </div>

                    </div>

                </div>

                <div className="dashboard-actions">

                    <h2>

                        Accesos rápidos

                    </h2>

                    <div className="action-grid">

                        <div className="action-card">

                            <div style={{ fontSize: "45px" }}>

                                🎮

                            </div>

                            <h3>

                                Catálogo

                            </h3>

                            <p>

                                Explora todos los videojuegos disponibles.

                            </p>

                        </div>

                        <div className="action-card">

                            <div style={{ fontSize: "45px" }}>

                                ⭐

                            </div>

                            <h3>

                                Favoritos

                            </h3>

                            <p>

                                Consulta rápidamente tus videojuegos favoritos.

                            </p>

                        </div>

                        <div className="action-card">

                            <div style={{ fontSize: "45px" }}>

                                ⚙

                            </div>

                            <h3>

                                Administración

                            </h3>

                            <p>

                                Gestiona videojuegos y categorías.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}

export default Dashboard;