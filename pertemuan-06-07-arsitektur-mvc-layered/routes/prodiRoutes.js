// Mini Project - Pertemuan 6-7: Layer Route Prodi
const express = require("express");
const router = express.Router();
const prodiController = require("../controllers/prodiController");

// GET /prodi -> prodiController.getAll (cukup gunakan "/" karena sudah di-prefix di app.js)
router.get("/", prodiController.getAll);

// GET /prodi/:id -> prodiController.getById
router.get("/:id", prodiController.getById);

// POST /prodi -> prodiController.create
router.post("/", prodiController.create);

module.exports = router;