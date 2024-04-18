// Fungsi untuk menghitung jumlah dari elemen-elemen dalam array
function hitungJumlah(arr) {
  let jumlah = 0;
  for (let i = 0; i < arr.length; i++) {
    jumlah += arr[i];
  }
  return jumlah;
}

// Fungsi untuk menghitung rata-rata dari elemen-elemen dalam array
function hitungRataRata(arr) {
  if (arr.length === 0) return 0;
  return hitungJumlah(arr) / arr.length;
}

// Fungsi untuk meminta input dari user dan membuat array
function buatArray() {
  const jumlahElemen = parseInt(prompt("Masukkan jumlah elemen dalam array:"));

  let arr = [];
  for (let i = 0; i < jumlahElemen; i++) {
    arr.push(parseInt(prompt("Masukkan elemen ke-" + (i + 1) + ":")));
  }
  return arr;
}
// Meminta input dari user untuk membuat array
const arrayInput = buatArray();

// Menghitung jumlah dan rata-rata dari elemen-elemen dalam array
const jumlah = hitungJumlah(arrayInput);
const rataRata = hitungRataRata(arrayInput);

// Menampilkan hasil
console.log("Array yang dimasukkan:", arrayInput);
console.log("Jumlah dari elemen-elemen dalam array:", jumlah);
console.log("Rata-rata dari elemen-elemen dalam array:", rataRata);