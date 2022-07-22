
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
    muestraSlides(indice += n);
}

function posicionSlide(n) {
    muestraSlides(indice = n);
}
/* setInterval(function tiempo() {
    muestraSlides(indice += 1)
}, 6000); */

function muestraSlides(n) {
    let i;
    let barras = document.getElementsByClassName('barra');
    const port = document.querySelector("#portada");
    /* port.classList.toggle("imgfondo1");
    port.className = `${i}` */

    if (n > barras.length) {
        indice = 1;
    }
    if (n < 1) {
        indice = barras.length;
    }
    for (i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(" active", "");
    }

    barras[indice - 1].className += ' active';
    port.className = `portada imgfondo${indice}`
}