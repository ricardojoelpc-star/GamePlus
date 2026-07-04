import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../../components/MainLayout";
import "../../styles/Categories.css";

import {
    obtenerCategorias,
    eliminarCategoria
} from "../../services/categoryService";

import CategoryModal from "../../components/CategoryModal";

function Categories() {

    const { t } = useTranslation();

    const [categorias, setCategorias] = useState([]);

    const [busqueda, setBusqueda] = useState("");

    const [modalAbierto, setModalAbierto] = useState(false);

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    useEffect(() => {

        cargarCategorias();

    }, []);

    async function cargarCategorias() {

        try {

            const datos = await obtenerCategorias();

            setCategorias(datos);

        }

        catch (error) {

            console.error(error);

        }

    }

    function nuevaCategoria() {

        setCategoriaSeleccionada(null);

        setModalAbierto(true);

    }

    function editarCategoria(categoria) {

        setCategoriaSeleccionada(categoria);

        setModalAbierto(true);

    }

    function cerrarModal() {

        setModalAbierto(false);

    }

    async function borrarCategoria(idCategoria) {

        const confirmar = window.confirm(

            t("categories.confirmDelete")

        );

        if (!confirmar) return;

        try {

            await eliminarCategoria(idCategoria);

            await cargarCategorias();

            alert(

                t("categories.deleteSuccess")

            );

        }

        catch (error) {

            console.error(error);

            alert(

                t("categories.deleteError")

            );

        }

    }

    const categoriasFiltradas = categorias.filter((categoria) =>

        categoria.NOMBRE
            .toLowerCase()
            .includes(busqueda.toLowerCase())

    );

    return (

        <MainLayout>

            <div className="categories">

                <div className="categories-header">

                    <h1>

                        📂 {t("categories.title")}

                    </h1>

                    <button
                        className="btn-primary"
                        onClick={nuevaCategoria}
                    >

                        ➕ {t("categories.new")}

                    </button>

                </div>

                <div className="categories-toolbar">

                    <input

                        type="text"

                        placeholder={t("categories.search")}

                        value={busqueda}

                        onChange={(e) => setBusqueda(e.target.value)}

                    />

                </div>

                <table className="categories-table">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>{t("categories.name")}</th>

                            <th>{t("categories.actions")}</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            categoriasFiltradas.map((categoria) => (

                                <tr key={categoria.ID_CATEGORIA}>

                                    <td>

                                        {categoria.ID_CATEGORIA}

                                    </td>

                                    <td>

                                        {categoria.NOMBRE}

                                    </td>

                                    <td>

                                        <button
                                            className="btn-edit"
                                            onClick={() =>
                                                editarCategoria(categoria)
                                            }
                                        >

                                            ✏ {t("common.edit")}

                                        </button>

                                        <button
                                            className="btn-delete"
                                            onClick={() =>
                                                borrarCategoria(
                                                    categoria.ID_CATEGORIA
                                                )
                                            }
                                        >

                                            🗑 {t("common.delete")}

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <CategoryModal

                abierto={modalAbierto}

                cerrar={cerrarModal}

                categoria={categoriaSeleccionada}

                recargar={cargarCategorias}

            />

        </MainLayout>

    );

}

export default Categories;