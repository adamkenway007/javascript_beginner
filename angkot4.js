// Cara Ke 1
var jmlAngkot        = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
   if (noAngkot <= 6) {
      alert('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
   } else if (noAngkot == 8) {
      alert('Angkot No.  '+ noAngkot + ' sedang lembur')
      console.log('Angkot No.  '+ noAngkot + ' sedang lembur')
   } else {
      alert('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
   }
}
// Apabila Ada 2 angkot lembur / lebih
// Cara Ke 1
var jmlAngkot        = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
   if (noAngkot <= 6) {
      alert('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
   } else if (noAngkot == 8) {
      alert('Angkot No.  '+ noAngkot + ' sedang lembur')
      console.log('Angkot No.  '+ noAngkot + ' sedang lembur')
   } else if (noAngkot == 10) {
      alert('Angkot No.  '+ noAngkot + ' sedang lembur')
      console.log('Angkot No.  '+ noAngkot + ' sedang lembur')
   } else {
      alert('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
   }
}
// Cara Ke 2
var jmlAngkot        = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
   if (noAngkot <= 6 && noAngkot != 5) {
      alert('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
   } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
      alert('Angkot No.  '+ noAngkot + ' sedang lembur')
      console.log('Angkot No.  '+ noAngkot + ' sedang lembur')
   } else {
      alert('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
   }
}

   /* Tabel Penelusuran = trace table / dry-run test

   ______________________________________________________________________________
   | noAngkot | noAngkot<=jmlAngkot? |             Output                        |
   |¯¯¯¯¯¯¯¯¯¯|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|
   |    1     |         TRUE         | Angkot No. 1 beroperasi dengan baik       |
   |    2     |         TRUE         | Angkot No. 2 beroperasi dengan baik       |
   |    3     |         TRUE         | Angkot No. 3 beroperasi dengan baik       |
   |    4     |         TRUE         | Angkot No. 4 beroperasi dengan baik       |
   |    5     |         TRUE         | Angkot No. 5 beroperasi dengan baik       |
   |    6     |         TRUE         | Angkot No. 6 beroperasi dengan baik       |
   |    7     |         TRUE         | Angkot No. 7 tidak beroperasi dengan baik |
   |    8     |         TRUE         | Angkot No. 8 sedang lembur                |
   |    9     |         TRUE         | Angkot No. 9 tidak beroperasi dengan baik |
   |    10    |         TRUE         | Angkot No.10 sedang lembur                |
   |    11    |         FALSE        | Keluar Dari Loop!                         |
   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   ################################################################################
*/
//--Alternatif
// Cara 1
var angka = prompt('masukkan angka :');
// menggunakan Operator 'Sama dengan' '==' untuk membandingkan value saja
if( angka == 1) {
   alert('anda memasukkan angka 1');
} else if( angka == 2) {
   alert('anda memasukkan angka 2');
} else if( angka == 3) {
   alert('anda memasukkan angka 3');
} else {
   alert('anda yang anda masukkan salah');
}
// Cara 2
var angka = prompt('masukkan angka :');
// menggunakan Operator 'Strict sama dengan' '===' untuk membandingkan value & tipe data sekaligus
if( angka === '1') {
   alert('anda memasukkan angka 1');
} else if( angka === '2') {
   alert('anda memasukkan angka 2');
} else if( angka === '3') {
   alert('anda memasukkan angka 3');
} else {
   alert('anda yang anda masukkan salah');
}
// Memaksa value menjadi Integer
var angka = parseInt(prompt('masukkan angka :'));
// parseInt = memaksa nilai menjadi integer
if( angka === 1) {
   alert('anda memasukkan angka 1');
} else if( angka === 2) {
   alert('anda memasukkan angka 2');
} else if( angka === 3) {
   alert('anda memasukkan angka 3');
} else {
   alert('anda yang anda masukkan salah');
}
