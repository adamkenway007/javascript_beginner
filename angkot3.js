// Cara Ke 1
var jmlAngkot        = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
   if (noAngkot <= 6) {
      alert('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
   } else {
      alert('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
   }
}
// Cara Ke 2
var jmlAngkot        = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
   if (noAngkot <= angkotBeroperasi) {
      alert('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
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
   |    8     |         TRUE         | Angkot No. 8 tidak beroperasi dengan baik |
   |    9     |         TRUE         | Angkot No. 9 tidak beroperasi dengan baik |
   |    10    |         TRUE         | Angkot No.10 tidak beroperasi dengan baik |
   |    11    |         FALSE        | Keluar Dari Loop!                         |
   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯