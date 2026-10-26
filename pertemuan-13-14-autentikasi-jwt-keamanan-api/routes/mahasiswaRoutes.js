// Mini Project - Pertemuan 13-14: Route Mahasiswa
// TODO 3: pasang middleware verifyToken pada route POST, PUT, DELETE (GET tetap publik).

const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");
const verifyToken = require("../middlewares/verifyToken");
const { verify } = require("jsonwebtoken");

//Tidak dipasang middleware karena hanya mengambil data untuk menampilkannya dan diakses oleh publik
router.get("/", mahasiswaController.getAll);
router.get("/:id", mahasiswaController.getById);

//Dipasang middleware karena prosesnya tidak untuk publik karena terkait dengan mengedit data
// TODO: router.post('/', verifyToken, mahasiswaController.create);
router.post('/', verifyToken, mahasiswaController.create);
// TODO: router.put('/:id', verifyToken, mahasiswaController.update);
router.put('/:id', verifyToken, mahasiswaController.update);
// TODO: router.delete('/:id', verifyToken, mahasiswaController.remove);
router.delete('/:id', verifyToken, mahasiswaController.remove);

module.exports = router;
