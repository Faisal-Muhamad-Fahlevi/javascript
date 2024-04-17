// cara membuat Array di JS

// Cara pertama

const angka = new Array(1, 3, 5, 7, 9);

console.log(angka);

// cara kedua

const angka2 = new Array(5);

console.log(angka2);

// Cara ketiga

const angka3 = [2, 4, 6, 8, 10];

console.log(angka3)

// Cara menampilkan isi array

console.log(angka[0]); //1
console.log(angka[1]); //3
console.log(angka[2]); //5

// cara menampilkan isi array part 2

for (let i = 0; i < angka.length; i++) {
    console.log("Index ke-" + i + " = " + angka [i]);
}

// cara menambahkan isi ke dalam array

angka2[0] = 5;
angka2[1] = 12;
angka2[2] = 17;
angka2[3] = 21;
angka2[4] = 28;

console.log(angka2);

/*angka4[0] = 30;

console.log(angka4);

console.log("HELLO WORLD".length);*/

// cara pertama menghapus elemenn array
// pake "undefined"

angka3[2] = undefined
angka3[4] = undefined

// cara kedua menghapus elemen pada array
// pake keyword "delete"

delete angka3[0];

console.log(angka3);