window.onscroll = function () {
 const header = document.querySelector('header');
 const fixedNav = header.offsetTop;

 if (window.pageYOffset > fixedNav) {
  header.classList.remove('bg-secondary');
  header.classList.add('bg-secondary/75');
 } else {
  header.classList.remove('bg-secondary/75');
  header.classList.add('bg-secondary');
 }
};

const glide01 = new Glide('.glide-01', {
 type: 'slider',
 perView: 3,
 breakpoints: {
  600: {
   perView: 1,
  },
 },
 animationDuration: 700,
 gap: 40,
 classes: {
  activeNav: '[&>*]:bg-slate-700',
 },
});

glide01.mount();

AOS.init({
 duration: 1000,
});

function toogleHidden(clicked) {
 const buttonBangkit = document.querySelector('#buttonBangkit');
 const buttonDipepod = document.querySelector('#buttonBangkit');
 const buttonWaiter = document.querySelector('#buttonBangkit');
 const Bangkit = document.querySelector('#bangkit');
 const Dipepod = document.querySelector('#dipepod');
 const Waiter = document.querySelector('#waiter');

 if (clicked === 1) {
  buttonBangkit.classList.add('bg-secondary');
  Bangkit.classList.remove('hidden');
  Bangkit.classList.add('block');
  Dipepod.classList.remove('block');
  Dipepod.classList.add('hidden');
  Waiter.classList.remove('block');
  Waiter.classList.add('hidden');
 } else if (clicked === 2) {
  buttonDipepod.classList.add('bg-secondary');
  Dipepod.classList.remove('hidden');
  Dipepod.classList.add('block');
  Bangkit.classList.remove('block');
  Bangkit.classList.add('hidden');
  Waiter.classList.remove('block');
  Waiter.classList.add('hidden');
 } else if (clicked === 3) {
  buttonWaiter.classList.add('bg-secondary');
  Waiter.classList.remove('hidden');
  Waiter.classList.add('block');
  Bangkit.classList.remove('block');
  Bangkit.classList.add('hidden');
  Dipepod.classList.remove('block');
  Dipepod.classList.add('hidden');
 }
}

document.addEventListener('DOMContentLoaded', function () {
 toogleHidden(1); // Panggil fungsi toogleHidden dengan parameter 1 saat halaman dimuat
});

const typed = new Typed('.shadowTitle', {
 strings: ['Full-Stack Web Developer', 'UI/UX Designer'],
 typeSpeed: 100,
 backSpeed: 100,
 backDelay: 1000,
 loop: true,
});
