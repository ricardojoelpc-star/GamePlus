const express = require("express");
const cors = require("cors");

const favoritoRoutes = require("./routes/favoritoRoutes");
const videoGameRoutes = require("./routes/videoGameRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const usuarioAdminRoutes = require("./routes/usuarioAdminRoutes");
const perfilRoutes = require("./routes/perfilRoutes");
const estadisticaRoutes = require("./routes/estadisticaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la API de GamePlus!"
    });
});

// Rutas de autenticación
app.use("/api/auth", authRoutes);
app.use("/api/videojuegos", videoGameRoutes);
app.use("/api/favoritos", favoritoRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/admin/usuarios", usuarioAdminRoutes);
app.use("/api/perfil", perfilRoutes);
app.use("/api/estadisticas", estadisticaRoutes);

module.exports = app;