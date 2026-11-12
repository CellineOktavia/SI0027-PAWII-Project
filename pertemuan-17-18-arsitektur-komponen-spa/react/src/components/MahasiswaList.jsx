// Mini Project - Pertemuan 17-18: Komponen induk, merender banyak MahasiswaCard
// TODO 3: lengkapi komponen ini.

import MahasiswaCard from "./MahasiswaCard";

function MahasiswaList({mahasiswa}) {
  if(mahasiswa.length === 0){
    return <p className="empty">Tidak ada mahahsiswa yang cocok.</p>
  }

  return (
    <div className="mahasiswa-list">
      {/* TODO: gunakan mahasiswa.map() untuk merender satu <MahasiswaCard key={m.id} nama={m.nama} nim={m.nim} /> per item */}
      {mahasiswa.map((m)=>(
        <MahasiswaCard key = {m.id}
        nama = {m.nama}
        nim = {m.nim}
        />
      ))}
    </div>
  );
}

export default MahasiswaList;
