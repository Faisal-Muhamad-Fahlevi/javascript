// If statement
/*
const total_belanja = 80000;

if (total_belanja > 100000){
    console.log("Selamat Anda mendapatkan hadiah!");
}

console.log("Terimakasih sudah berbelanja"); 

*/
// If ... else statment
/*
const total_belanja = prompt("Masukan total belanja:");

if (total_belanja > 100000) {
    console.log("Selamat Anda mendapatkan piring cantik!")
} else {
    console.log("Mohon maaf anda belum dapat hadiah!")
}

console.log("Terimakasih sudah berbelanja")
*/

// 2. Login

const password = "legendofaang";

if (password === "legendofaang") {
    console.log("Silahkan masuk, ang!");
} else {
    console.log("password salah, silahkan coba lagi!");
}
 
// ... else If ... else statment

const nilai = prompt("Masukan nilai Anda:");

if (nilai >= 80) {
  console.log("Nilai Anda berpredikat BAIK");
} else if (nilai >= 65) {
  console.log("Nilai Anda berpredikat CUKUP");
} else if (nilai >= 50) {
  console.log("Nilai Anda berpredikat BURUK");
} else {
  console.log("Nilai Anda berpredikat SANGAT BURUK");
}

// Switch statment
const warna = "merah";
let pesan = "";

switch (warna) {
  case "merah":
    pesan = "Anda memilih warna merah!";
    break;

  case "biru":
    pesan = "Anda memilih warna biru!";
    break;

  case "orange":
    pesan = "Anda memilih warna orange";
    break;

    defalut: 
    pesan = "warna yang anda pilih tidak ada!";
    break;
}

console.log(pesan);

// 1. Buat prompt untuk input nilai
const n = prompt("Masukan nilai N : ")


// 2. Inisialisai nilai awal jumlah
let jumlah =0;

// 3. Inisialisasi nilai awal perulangan
let i = 1;

// 4. Eksekusi perulangan
/*while (i <= n) {
  jumlah = jumlah + i;
  i++:
}*/

for ( let i = 1; i <= n; i++) {
  jumlah = jumlah + i;
}

// 5. cetak hasil di console
console.log("Hasil penjumlahan deret 1 sampai dengan " + n + " adalah " + jumlah)