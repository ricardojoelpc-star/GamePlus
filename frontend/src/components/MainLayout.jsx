import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {

    return (

        <>

            <Navbar />

            <div
                style={{
                    display: "flex"
                }}
            >

                <Sidebar />

                <main
                    style={{
                        flex: 1,
                        padding: "35px",
                        background: "#F5F5F5",
                        minHeight: "calc(100vh - 70px)"
                    }}
                >

                    {children}

                </main>

            </div>

        </>

    );

}

export default MainLayout;