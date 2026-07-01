import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {

    return (

        <>

            <Navbar />

            <div style={{ display: "flex" }}>

                <Sidebar />

                <main style={{
                    flex:1,
                    padding:"40px"
                }}>

                    <h1>Dashboard</h1>

                    <p>

                        Bienvenido a GAMEPLUS.

                    </p>

                </main>

            </div>

        </>

    );

}

export default Dashboard;