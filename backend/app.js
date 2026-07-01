const express = require("express");
const cors = require("cors");

const favoritoRoutes = require("./routes/favoritoRoutes");
const videoGameRoutes = require("./routes/videoGameRoutes");
const authRoutes = require("./routes/authRoutes");

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

module.exports = app;