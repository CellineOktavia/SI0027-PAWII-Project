const fakultasModel = require("../models/fakultasModel");

exports.getAll = (req, res) => {
  const fakultas = fakultasModel.getAll();
  res.json(fakultas);
};

exports.getById = (req, res) => {
  const fakultas = fakultasModel.getById(parseInt(req.params.id));
    if (!fakultas) {
    return res.status(404).json({ message: "Fakultas tidak ditemukan" });
  }
    res.json(fakultas);
};

exports.create = (req, res) => {
  const newFakultas = fakultasModel.create(req.body);
  res.status(201).json(newFakultas);
};

