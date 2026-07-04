const express = require("express");

const router = express.Router();

const perfilController = require("../controllers/perfilController");

router.get(
    "/:idUsuario",
    perfilController.obtenerPerfil
);

router.put(
    "/:idUsuario",
    perfilController.actualizarPerfil
);

router.put(

    "/:idUsuario/password",

    perfilController.cambiarPassword

);

module.exports = router;