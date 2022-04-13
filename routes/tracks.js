const express = require("express");
const { getItems, getItem, createItem } = require("../controller/tracks");
const router = express.Router();

// Generamos la ruta de tracks
// http://localhost/tracks con métodos GET, POST, DELETE, PUT (CRUD)

router.get("/", getItems);

router.post("/", createItem);

module.exports = router;