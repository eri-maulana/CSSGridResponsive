const nav = document.querySelector('nav ul');
const tombol = document.querySelector('.menu-toggle input');
tombol.addEventListener('click',function() {
   nav.classList.toggle('slide');
});