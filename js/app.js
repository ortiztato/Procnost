const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const contactbtn = document.querySelector("#contactbtn");
const productosbtn = document.querySelector("#productosbtn");


function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
contactbtn.addEventListener("click", toggleMenu);
productosbtn.addEventListener("click", toggleMenu);


let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
  muestraSlides(indice += n);
}

function posicionSlide(n) {
  muestraSlides(indice = n);
}
setInterval(function tiempo() {
  muestraSlides(indice += 1)
}, 6000);
function muestraSlides(n) {
  let i;
  let slides = document.getElementsByClassName('miSlider');
  let barras = document.getElementsByClassName('barra');

  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace(" active", "");
  }

  slides[indice - 1].style.display = 'block';
  barras[indice - 1].className += ' active';

}