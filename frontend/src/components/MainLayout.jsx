import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

import "../styles/MainLayout.css";

function MainLayout({ children }) {

    return (

        <>

            <Navbar />

            <div className="layout">

                <Sidebar />

                <main className="layout-content">

                    {children}

                </main>

            </div>

        </>

    );

}

export default MainLayout;