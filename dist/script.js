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
 const sections = [
  { id: 'dipepod', button: 'buttonDipepod' },
  { id: 'bangkit', button: 'buttonBangkit' },
  { id: 'goto', button: 'buttonGoto' },
  { id: 'ummi', button: 'buttonUmmi' },
 ];

 sections.forEach((section, index) => {
  const content = document.querySelector(`#${section.id}`);
  const button = document.querySelector(`#${section.button}`);
  const isActive = clicked === index + 1;

  content.classList.toggle('block', isActive);
  content.classList.toggle('hidden', !isActive);
  button.classList.toggle('bg-secondary', isActive);
 });
}

document.addEventListener('DOMContentLoaded', function () {
 toogleHidden(4); // Panggil fungsi toogleHidden dengan parameter 1 saat halaman dimuat
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
 let status = document.getElementById('my-form-status');
 let data = new FormData(event.target);
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
