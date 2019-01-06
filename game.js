// Membuat game suwit Cara Pertama (Menggunakan if,if else,if)
// Menangkap pilihan player
var tanya = true;
while (tanya) {

var p = prompt('Pilih = gajah,semut, orang');

// Menangksp pilihan komputer
// Membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34) {
	comp = 'gajah' || 'Gajah';
} else if(comp >= 0.34 && comp >= 0.67  ) {
	comp = 'orang' || 'Orang';
} else {
	comp = 'semut' || 'Semut';	
}

var hasil = '';


var pUpperCase = p.toUpperCase();
var pLowerCase = p.toLowerCase();
// Menentukan rules
if( p == comp) {
	hasil = 'Seri sama-sama kuat!';
	console.log(hasil);
} else if ( pUpperCase == 'gajah' || pLowerCase == 'gajah' ) {
	if( comp == 'orang') {
		hasil = 'Menang gajah mengijak orang!';
		console.log(hasil);
	} else {
		hasil = 'Kalah semut masuk ke dalam telinga gajah!';
		console.log(hasil);
	}
} else if ( pUpperCase == 'orang' || pLowerCase == 'orang' ) {
	if( comp == 'semut') {
		hasil = 'Menang orang menginjak semut!';
		console.log(hasil); 
	} else {
		hasil = 'Kalah gajah mengijak orang!';
		console.log(hasil);
	}
} else if ( pUpperCase == 'semut' || pLowerCase == 'semut' ) {
	if ( comp == 'gajah') {
		hasil = 'Menang semut masuk ke dalam telinga gajah!';
		console.log(hasil);
	} else {
		hasil = 'Kalah orang menginjak semut!!';
		console.log(hasil);
	}
} else {
	hasil = 'Memasukkan pilihan yang salah!';
	console.log(hasil);
}

// tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu, ' + hasil);

tanya = confirm('ulangi lagi?');
}
alert('terima kasih sudah bermain');
//------------------------------------------------------------------------------------------------//
// Membuat game suwit Cara Kedua Menggunakan (ternary kondisional/pengkondisian
// Menangkap pilihan player
var tanya = true;
tanya = tanya.toLowerCase();
while (tanya) {

var p = prompt('Pilih = gajah,semut, orang');

// Menangksp pilihan komputer
// Membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34) {
	comp = 'gajah';
} else if(comp >= 0.34 && comp >= 0.67  ) {
	comp = 'orang';
} else {
	comp = 'semut';	
}

var hasil = '';

var pUpperCase = p.toUpperCase();
var pLowerCase = p.toLowerCase();
// Menentukan rules
if( p == comp) {
	hasil = 'Seri sama-sama kuat!';
	console.log(hasil);
} else if ( pUpperCase == 'gajah' || pLowerCase == 'gajah' ) {
	hasil = ( comp == 'orang') ? 'Menang gajah mengijak orang!' :  'Kalah semut masuk ke dalam telinga gajah!';
	console.log(hasil);
} else if ( pUpperCase == 'orang' || pLowerCase == 'orang' ) {
	hasil = ( comp == 'semut') ? 'Menang orang menginjak semut!' :  'Kalah gajah mengijak orang!';
	console.log(hasil);
} else if ( pUpperCase == 'semut' || pLowerCase == 'semut' ) {
	hasil = ( comp == 'gajah') ? 'Menang semut masuk ke dalam telinga gajah!' :  'Kalah orang menginjak semut!!';
	console.log(hasil);
} else {
	hasil = 'Memasukkan pilihan yang salah!';
	console.log(hasil);
}

// tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu, '+ hasil);

tanya = confirm('ulangi lagi?');
}
alert('terima kasih sudah bermain');