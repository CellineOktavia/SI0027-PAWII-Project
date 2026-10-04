// Mini Project - Pertemuan 6-7: Layer Route Fakultas

const express = require("express");
const router = express.Router();
const fakultasController = require("../controllers/fakultasController");

// GET /fakultas -> fakultasController.getAll
router.get("/", fakultasController.getAll);

// GET /fakultas/:id -> fakultasController.getById
router.get("/:id", fakultasController.getById);

// POST /fakultas -> fakultasController.create
router.post("/", fakultasController.create);

module.exports = router;