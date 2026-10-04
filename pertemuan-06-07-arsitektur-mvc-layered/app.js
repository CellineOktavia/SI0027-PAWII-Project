// Mini Project - Pertemuan 6-7: Menghubungkan Semua Layer
// TODO 4: gunakan express.json() dan hubungkan mahasiswaRoutes pada prefix /mahasiswa.
// Jalankan dengan: npm install && npm start

const express = require("express");
const app = express();
const PORT = 3000;
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const dosenRoutes = require("./routes/dosenRoutes");
const fakultasRoutes = require("./routes/fakultasRoutes");
const prodiRoutes = require("./routes/prodiRoutes");

console.log("mahasiswa:", typeof mahasiswaRoutes);
console.log("dosen:", typeof dosenRoutes);
console.log("fakultas:", typeof fakultasRoutes);
console.log("prodi:", typeof prodiRoutes);

// TODO: app.use(express.json());
app.use(express.json());
// TODO: app.use('/mahasiswa', mahasiswaRoutes);
app.use('/mahasiswa', mahasiswaRoutes);

app.use('/dosen', dosenRoutes);

app.use('/fakultas', fakultasRoutes);

app.use('/prodi', prodiRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
