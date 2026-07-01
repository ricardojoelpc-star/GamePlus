const express = require("express");

const router = express.Router();

const videoGameController = require("../controllers/videoGameController");

router.get("/", videoGameController.obtenerVideojuegos);

module.exports = router;