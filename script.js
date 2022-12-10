const btnMobile = document.querySelector('.btn-mobile');
const navMobile = document.querySelector('.nav-mobile');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');

btnMobile.addEventListener('click', function () {
  btnClose.classList.toggle('hidden');
  btnOpen.classList.toggle('hidden');
  navMobile.classList.toggle('showing');
});
