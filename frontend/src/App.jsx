import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/catalog" element={<Catalog />} />

                <Route path="/favorites" element={<Favorites />}/>

            </Routes>

        </BrowserRouter>

    );

}

export default App;