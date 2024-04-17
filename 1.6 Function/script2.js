/*function penjumlahan(a, b) {
    const c = a + b;
    return c ;
}

const total1 = penjumlahan(9, 5) + penjumlahan(8,7);

console.log(total1);*/


function penjumlahan(a, b) {
    return a + b;
}

function pengurangan(a, b) {
    return a - b;
}

// fungsi deklarasi
function perkalian(a, b) {
    return a * b
}
function pembagian(a, b) {
    return a / b;
}

let lanjut;
do {

console.log("-- APLIKASI KALKULATOR SEDERHANA --");
console.log("===================================");
console.log("Silahkan pilih menu dibawah : ");
console.log("1. penjumlahan");
console.log("2. pengurangan");
console.log("3. perkalian");
console.log("4. pembagian");
console.log("===================================");

const menu = prompt("Pilih Menu: ");
let a, b;

switch (menu) {
    case "1":
        a = parseInt( prompt("Masukan Nilai a : "));
        b = parseInt(prompt("Masukan Nilai b : "));
        console.log(penjumlahan(a, b));
        break;

    case "2":
        a = prompt("Masukan Nilai a : ");
        b = prompt("Masukan Nilai b : ");
        console.log(parseInt(pengurangan(a, b)));
        break;

    case "3":
        a = prompt("Masukan Nilai a : ");
        b = prompt("Masukan Nilai b : ");
        console.log(parseInt(perkalian(a, b)));
        break;

    case "4":
        a = prompt("Masukan Nilai a : ");
        b = prompt("Masukan Nilai b : ");
        console.log(parseFloat(pembagian(a, b)));
        
    defalut:
        alert("Menu yang anda pilih tidak tersedia!");
        break;
}

lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("--PROGRAM SELESAI--");



// fungsi ekspresi
/*const pembagian = function (a, b) {
    return a / b;
}*/