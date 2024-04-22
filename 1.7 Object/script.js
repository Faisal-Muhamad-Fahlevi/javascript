const mahasiswa = {
    // key-value pair (pasangan kunci-nilai)
    // key : value

    nama : "Faisal Mihamad Fahlevi", // property
    nim : "11220237",
    umur : 19,
};

// memanggil nilai dengan titik
console.log(mahasiswa.nama)
console.log(mahasiswa.nim)

// menambahkan property ke dalam object
mahasiswa["alamat"] = "Rawagabus Pos";
mahasiswa["no_telepon"] = "98594849";
mahasiswa["sapa"] = function () {
    console.log("Hallo Nama Saya Faisal");
}


console.log(mahasiswa.alamat);
// memanggil properti function di dalam object
console.log(mahasiswa.sapa());

// menghapus properti pada object
delete mahasiswa["umur"];

console.log(mahasiswa);
// Array of object
const siswaBLK = [
    {
        nama : "Taopik Nurhidayat",
        alamat : "Baduy",
        umur : 35,
    },

    {
        nama : "Faisal Muhamad Fahlevi",
        alamat : "Majalaya",
        umur : 37,

    },

    {
        nama : "Naufal Zian A.",
        alamat : "Kosambi",
        umur : 29,
    },
];

console.log(
    "Hallo, nama saya "+
    siswaBLK[1]. nama +
    ", alamat di " +
    siswaBLK[1]. alamat +
    ", umur saya " +
    siswaBLK[1]. umur
);