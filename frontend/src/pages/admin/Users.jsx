import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MainLayout from "../../components/MainLayout";
import "../../styles/Users.css";

import {

    obtenerUsuarios,
    eliminarUsuario

} from "../../services/userService";

import UserModal from "../../components/UserModal";

function Users() {

    const { t } = useTranslation();

    const [usuarios, setUsuarios] = useState([]);

    const [busqueda, setBusqueda] = useState("");

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

    const [modalAbierto, setModalAbierto] = useState(false);

    useEffect(() => {

        cargarUsuarios();

    }, []);

    async function cargarUsuarios() {

        try {

            const datos = await obtenerUsuarios();

            setUsuarios(datos);

        }

        catch (error) {

            console.error(error);

        }

    }

    function editar(usuario) {

        setUsuarioSeleccionado(usuario);

        setModalAbierto(true);

    }

    async function eliminar(idUsuario) {

        const confirmar = window.confirm(

            t("users.confirmDelete")

        );

        if (!confirmar) return;

        try {

            await eliminarUsuario(idUsuario);

            await cargarUsuarios();

            alert(

                t("users.deleteSuccess")

            );

        }

        catch (error) {

            console.error(error);

            alert(

                t("users.deleteError")

            );

        }

    }

    const filtrados = usuarios.filter((u) =>

        u.NOMBRE
            .toLowerCase()
            .includes(busqueda.toLowerCase())

    );

    return (

        <MainLayout>

            <div className="users">

                <div className="users-header">

                    <h1>

                        👥 {t("users.title")}

                    </h1>

                    <input

                        type="text"

                        placeholder={t("users.search")}

                        value={busqueda}

                        onChange={(e) => setBusqueda(e.target.value)}

                    />

                </div>

                <table className="users-table">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>{t("users.name")}</th>

                            <th>{t("users.email")}</th>

                            <th>{t("users.language")}</th>

                            <th>{t("users.theme")}</th>

                            <th>{t("users.actions")}</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filtrados.map((usuario) => (

                                <tr key={usuario.ID_USUARIO}>

                                    <td>

                                        {usuario.ID_USUARIO}

                                    </td>

                                    <td>

                                        {usuario.NOMBRE}

                                    </td>

                                    <td>

                                        {usuario.CORREO}

                                    </td>

                                    <td>

                                        {usuario.IDIOMA}

                                    </td>

                                    <td>

                                        {usuario.TEMA}

                                    </td>

                                    <td>

                                        <button

                                            className="btn-edit"

                                            onClick={() => editar(usuario)}

                                        >

                                            ✏ {t("common.edit")}

                                        </button>

                                        <button

                                            className="btn-delete"

                                            onClick={() =>

                                                eliminar(usuario.ID_USUARIO)

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

            <UserModal

                abierto={modalAbierto}

                cerrar={() => setModalAbierto(false)}

                usuario={usuarioSeleccionado}

                recargar={cargarUsuarios}

            />

        </MainLayout>

    );

}

export default Users;