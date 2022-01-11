// // dom manipulasi
// // manipulasi element
// // manipulasi style
// const judul = document.getElementById('judul');
// judul.style.backgroundColor='red';
// judul.style.fontSize='40px';
// // manipulasi innerHtml
// judul.innerHTML='<em>Ini Saya Pake JS</em>';

// manipulasi setAttribute()
// atribut itu yg ada di dalam elemntnya misalnya <h1 class="budi" href=""> class dan href itu dinamakan atribut
const judule = document.getElementsByTagName('h1')[0];
judule.setAttribute('name', 'aing');
const a = document.querySelector('section#a a');
a.setAttribute('name', 'setan');
a.getAttribute('name', 'setan');
a.removeAttribute('name', 'setan');

// manipulasi classList()
//element.classList.add() untuk menambahkan
//element.classList.remove() untuk menghapus
//element.classList.toogle() jika si element sudah punya clas tertntu bakal di hapus, begitu sebaliknya
//element.classList.item() untuk mengetahui nama class dengan index sesuai yg di minta 
//element.classList.contains() untuk menambahkan

const p2 = document.querySelector('.p2');
p2.classList.add('label') //otomatis nambah di dalam kelasnya
p2.classList.remove('label') //otomatis menghapus di dalam kelasnya
p2.classList.toggle('label') //otomatis menghapus di dalam kelasnya ketika ada,bgtu sebaliknya (menhasilkan nilai boolean)
p2.classList.item(2)// untuk mengetahui class apa di index ke 2
p2.classList.contains('tiga')//ini nanya apakah ada claas dgn nama 3, kalo ada akan di tampilkan kalo tidak gk akan di tampilkan
p2.classList.replace('label', 'tiga')// kalo ini untuk mengganti value di dalam kelasnya
// contohnya saya ingin mereplace label pada kelas dengan nama tiga, nah maka nanti label akan diganti jadi tiga


// manipulsa node
// contohnya kita mau nambahin element p baru di section a
// logikanya
// membuat element pnya dulu
const pBaru = document.createElement('p');
// lalu membuat isi dari elemnt pnya
const teksBaru = document.createTextNode('anjay paragraf anyar');
// nah ketika sudah di buat semua baru kita rangkai
pBaru.appendChild(teksBaru);
// nah ketika udah di rangkai baru kita tinggal taro mau dmna
// misal kita mau taro di section a
// berati kita tangkap dulu section a nya
const sectionA = document.getElementById('a');
// nah ketika sudah di tangkap baru kita bisa simpan atau taro deh
// appendchild untuk simpan di akhir
sectionA.appendChild(pBaru);

// bisa juga kita taro sesuai keinginan kita jd gk harus di akhir
// nah caranya pake insertBefore
// misal kita pgen bkin li baru di section b setelah li yg ke satu atau sebelum li2
// logikanya kita buat dlu li baru nya
const liBaru = document.createElement('li')
// lalu bikin tulisan di dalamnya apa
const teksLiBaru = document.createTextNode('Ini item baru');
// setelah itu kita baru rangkai lagi
liBaru.appendChild(teksLiBaru);
// nah ketika sudah di rangkai kita tinggal taro, misal kita mau taro li barunya di section b
// sebelum li yg ke 2
// kita tangkap dlu parent dari linya
const ul = document.querySelector('section#b ul');
// nah lalu kita panggil juga li 2nya
const li2 = ul.querySelector('li:nth-child(2)');
// nah baru kita simpan deh menggunakan insertBefore
ul.insertBefore(liBaru, li2);


// kita akan menghapus node
// kita pangil dlu sectionnya contoh kita mau hapus tag atau element a di section a
// caranya kita panggil dlu section a nya
// kita pangil tag a nya
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link)

// selanjutnya kita bisa mereplace node
// contohnya kita akan mereplace paragraf pada section b
// logikanya pertama kita panggil dlu parent si paragraf td
const sectionB = document.getElementById('b');
// nah baru kita panggil si paragrapnya itu 
const p4 = sectionB.querySelector('p');
// nah baru kita bkin elemnt yg mau kita replacekan
const h1B= document.createElement('h1')
// lalu kita buat teks nya atau isinanya
const teksH1B = document.createTextNode('INI BUKU AING');
// lalu kita rangkai 
h1B.appendChild(teksH1B);
// setelah itu baru kita replace
sectionB.replaceChild(h1B, p4)

pBaru.style.backgroundColor='lightgreen';
liBaru.style.backgroundColor='lightgreen';
h1B.style.backgroundColor='lightgreen';