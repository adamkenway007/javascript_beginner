// Membuat game suwit Cara Pertama (Menggunakan if,if else,if)
// Menangkap pilihan player
function getPilihanComputer() {

	const comp = Math.random();

	if(comp < 0.34) return 'gajah';
	if(comp >= 0.34 && comp >= 0.67  ) return 'orang';
	return 'semut';	
}

function getHasil(comp, player) {

	// Menentukan rules
	if ( player == comp) return 'Seri';
	if ( player == 'gajah' ) 
 	 return ( comp == 'orang') ? 'Menang' :  'Kalah';
	if ( player == 'orang' ) 
	 return ( comp == 'semut') ? 'Menang' :  'Kalah';
	if ( player == 'semut' ) 
	 return ( comp == 'gajah') ? 'Menang' :  'Kalah';
}

function putar() {
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if( new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/suwit/' + gambar[i++]  + '.png');
		if( i == gambar.length) i = 0;
	}, 100)
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function(){
	const pilihanComputer = getPilihanComputer();
	const pilihanPlayer = pGajah.className;
	const hasil = getHasil(pilihanComputer, pilihanPlayer);
	
	putar();

	setTimeout(function() {
		const imgComputer = document.querySelector('.img-computer');
		imgComputer.setAttribute('src', 'img/suwit/' + pilihanComputer + '.png');

	const info = document.querySelector('.info');
	info.innerHTML = hasil;
	 }, 1000);
});

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function(){
	const pilihanComputer = getPilihanComputer();
	const pilihanPlayer = pOrang.className;
	const hasil = getHasil(pilihanComputer, pilihanPlayer);
	
	putar();

	setTimeout(function() {
		const imgComputer = document.querySelector('.img-computer');
		imgComputer.setAttribute('src', 'img/suwit/' + pilihanComputer + '.png');

	const info = document.querySelector('.info');
	info.innerHTML = hasil;
	 }, 1000);
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function(){
	const pilihanComputer = getPilihanComputer();
	const pilihanPlayer = pSemut.className;
	const hasil = getHasil(pilihanComputer, pilihanPlayer);
	
	putar();

	setTimeout(function() {
		const imgComputer = document.querySelector('.img-computer');
		imgComputer.setAttribute('src', 'img/suwit/' + pilihanComputer + '.png');

	const info = document.querySelector('.info');
	info.innerHTML = hasil;
	 }, 1000);
});
