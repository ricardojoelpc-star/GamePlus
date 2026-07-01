const express = require("express");
const cors = require("cors");

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

module.exports = app;