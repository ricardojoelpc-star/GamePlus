const express = require("express");

const router = express.Router();

const favoritoController = require("../controllers/favoritoController");

router.post("/", favoritoController.agregarFavorito);

module.exports = router;