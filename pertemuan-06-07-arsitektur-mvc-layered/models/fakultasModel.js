let fakultas =
[
    { id: 1, nama: "Fakultas Teknik" },
    { id: 2, nama: "Fakultas Ekonomi" },
];

function getAll() {
    return fakultas;
}

function getById(id) {
    return fakultas.find((f) => f.id === id);
}  

function create(data) {
    const newFakultas = { id: fakultas.length + 1, ...data };
    fakultas.push(newFakultas);
    return newFakultas;
}

module.exports = { getAll, getById, create };