// Mini Project - Pertemuan 6-7: Layer Controller
// TODO 2: lengkapi setiap handler agar memanggil fungsi model yang sesuai.

const mahasiswaModel = require("../models/mahasiswaModel");

exports.getAll = (req, res) => {
  // TODO: kirim seluruh data mahasiswa (mahasiswaModel.getAll()) sebagai JSON
  res.json(mahasiswaModel.getAll());
};

exports.getById = (req, res) => {
  // TODO: ambil id dari req.params, cari via mahasiswaModel.getById(),
  // kirim 404 dengan { message: 'Tidak ditemukan' } jika tidak ada
  const mahasiswa = mahasiswaModel.getById(parseInt(req.params.id));
  if (!mahasiswa) {
    return res.status(404).json({ message: 'Tidak ditemukan' });
  }
  res.json(mahasiswa);
};
  

exports.create = (req, res) => {
  // TODO: buat data baru via mahasiswaModel.create(req.body),
  // kirim response dengan status 201
  const newMahasiswa = mahasiswaModel.create(req.body);
  res.status(201).json(newMahasiswa);
};
