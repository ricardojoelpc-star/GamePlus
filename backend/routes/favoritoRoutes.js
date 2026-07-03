const express = require("express");

const router = express.Router();

const favoritoController = require("../controllers/favoritoController");

// Agregar favorito
router.post("/", favoritoController.agregarFavorito);

// Obtener favoritos de un usuario
router.get("/:idUsuario", favoritoController.obtenerFavoritos);

// Eliminar favorito
router.delete("/:idFavorito", favoritoController.eliminarFavorito);

module.exports = router;