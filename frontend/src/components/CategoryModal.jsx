import { useEffect, useState } from "react";

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

    const [nombre, setNombre] = useState("");

    useEffect(() => {

        if (categoria) {

            setNombre(categoria.NOMBRE);

        } else {

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

            } else {

                await crearCategoria(nombre);

            }

            await recargar();

            cerrar();

        } catch (error) {

            console.error(error);

            alert("Ocurrió un error al guardar la categoría.");

        }

    }

    if (!abierto) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>

                    {

                        categoria

                        ? "✏ Editar Categoría"

                        : "➕ Nueva Categoría"

                    }

                </h2>

                <form onSubmit={guardar}>

                    <input

                        type="text"

                        placeholder="Nombre de la categoría"

                        value={nombre}

                        onChange={(e) => setNombre(e.target.value)}

                        required

                    />

                    <div className="modal-buttons">

                        <button

                            type="button"

                            className="btn-cancel"

                            onClick={cerrar}

                        >

                            Cancelar

                        </button>

                        <button

                            type="submit"

                            className="btn-save"

                        >

                            Guardar

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CategoryModal;