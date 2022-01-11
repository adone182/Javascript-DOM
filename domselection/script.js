// // document.getElementById() -> Mengembalikan/hasil Element
// const judul = document.getElementById('judul');
// // bisa mengubah colornya
// judul.style.color='red';
// // bisa ngeubah backgroundnya
// judul.style.backgroundColor='salmon';
// // bisa ubah tulisanya
// judul.innerHTML='Ini aku ubah pake JS tau!!'

// document.getElementsByTagName() -> hasil HTMLCollection
// const p = document.getElementsByTagName('p')
// p.style.fontSize='20px'; //ini gk bisa karena menghasilkan Htmlcollection jdi harus di panngil indexnya
// p[1].style.fontSize='20px'; //kalo gini bisa karena di panggil indexnya karena tagname hasilkan elemnt jdi isinya bnyk kaya array
// bisa juga di buat perulangan
// for(let i=0; i < p.length; i++){
//         p[i].style.backgroundColor='lightblue';
//         p[i].style.color='salmon';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize='50px';

// // document.getElementByClassName()->hasil HTMLCOlections
// const p1 = document.getElementsByClassName('p1')[0];
// p1.style.backgroundColor='#ccc';
// p1.innerHTML='Ini paragraf 1;'

// document.queryelector()->hasil Node
const p4 = document.querySelector('#b p');
p4.innerHTML='ini budi ani';
p4.style.color='green'

const li2= document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor='orange';

// document.querySelectorAll()->hasil node list
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.color='red'    
}