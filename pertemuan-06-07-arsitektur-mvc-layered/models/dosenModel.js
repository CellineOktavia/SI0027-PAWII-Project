let dosen =
[
    { id: 1, nama: "Dr. Andi", nip: "123456", prodiId: 1 },
    { id: 2, nama: "Dr. Budi", nip: "789012", prodiId: 2 },
];

function getAll() {
    return dosen;
}

function getById(id) {
    return dosen.find((d) => d.id === id);
}

function create(data) {
    const newDosen = { id: dosen.length + 1, ...data };
    dosen.push(newDosen);
    return newDosen;
}

module.exports = { getAll, getById, create };