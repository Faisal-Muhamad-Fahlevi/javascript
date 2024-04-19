const arr = [3, 5, 7, 9, 11];

// length = menampilkan jumlah isi dari array
console.log(arr.length) //5

// join = menggunakan isi array menjadi sebuah string
const word = ['K', 'A', 'T', 'A', 'K']  
const word2 = ["Selamat", "Datang", 'di', "BLK"]
console.log(word.toLocaleString(""))
console.log(word2.join(""))

// push = menambahkan elemen array di bagian terakhir
arr.push(13, 15, 17);
word.push("B", "E", "R", "A", "C", "U", "N");
word2.push("karawang");

console.log(arr);
console.log(word.join("") + " \n" + word2.join(" "));

// pop = menghapus elemen terakhir array
arr.pop()
console.log(arr)

// unshift = menambahkan elemen di awal array
// [1,3,5,7,9,11,13,15]
arr .unshift(1);
console.log(arr);

// shift = menghapus elemen pertama di array
word.shift();
console.log(word);


// slice(idxAwal, idAkhir)
const siswa = ["Maulana", "nofal", "Faisal", "topik", "rian"];

// slice = akan menghasilkan array baru
const siswa2 = siswa.slice(2,4);
console.log(siswa2);

// splice = menyisipkan elemen di index tertentu
// splice(idxAwal, mauDihapusBerapa, elemen1, elemen2, ...)
siswa.splice(2, 0, "Yudha", "Jabbar", "Dani")
console.log(siswa);

// foreach = sama kayak perulangan "for"
const nilai = [70, 75, 82, 65, 58];

nilai.forEach(function (e, i) {
    console.log("Index ke-" + i + " = " + e);
});

// sort = mengurutkan array
console.log(nilai.sort());

// map
const dikaliDua = nilai.map(function (e) {
    return e * 2
});

console.log(dikaliDua);

// filter & find
const bilanganBulat = [2, 3, 1, 7, 6, 9, 11, 8];

const bilBul = bilanganBulat.filter(function (e) { 
    return e > 5;
});

const bilBul2 = bilanganBulat.find(function (e) {
    return e > 5;
})

console.log(bilBul);
console.log(bilBul2);