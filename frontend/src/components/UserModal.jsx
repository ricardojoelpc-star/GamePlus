import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { actualizarUsuario } from "../services/userService";

import "../styles/UserModal.css";

function UserModal({

    abierto,

    cerrar,

    usuario,

    recargar

}) {

    const { t } = useTranslation();

    const [formulario, setFormulario] = useState({

        nombre: "",
        correo: "",
        idioma: "",
        tema: "",
        modoOscuro: 0

    });

    useEffect(() => {

        if (usuario) {

            setFormulario({

                nombre: usuario.NOMBRE,
                correo: usuario.CORREO,
                idioma: usuario.IDIOMA,
                tema: usuario.TEMA,
                modoOscuro: usuario.MODO_OSCURO

            });

        }

    }, [usuario]);

    function cambiar(e) {

        const { name, value } = e.target;

        setFormulario({

            ...formulario,

            [name]: value

        });

    }

    async function guardar(e) {

        e.preventDefault();

        try {

            await actualizarUsuario(

                usuario.ID_USUARIO,

                formulario

            );

            await recargar();

            cerrar();

        }

        catch (error) {

            console.error(error);

            alert(

                t("userModal.saveError")

            );

        }

    }

    if (!abierto) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>

                    ✏ {t("userModal.title")}

                </h2>

                <form onSubmit={guardar}>

                    <input

                        name="nombre"

                        value={formulario.nombre}

                        onChange={cambiar}

                        placeholder={t("userModal.name")}

                    />

                    <input

                        name="correo"

                        value={formulario.correo}

                        onChange={cambiar}

                        placeholder={t("userModal.email")}

                    />

                    <input

                        name="idioma"

                        value={formulario.idioma}

                        onChange={cambiar}

                        placeholder={t("userModal.language")}

                    />

                    <input

                        name="tema"

                        value={formulario.tema}

                        onChange={cambiar}

                        placeholder={t("userModal.theme")}

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

export default UserModal;