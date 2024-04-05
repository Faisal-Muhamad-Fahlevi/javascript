// For...

/*for (let i = 1;  i <= 10; i++) {
    console.log("Hello World "+ i);
}  */ 

// While...

/*let i = 1

while (i <= 10){
    console.log("Hello World "+ i);
    i++;
}*/

// Do... While

let i = 0

do {
    console.log("Hello World " + i);
    i++;
}   while (i <= 10);


// Infinite Loop = Pengulangan tak terbatas

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