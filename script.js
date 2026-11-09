const input = document.querySelector('#yozuv');
const tugma = document.querySelector('#tugma');
const natija = document.querySelector('#chiqarish');

tugma.addEventListener('click', () => {
  natija.innerHTML = input.value;
});