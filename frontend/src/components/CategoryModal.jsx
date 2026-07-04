import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
    crearCategoria,
    actualizarCategoria
} from "../services/categoryService";

import "../styles/CategoryModal.css";

function CategoryModal({

    abierto,

    cerrar,

    categoria,

    recargar

}) {

    const { t } = useTranslation();

    const [nombre, setNombre] = useState("");

    useEffect(() => {

        if (categoria) {

            setNombre(categoria.NOMBRE);

        }

        else {

            setNombre("");

        }

    }, [categoria]);

    async function guardar(e) {

        e.preventDefault();

        try {

            if (categoria) {

                await actualizarCategoria(

                    categoria.ID_CATEGORIA,

                    nombre

                );

            }

            else {

                await crearCategoria(nombre);

            }

            await recargar();

            cerrar();

        }

        catch (error) {

            console.error(error);

            alert(

                t("categoryModal.saveError")

            );

        }

    }

    if (!abierto) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>

                    {

                        categoria

                        ? `✏ ${t("categoryModal.editTitle")}`

                        : `➕ ${t("categoryModal.newTitle")}`

                    }

                </h2>

                <form onSubmit={guardar}>

                    <input

                        type="text"

                        placeholder={t("categoryModal.name")}

                        value={nombre}

                        onChange={(e) =>

                            setNombre(e.target.value)

                        }

                        required

                    />

                    <div className="modal-buttons">

                        <button

                            type="button"

                            className="btn-cancel"

                            onClick={cerrar}

                        >

                            {t("common.cancel")}

                        </button>

                        <button

                            type="submit"

                            className="btn-save"

                        >

                            {t("common.save")}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CategoryModal;