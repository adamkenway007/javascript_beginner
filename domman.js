// manipulasi '<h1 id="judul">Hello World</h1>'
/*const judul 	= document.getElementById('judul'); 
judul.innerHTML = '<em>Adam Backtiar Azhari</em>';*/

// menghilangkan element pada section#a dan merubahnya
// const sectionA  = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

//---------------------------------------------------------------------//

/*const judul = document.querySelector("#judul");
judul.style.color = 'lighblue';
judul.style.backgroundColor = 'salmon';*/

// set attribut menambahkan attribute id pada html
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'adam');

const a = document.querySelector('section#a a');
a.setAttribute('id', 'link');
// a.getAttribute('href');
// a.removeAttribute('href');

// Menambahkan class baru tanpa menimpanya
const p2 = document.querySelector('.p2');
// p2.classList ('class', 'value: DOMString')
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label');

// >> document.body
// <- <body>
// >> document.body.style.backgroundColor = 'lightblue'

// <- "lightblue"

// p2.classlist.contains('label');
// p2.classlist.replace('label', 'selesi');