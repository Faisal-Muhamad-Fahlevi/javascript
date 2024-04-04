const n = prompt(" Silahkan Masukan Nilai N: ");

let jumlah = 0;
for (let i = 1; i <= n; i++){
    jumlah = jumlah + i;
}

console.log("Hasil penjumlahan deret 1 sampai dengan " + n + " adalah " + jumlah)
