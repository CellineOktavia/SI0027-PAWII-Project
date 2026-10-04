const dosenModel = require("../models/dosenModel");

exports.getAll = (req, res) => {
  const dosen = dosenModel.getAll();
  res.json(dosen);
}

exports.getById = (req, res) => {
  const dosen = dosenModel.getById(parseInt(req.params.id));
    if (!dosen) {
    return res.status(404).json({ message: "Dosen tidak ditemukan" });
  }
    res.json(dosen);
};

exports.create = (req, res) => {
  const newDosen = dosenModel.create(req.body);
  res.status(201).json(newDosen);
};

