const prodiModel = require("../models/prodiModel");

exports.getAll = (req, res) => {
  const prodi = prodiModel.getAll();
  res.json(prodi);
};

exports.getById = (req, res) => {
  const prodi = prodiModel.getById(parseInt(req.params.id));
  if (!prodi) {
    return res.status(404).json({ message: "Prodi tidak ditemukan" });
  }
  res.json(prodi);
};

exports.create = (req, res) => {
  const newProdi = prodiModel.create(req.body);
  res.status(201).json(newProdi);
};

