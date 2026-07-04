import { useEffect, useState } from "react";

import MainLayout from "../../components/MainLayout";
import "../../styles/Statistics.css";

import { obtenerEstadisticas } from "../../services/statisticsService";

function Statistics() {

    const [datos, setDatos] = useState({

        usuarios: 0,
        categorias: 0,
        videojuegos: 0,
        favoritos: 0

    });

    useEffect(() => {

        cargar();

    }, []);

    async function cargar() {

        try {

            const respuesta = await obtenerEstadisticas();

            setDatos(respuesta);

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <MainLayout>

            <div className="statistics">

                <h1>📊 Estadísticas</h1>

                <div className="statistics-grid">

                    <div className="stat-card">

                        <h2>{datos.usuarios}</h2>

                        <p>Usuarios</p>

                    </div>

                    <div className="stat-card">

                        <h2>{datos.categorias}</h2>

                        <p>Categorías</p>

                    </div>

                    <div className="stat-card">

                        <h2>{datos.videojuegos}</h2>

                        <p>Videojuegos</p>

                    </div>

                    <div className="stat-card">

                        <h2>{datos.favoritos}</h2>

                        <p>Favoritos</p>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}

export default Statistics;