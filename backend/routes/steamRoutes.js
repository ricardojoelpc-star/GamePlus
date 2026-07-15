const express = require("express");

const router = express.Router();

const SteamController = require("../controllers/steamController");

router.get(

    "/profile/:steamId",

    SteamController.obtenerPerfil

);

router.get(

    "/library/:steamId",

    SteamController.obtenerBiblioteca

);

router.post(

    "/link/:idUsuario",

    SteamController.vincularCuenta

);

router.get(

    "/user/:idUsuario",

    SteamController.obtenerSteamUsuario

);

router.delete(

    "/unlink/:idUsuario",

    SteamController.desvincularCuenta

);

module.exports = router;