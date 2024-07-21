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
 type: 'carousel',
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
 const buttonDipepod = document.querySelector('#buttonDipepod');
 const buttonGoto = document.querySelector('#buttonGoto');
 const Bangkit = document.querySelector('#bangkit');
 const Dipepod = document.querySelector('#dipepod');
 const Goto = document.querySelector('#goto');

 if (clicked === 1) {
  buttonDipepod.classList.add('bg-secondary');
  Dipepod.classList.remove('hidden');
  Dipepod.classList.add('block');
  Bangkit.classList.remove('block');
  Bangkit.classList.add('hidden');
  Goto.classList.remove('block');
  Goto.classList.add('hidden');

  buttonBangkit.classList.remove('bg-secondary');
  buttonGoto.classList.remove('bg-secondary');
 } else if (clicked === 2) {
  buttonBangkit.classList.add('bg-secondary');
  Bangkit.classList.remove('hidden');
  Bangkit.classList.add('block');
  Dipepod.classList.remove('block');
  Dipepod.classList.add('hidden');
  Goto.classList.remove('block');
  Goto.classList.add('hidden');

  buttonDipepod.classList.remove('bg-secondary');
  buttonGoto.classList.remove('bg-secondary');
 } else if (clicked === 3) {
  buttonGoto.classList.add('bg-secondary');
  Goto.classList.remove('hidden');
  Goto.classList.add('block');
  Bangkit.classList.remove('block');
  Bangkit.classList.add('hidden');
  Dipepod.classList.remove('block');
  Dipepod.classList.add('hidden');

  buttonBangkit.classList.remove('bg-secondary');
  buttonDipepod.classList.remove('bg-secondary');
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

// Email
const form = document.getElementById('my-form');

async function handleSubmit(event) {
 event.preventDefault();
 var status = document.getElementById('my-form-status');
 var data = new FormData(event.target);
 fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
   Accept: 'application/json',
  },
 })
  .then((response) => {
   if (response.ok) {
    status.innerHTML = 'Thanks for your message!';
    status.classList.remove('hidden');
    form.reset();
   } else {
    response.json().then((data) => {
     if (Object.hasOwn(data, 'errors')) {
      status.innerHTML = data['errors'].map((error) => error['message']).join(', ');
     } else {
      status.innerHTML = 'Oops! There was a problem submitting your form';
     }
    });
   }
  })
  .catch((error) => {
   status.innerHTML = 'Oops! There was a problem submitting your form';
  });
}
form.addEventListener('submit', handleSubmit);
