const p3 = document.querySelector('.p3');

function ubahWarnaP2(){
	p2.style.backgroundColor = 'lightblue';	
}

function ubahWarnaP3(){
	p3.style.backgroundColor = 'lightgreen';	
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const liBaru = document.createElement('li');
	const teksLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);
});

// Event Handler akan menimpa event yang sama apabila ada sehingga 
// hanya event yang terbaru yang berjalan 

const p1 = document.querySelector('.p1');

// p1.onclick = function() {
// 	p1.style.backgroundColor = 'lightblue';
// }

// p1.onclick = function() {
// 	p1.style.color = 'red';
// }


// addEventListener akan menimpa event 
// yang bisa berjalan beriringan apabila nama event nya yang sama 

p1.addEventListener('dblclick', function(){
	p1.style.backgroundColor = 'lightblue';	
});

p1.addEventListener('click', function(){
	p1.style.color = 'red';	
});

p1.addEventListener('mouseenter', function(){
	p1.innerHTML = 'Challenge';	
});

p1.addEventListener('mouseleave', function(){
	p1.innerHTML = 'Paragraf 1';	
});

