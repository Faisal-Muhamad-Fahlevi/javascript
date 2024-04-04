let a =3
let b =2

let c = a+b;

console.log(c);

a = 6;
b = 3;

c = a*b;
console.log(c);

// ======= penjumlahan

a =6;
b =4;

c =a+b;

console.log(c);

// ======= perkalian

a =5;
b =3;

c =a*b;
console.log(c);

// ======= pembagian

a = 12;
b = 3;

c =a/b;
console.log(c);

// ====== pengurangan

a = 15;
b = 11;

c =a-c;
console.log(c);


// Augmented Assignment

let x =3;
let y =5;

console.log((x+=y)); // x = x+y = 8
console.log((x+=y)); // 13
console.log((x-=y));
console.log((x*=y));

// operator unary increment

let k = 5;

console.log(k++);
console.log(k++);
console.log(k++);
console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);

// operator perbandingan

let angka1 = 10;

if (angka1 % 2 === 0) {
    console.log("ini bilangan genap");
} else{
    console.log("ini bilangan ganjil");
}

// operator String

const kata1 = "Selamat"
const kata2 = "Datang"

console.log(kata1+" " + " "+ "Sampai/"+kata2)

// operator Ternary

let angka2 = 15

const ganjilGenap =
(angka2 % 2) === 0 ? "Ini bilangan genap" : "ini bilangan ganjil";

console.log(ganjilGenap);

// Operator Aritmatika
// +,-,/,*,**,%

let panjang = 20
let lebar = 30

let persegi_panjang = panjang * lebar

console.log("Luas persegi panjang:"+persegi_panjang)

let k_persegi = 2 * (panjang + lebar); // keliling persegi panjang
console.log("keliling persegi panjang:" + k_persegi);

// operator unary
// +,-,++,--

let i = 10

i++ // increment (menambahkan 1 ke dalam angka sebelumnya)
i++
++i // 13
i--; // decrement (mengurangi 1 dari angka sebelumnya)
i--;

console.log(i);
const password = "luwakwhitecoffe"
const inslogin =
        password === "biskuithatari"
        ? "anda bayar gue"
        : "lo bayar gue"

// operator logika
// && (AND), II (OR),! (Negasi) = TRUE /FALSE

console.log(10%2=== 0 && 10/5)

//built in function = promt, alert, dialog
// 1. prompt

//hitung segi tiga
let alas = prompt("masukan alas: ");
console.log("alas segitiga:" + alas);

let tinggi = prompt("Masukan tinggi: ");
console.log("Tinggi segitiga: " + tinggi);

let segitiga = (alas * tinggi) / 2;
console.log("Luas Segitiga: " + segitiga);