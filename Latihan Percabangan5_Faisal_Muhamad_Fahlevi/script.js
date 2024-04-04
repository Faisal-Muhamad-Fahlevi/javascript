const nama = prompt("Masukan Nomor Bulan:")

let Nama_Bulan;

switch (nama){
    case "1":
        Nama_Bulan = "Januari";
        break;
    case "2":
        Nama_Bulan = "Februari";
        break;
    case "3":
        Nama_Bulan = "Maret";
        break;
    case "4":
        Nama_Bulan = "April";
        break;
    case "5":
        Nama_Bulan = "Mei";
        break;
    case "6":
        Nama_Bulan = "Juni";
        break;
    case "7":
        Nama_Bulan = "Juli";
        break;
    case "8":
        Nama_Bulan = "Agustus";
        break;
    case "9":
        Nama_Bulan = "September";
        break;
    case "10":
        Nama_Bulan = "Oktober"; 
        break;
    case "11":
        Nama_Bulan = "November";
        break;
    case "12":
        Nama_Bulan = "Desember";
        break;     
    defalut:
    console.log(" Bulan Tidak tersedia");  
}

console.log("Bulan ke " + " " + nama + " adalah " + " " + Nama_Bulan)