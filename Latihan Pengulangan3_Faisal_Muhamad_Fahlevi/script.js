const N = prompt ("Masukan anak ayam: ");
console.log(" Anak ayam ada "+ N);

for(let i = N; i >=1; i--) {
    if(i===1) {
        console.log(" Anak ayam turun "+ i +" mati satu tinggal induknya ");
    } else {
        console.log(" Anak ayam turun "+ i +" mati satu tinggal "+(i-1));
    }
}





