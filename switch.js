// Switch
//-- Penggunaan switch default
// Switch
//-- Penggunaan switch default
var angka = prompt('masukkan angka :');
// parseInt = memaksa nilai menjadi integer
switch (angka) {
	case '1':
		alert('anda memasukkan angka 1');
		break;
	case '2':
		alert('anda memasukkan angka 2');
		break;
	case '3':
		alert('anda memasukkan angka 3');
		break;
	case '4':
		alert('anda memasukkan angka 4');
		break;
	default:
		alert('angka yang anda masukkan salah');
		break;
}

//----------------------------------------------
//-- Penggunaan switch menggunakan parseInt
var angka = parseInt(prompt('masukkan angka :'));
// parseInt = memaksa nilai menjadi integer
switch (angka) {
	case 1:
		alert('anda memasukkan angka 1');
		break;
	case 2:
		alert('anda memasukkan angka 2');
		break;
	case 3:
		alert('anda memasukkan angka 3');
		break;
	case 4:
		alert('anda memasukkan angka 4');
		break;
	default:
		alert('angka yang anda masukkan salah');
		break;
}
//----------------------------------------------
//-- Contoh Menggunakan String
// Cara 1
var item = prompt('masukkan nama makanan / minuman : \n (Ex. Nasi, Daging, Susu, Hamburger, Softdrink)');

switch (item) {
	case 'nasi':
		alert('makanan / minuman Sehat!');
		break;
	case 'daging':
		alert('makanan / minuman Sehat!');
		break;
	case 'susu':
		alert('makanan / minuman Sehat!');
		break;
	case 'hamburger':
		alert('makanan / minuman Tidak Sehat!');
		break;
	case 'softdrink':
		alert('makanan / minuman Tidak Sehat!');
		break;
	default:
		alert('tidak ada menu yang anda maksud');
		break;
}
// Cara 2
var item = prompt('masukkan nama makanan / minuman : \n (Ex. Nasi, Daging, Susu, Hamburger, Softdrink)');

switch (item) {
	case 'nasi':
	case 'daging':
	case 'susu':
		alert('makanan / minuman Sehat!');
		break;
	case 'hamburger':
	case 'softdrink':
		alert('makanan / minuman Tidak Sehat!');
		break;
	default:
		alert('tidak ada menu yang anda maksud');
		break;
}