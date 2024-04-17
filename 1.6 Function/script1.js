const s1 = 8;
const s2 = 5;
const s3 = 10;
const s4 = 6;
const s5 = 7;
const s6 = 3;

const volumeS1 = s1 * s1 * s1; // 512
const volumeS2 = s2 * s2 * s2; // 125
const volumeS3 = s3 * s3 * s3; // 1000
const volumeS4 = s4 * s4 * s4; // 216
const volumeS5 = s5 * s5 * s5; // 343
const volumeS6 = s6 * s6 * s6; // 27

let total = volumeS1 + volumeS2; // 637
total = volumeS3 + volumeS4; // 1216
total = volumeS5 + volumeS6; // 370

console.log(total);

function namaFungsi(a, b) {
    console.log(a+ " suka " + b);
}

namaFungsi("Abel" , "Topan");