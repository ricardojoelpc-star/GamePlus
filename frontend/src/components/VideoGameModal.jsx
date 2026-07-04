import { useState, useEffect } from "react";

import "../styles/VideoGameModal.css";

function VideoGameModal({

    abierto,

    cerrar,

    guardar,

    videojuego

}) {

    const [formulario, setFormulario] = useState({

        title: "",

        genre: "",

        platform: "",

        thumbnail: "",

        short_description: ""

    });

    useEffect(() => {

        if (videojuego) {

            setFormulario(videojuego);

        }

        else {

            setFormulario({

                title: "",

                genre: "",

                platform: "",

                thumbnail: "",

                short_description: ""

            });

        }

    }, [videojuego]);

    function cambiar(e) {

        setFormulario({

            ...formulario,

            [e.target.name]: e.target.value

        });

    }

    function enviar(e) {

        e.preventDefault();

        guardar(formulario);

    }

    if (!abierto) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>

                    {videojuego
                        ? "✏ Editar Videojuego"
                        : "➕ Nuevo Videojuego"}

                </h2>

                <form onSubmit={enviar}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Título"
                        value={formulario.title}
                        onChange={cambiar}
                        required
                    />

                    <input
                        type="text"
                        name="genre"
                        placeholder="Categoría"
                        value={formulario.genre}
                        onChange={cambiar}
                        required
                    />

                    <input
                        type="text"
                        name="platform"
                        placeholder="Plataforma"
                        value={formulario.platform}
                        onChange={cambiar}
                        required
                    />

                    <input
                        type="text"
                        name="thumbnail"
                        placeholder="URL Imagen"
                        value={formulario.thumbnail}
                        onChange={cambiar}
                    />

                    <textarea

                        name="short_description"

                        rows="4"

                        placeholder="Descripción"

                        value={formulario.short_description}

                        onChange={cambiar}

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

export default VideoGameModal;