const express = require("express");
const router = express.Router();
const {validatorCreateItem} = require("../validators/tracks");
const { getItems, getItem, createItem } = require("../controller/tracks");

// Generamos la ruta de tracks
// http://localhost/tracks con métodos GET, POST, DELETE, PUT (CRUD)

router.get("/", getItems);

// Validamos al crear nuevo registro
router.post("/", validatorCreateItem,createItem);

module.exports = router;