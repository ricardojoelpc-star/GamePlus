import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainLayout from "../components/MainLayout";

import "../styles/Admin.css";

function Admin() {

    const navigate = useNavigate();

    const { t } = useTranslation();

    return (

        <MainLayout>

            <div className="admin">

                <div className="admin-header">

                    <div>

                        <h1>

                            ⚙ {t("admin.title")}

                        </h1>

                        <p>

                            {t("admin.subtitle")}

                        </p>

                    </div>

                </div>

                <div className="admin-modules">

                    <div className="module-card">

                        <div className="module-icon">

                            📂

                        </div>

                        <h2>

                            {t("admin.categories")}

                        </h2>

                        <p>

                            {t("admin.categoriesDescription")}

                        </p>

                        <button

                            className="btn-primary"

                            onClick={() =>
                                navigate("/admin/categories")
                            }

                        >

                            {t("admin.enter")} →

                        </button>

                    </div>

                    <div className="module-card">

                        <div className="module-icon">

                            👥

                        </div>

                        <h2>

                            {t("admin.users")}

                        </h2>

                        <p>

                            {t("admin.usersDescription")}

                        </p>

                        <button

                            className="btn-primary"

                            onClick={() =>
                                navigate("/admin/users")
                            }

                        >

                            {t("admin.enter")} →

                        </button>

                    </div>

                    <div className="module-card">

                        <div className="module-icon">

                            📊

                        </div>

                        <h2>

                            {t("admin.statistics")}

                        </h2>

                        <p>

                            {t("admin.statisticsDescription")}

                        </p>

                        <button

                            className="btn-primary"

                            onClick={() =>
                                navigate("/admin/statistics")
                            }

                        >

                            {t("admin.enter")} →

                        </button>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}

export default Admin;