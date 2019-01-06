// const close = document.querySelectorAll('.close');

// Cara Ke 1
//     for ( let i = 0; i < close.length; i++) {
//         close[i].addEventListener('click', function(e){
//             e.target.parentElement.style.display = 'none';
//             console.log(e);
//     });    
// }

// Prevent default = sebuah method yang ada di dalam object event
// yang bertujuan menghentikan aksi default yang dilakukan oleh sebuah element

// Cara 2 Alternatif tanpa penghitungan index for untuk cari literator
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });  
// });

// Cara 3
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if( e.target.className = 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});

// Ex Sibling
// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling);

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         e.target.style.display = 'none';
//         e.preventDefault();
//     });
// });