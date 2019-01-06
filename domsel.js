// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul')
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Adam Backtiar Azhari';

// document.getElementsBytagName() -> HTMLCollections
/*const p = document.getElementsByTagName('p');
for ( let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';	
}*/

//p[1].style.backgroundColor = 'lightgreen';
//p[2].style.backgroundColor = 'lightblue';
//p[3].style.backgroundColor = 'lightpink';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollection
/*const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';*/

// document.querySelector() -> Element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

/*const p = document.querySelector('p');
p.innerHTML = 'Ini diubah melalui javascript';*/
// hanya element pertama saja yang berubah apabila menggunakan
// querySelector

// document.querySelectorAll() -> nodeList
const p = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++ ){
     p[i].innerHTML = 'Ini diubah melalui javascript';
     p[i].style.backgroundColor = 'lightblue';
}

//---------------------------------------------------------------//
//					Mengubah node root                           //
//---------------------------------------------------------------//

/*const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p' );
p4.style.backgroundColor = 'orange';*/

//cara alternate
/*const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';*/