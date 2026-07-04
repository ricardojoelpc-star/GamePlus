const express = require("express");

const router = express.Router();

const usuarioController = require("../controllers/usuarioAdminController");

router.get(
    "/",
    usuarioController.obtenerUsuarios
);

router.put(
    "/:idUsuario",
    usuarioController.actualizarUsuario
);

router.delete(
    "/:idUsuario",
    usuarioController.eliminarUsuario
);

module.exports = router;