import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../../components/MainLayout";

import "../../styles/Statistics.css";

import { obtenerEstadisticas } from "../../services/statisticsService";

function Statistics() {

    const { t } = useTranslation();

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

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <MainLayout>

            <div className="statistics">

                <h1>

                    📊 {t("statistics.title")}

                </h1>

                <div className="statistics-grid">

                    <div className="stat-card">

                        <h2>

                            {datos.usuarios}

                        </h2>

                        <p>

                            {t("statistics.users")}

                        </p>

                    </div>

                    <div className="stat-card">

                        <h2>

                            {datos.categorias}

                        </h2>

                        <p>

                            {t("statistics.categories")}

                        </p>

                    </div>

                    <div className="stat-card">

                        <h2>

                            {datos.videojuegos}

                        </h2>

                        <p>

                            {t("statistics.games")}

                        </p>

                    </div>

                    <div className="stat-card">

                        <h2>

                            {datos.favoritos}

                        </h2>

                        <p>

                            {t("statistics.favorites")}

                        </p>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}

export default Statistics;