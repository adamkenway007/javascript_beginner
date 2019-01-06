/*const h1 = document.querySelector('h1');
h1.style.color = 'blue';


function tombolUbahWarna() {
	body.style.backgroundColor = 'pink';
}

const body = document.querySelector('body');
body.onclick = tombolUbahWarna;*/
const tombolUbahWarna = document.getElementById('tombolUbahWarna');
tombolUbahWarna.onclick = function() {
	// Cara 1
	// document.body.style.backgroundColor = 'lightblue';
	// Cara 2
	// document.body.setAttribute('class', 'biru-muda');
	// Cara 3
	document.body.classList.toggle('biru-muda');

}

const tRandomColor = document.createElement('button');
const teksRandButton = document.createTextNode('Acak Warna');
tRandomColor.appendChild(teksRandButton);
tRandomColor.setAttribute('type', 'button');
tombolUbahWarna.after(tRandomColor);

tRandomColor.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';	
});

const Redslider   = document.querySelector('input[name=Redslider]');
const Greenslider = document.querySelector('input[name=Greenslider]');
const Blueslider  = document.querySelector('input[name=Blueslider]');

Redslider.addEventListener('change', function(){
	const r = Redslider.value;
	const g = Greenslider.value;
	const b = Blueslider.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

Greenslider.addEventListener('change', function(){
	const r = Redslider.value;
	const g = Greenslider.value;
	const b = Blueslider.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

Blueslider.addEventListener('change', function(){
	const r = Redslider.value;
	const g = Greenslider.value;
	const b = Blueslider.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

document.body.addEventListener('mousemove', function(event){
	// posisi mouse
	// console.log(event.clientX)
	// console.log(event.clientY)
	// ukuran browser
	// console.log(window.innerWidth)
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});