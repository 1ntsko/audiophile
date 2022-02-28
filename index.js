const x = document.getElementById('close');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');

const dropdownBasket = document.querySelector('.basket__dropdown');
const overlay = document.querySelector('.overlay');

const basket = document.getElementById('basket');

x.addEventListener('click', () => {
  nav.style.left = '-100%';
});

burger.addEventListener('click', () => {
  nav.style.left = '0';
});

basket.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
});
