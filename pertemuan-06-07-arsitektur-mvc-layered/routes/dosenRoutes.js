const express = require("express");
const router = express.Router();
const dosenController = require("../controllers/dosenController");

// GET /dosen -> dosenController.getAll
router.get("/", dosenController.getAll);

// GET /dosen/:id -> dosenController.getById
router.get("/:id", dosenController.getById);

// POST /dosen -> dosenController.create
router.post("/", dosenController.create);  

module.exports = router;