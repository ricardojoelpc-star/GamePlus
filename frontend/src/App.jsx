import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Users from "./pages/admin/Users";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Categories from "./pages/admin/Categories";
import Statistics from "./pages/admin/Statistics";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/catalog"
                    element={<Catalog />}
                />

                <Route
                    path="/favorites"
                    element={<Favorites />}
                />

                <Route
                    path="/admin"
                    element={<Admin />}
                />

                <Route
                    path="/admin/categories"
                    element={<Categories />}
                />

                <Route
                    path="/admin/users"
                    element={<Users />}
                />

                <Route

                    path="/profile"

                    element={<Profile />}

                />

                <Route
                    path="/admin/statistics"
                    element={<Statistics />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;