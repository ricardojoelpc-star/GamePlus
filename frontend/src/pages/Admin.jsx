import MainLayout from "../components/MainLayout";
import "../styles/Admin.css";

import { useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate();

    return (

        <MainLayout>

            <div className="admin">

                <div className="admin-header">

                    <div>

                        <h1>⚙ Panel de Administración</h1>

                        <p>

                            Administra todos los módulos de GAMEPLUS.

                        </p>

                    </div>

                </div>

                <div className="admin-modules">

                    <div className="module-card">

                        <div className="module-icon">

                            📂

                        </div>

                        <h2>

                            Categorías

                        </h2>

                        <p>

                            Crear, editar y eliminar categorías.

                        </p>

                        <button
                            className="btn-primary"
                            onClick={() => navigate("/admin/categories")}
                        >

                            Entrar →

                        </button>

                    </div>

                    <div className="module-card">

                        <div className="module-icon">

                            👥

                        </div>

                        <h2>

                            Usuarios

                        </h2>

                        <p>

                            Gestionar usuarios registrados.

                        </p>

                        <button
                            className="btn-primary"
                            onClick={() => navigate("/admin/users")}
                        >

                            Entrar →

                        </button>

                    </div>

                    <div className="module-card">

                        <div className="module-icon">

                            📊

                        </div>

                        <h2>

                            Estadísticas

                        </h2>

                        <p>

                            Visualizar métricas del sistema.

                        </p>

                        <button
                            className="btn-primary"
                            onClick={() => navigate("/admin/statistics")}
                        >

                            Entrar →

                        </button>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}

export default Admin;