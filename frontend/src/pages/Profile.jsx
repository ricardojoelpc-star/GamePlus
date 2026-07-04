import { useEffect, useState } from "react";

import MainLayout from "../components/MainLayout";
import { useAuth } from "../contexts/AuthContext";

import {

    obtenerPerfil,
    actualizarPerfil,
    cambiarPassword

} from "../services/profileService";

import "../styles/Profile.css";

function Profile() {

    const { usuario } = useAuth();

    const [perfil, setPerfil] = useState({

        nombre: "",
        correo: "",
        idioma: "",
        tema: "",
        modoOscuro: 0

    });

    const [password, setPassword] = useState("");

    useEffect(() => {

        if (usuario) {

            cargarPerfil();

        }

    }, [usuario]);

    async function cargarPerfil() {

        try {

            const datos = await obtenerPerfil(

                usuario.id

            );

            setPerfil({

                nombre: datos.NOMBRE,
                correo: datos.CORREO,
                idioma: datos.IDIOMA,
                tema: datos.TEMA,
                modoOscuro: datos.MODO_OSCURO

            });

        }

        catch (error) {

            console.error(error);

        }

    }

    function cambiar(e) {

        const { name, value } = e.target;

        setPerfil({

            ...perfil,

            [name]: value

        });

    }

    async function guardar(e) {

        e.preventDefault();

        try {

            await actualizarPerfil(

                usuario.id,

                perfil

            );

            if (password.trim() !== "") {

                await cambiarPassword(

                    usuario.id,

                    password

                );

                setPassword("");

            }

            alert("Perfil actualizado correctamente.");

        }

        catch (error) {

            console.error(error);

            alert("No fue posible actualizar el perfil.");

        }

    }

    return (

        <MainLayout>

            <div className="profile">

                <h1>

                    👤 Mi Perfil

                </h1>

                <form onSubmit={guardar}>

                    <label>

                        Nombre

                    </label>

                    <input

                        type="text"
                        name="nombre"
                        value={perfil.nombre}
                        onChange={cambiar}

                    />

                    <label>

                        Correo

                    </label>

                    <input

                        type="email"
                        name="correo"
                        value={perfil.correo}
                        onChange={cambiar}

                    />

                    <label>

                        Idioma

                    </label>

                    <input

                        type="text"
                        name="idioma"
                        value={perfil.idioma}
                        onChange={cambiar}

                    />

                    <label>

                        Tema

                    </label>

                    <input

                        type="text"
                        name="tema"
                        value={perfil.tema}
                        onChange={cambiar}

                    />

                    <label>

                        Nueva contraseña

                    </label>

                    <input

                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Deja vacío si no deseas cambiarla"

                    />

                    <button

                        className="btn-primary"
                        type="submit"

                    >

                        Guardar cambios

                    </button>

                </form>

            </div>

        </MainLayout>

    );

}

export default Profile;