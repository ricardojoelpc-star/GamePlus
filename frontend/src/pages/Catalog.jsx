import { useState } from "react";

import SearchBar from "../components/SearchBar";

function Catalog() {

    const [busqueda, setBusqueda] = useState("");

    return (

        <div>

            <h1>Catálogo de Videojuegos</h1>

            <SearchBar

                valor={busqueda}

                cambiar={setBusqueda}

            />

        </div>

    );

}

export default Catalog;