import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";
import VideoGameCard from "../components/VideoGameCard";

import { obtenerVideojuegos } from "../services/gameService";

function Catalog() {

    const { t } = useTranslation();

    const [busqueda, setBusqueda] = useState("");

    const [videojuegos, setVideojuegos] = useState([]);

    useEffect(() => {

        async function cargarVideojuegos() {

            try {

                const datos = await obtenerVideojuegos();

                setVideojuegos(datos);

            }

            catch (error) {

                console.error(error);

            }

        }

        cargarVideojuegos();

    }, []);

    const juegosFiltrados = videojuegos.filter((juego) =>

        (juego.title || "")
            .toLowerCase()
            .includes(busqueda.toLowerCase())

    );

    return (

        <MainLayout>

            <h1>

                {t("catalog.title")}

            </h1>

            <SearchBar

                valor={busqueda}

                cambiar={setBusqueda}

            />

            <div

                style={{

                    display: "grid",

                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",

                    gap: "20px",

                    marginTop: "30px"

                }}

            >

                {juegosFiltrados.map((juego) => (

                    <VideoGameCard

                        key={juego.id}

                        juego={juego}

                    />

                ))}

            </div>

        </MainLayout>

    );

}

export default Catalog;