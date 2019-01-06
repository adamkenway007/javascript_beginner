// Membuat game suwit Cara Pertama (Menggunakan if,if else,if)
// Menangkap pilihan player
var tanya = true;
while (tanya) {

var p = prompt('Pilih = gunting,kertas, batu');

// Menangksp pilihan komputer
// Membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34) {
	comp = 'gunting';
} else if(comp >= 0.34 && comp >= 0.67  ) {
	comp = 'kertas';
} else {
	comp = 'batu';	
}

var hasil = '';

var pUpperCase = p.toUpperCase();
var pLowerCase = p.toLowerCase();
// Menentukan rules
if( p == comp) {
	hasil = 'Seri sama-sama kuat!';
	console.log(hasil);
} else if ( pUpperCase == 'gunting' || pLowerCase == 'gunting' ) {
	if( comp == 'kertas') {
		hasil = 'Menang! Gunting memotong Kertas!';
		console.log(hasil);
	} else {
		hasil = 'Kalah! Batu menghancurkan Gunting!';
		console.log(hasil);
	}
} else if ( pUpperCase == 'kertas' || pLowerCase == 'kertas' ) {
	if( comp == 'batu') {
		hasil = 'Menang! Kertas membuang Batu!';
		console.log(hasil); 
	} else {
		hasil = 'Kalah! Gunting memotong Kertas!';
		console.log(hasil);
	}
} else if ( pUpperCase == 'batu' || pLowerCase == 'batu' ) {
	if ( comp == 'gunting') {
		hasil = 'Menang! Batu menghancurkan Gunting!';
		console.log(hasil);
	} else {
		hasil = 'Kalah! Kertas membuang Batu!';
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
while (tanya) {

var p = prompt('Pilih = gunting,kertas,batu');

// Menangksp pilihan komputer
// Membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34) {
	comp = 'gunting';
} else if(comp >= 0.34 && comp >= 0.67  ) {
	comp = 'kertas';
} else {
	comp = 'batu';	
}

var hasil = '';


var pUpperCase = p.toUpperCase();
var pLowerCase = p.toLowerCase();
// Menentukan rules
if( p == comp) {
	hasil = 'Seri sama-sama kuat!';
	console.log(hasil);
} else if ( pUpperCase == 'gunting' || pLowerCase == 'gunting' ) {
	hasil = ( comp == 'kertas') ? 'Menang! Gunting memotong Kertas!' :  'Kalah! Batu menghancurkan Gunting!';
	console.log(hasil);
} else if ( pUpperCase == 'kertas' || pLowerCase == 'kertas' ) {
	hasil = ( comp == 'batu') ? 'Menang! Kertas membuang Batu!' :  'Kalah! Gunting memotong Kertas!';
	console.log(hasil);
} else if ( pUpperCase == 'batu' || pLowerCase == 'batu' ) {
	hasil = ( comp == 'gunting') ? 'Menang! Batu menghancurkan Gunting!' :  'Kalah! Kertas membuang Batu!';
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