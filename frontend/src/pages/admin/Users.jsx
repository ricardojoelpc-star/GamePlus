import { useEffect, useState } from "react";

import MainLayout from "../../components/MainLayout";
import "../../styles/Users.css";

import {

    obtenerUsuarios,
    eliminarUsuario

} from "../../services/userService";

import UserModal from "../../components/UserModal";

function Users() {

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

        } catch (error) {

            console.error(error);

        }

    }

    function editar(usuario) {

        setUsuarioSeleccionado(usuario);

        setModalAbierto(true);

    }

    async function eliminar(idUsuario) {

        if (!window.confirm("¿Eliminar usuario?")) return;

        try {

            await eliminarUsuario(idUsuario);

            cargarUsuarios();

        } catch (error) {

            console.error(error);

        }

    }

    const filtrados = usuarios.filter((u) =>
        u.NOMBRE.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (

        <MainLayout>

            <div className="users">

                <div className="users-header">

                    <h1>

                        👥 Usuarios

                    </h1>

                    <input

                        type="text"

                        placeholder="Buscar..."

                        value={busqueda}

                        onChange={(e) => setBusqueda(e.target.value)}

                    />

                </div>

                <table className="users-table">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Nombre</th>

                            <th>Correo</th>

                            <th>Idioma</th>

                            <th>Tema</th>

                            <th>Acciones</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filtrados.map((usuario) => (

                            <tr key={usuario.ID_USUARIO}>

                                <td>{usuario.ID_USUARIO}</td>

                                <td>{usuario.NOMBRE}</td>

                                <td>{usuario.CORREO}</td>

                                <td>{usuario.IDIOMA}</td>

                                <td>{usuario.TEMA}</td>

                                <td>

                                    <button

                                        className="btn-edit"

                                        onClick={() => editar(usuario)}

                                    >

                                        ✏ Editar

                                    </button>

                                    <button

                                        className="btn-delete"

                                        onClick={() =>
                                            eliminar(usuario.ID_USUARIO)
                                        }

                                    >

                                        🗑 Eliminar

                                    </button>

                                </td>

                            </tr>

                        ))}

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