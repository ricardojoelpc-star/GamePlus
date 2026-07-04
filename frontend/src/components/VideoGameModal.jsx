import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "../styles/VideoGameModal.css";

function VideoGameModal({

    abierto,

    cerrar,

    guardar,

    videojuego

}) {

    const { t } = useTranslation();

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

                    {

                        videojuego

                        ? `✏ ${t("videoGameModal.editTitle")}`

                        : `➕ ${t("videoGameModal.newTitle")}`

                    }

                </h2>

                <form onSubmit={enviar}>

                    <input

                        type="text"

                        name="title"

                        placeholder={t("videoGameModal.title")}

                        value={formulario.title}

                        onChange={cambiar}

                        required

                    />

                    <input

                        type="text"

                        name="genre"

                        placeholder={t("videoGameModal.genre")}

                        value={formulario.genre}

                        onChange={cambiar}

                        required

                    />

                    <input

                        type="text"

                        name="platform"

                        placeholder={t("videoGameModal.platform")}

                        value={formulario.platform}

                        onChange={cambiar}

                        required

                    />

                    <input

                        type="text"

                        name="thumbnail"

                        placeholder={t("videoGameModal.image")}

                        value={formulario.thumbnail}

                        onChange={cambiar}

                    />

                    <textarea

                        name="short_description"

                        rows="4"

                        placeholder={t("videoGameModal.description")}

                        value={formulario.short_description}

                        onChange={cambiar}

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

export default VideoGameModal;