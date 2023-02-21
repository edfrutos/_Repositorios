// Agregar un evento de clic a un botón
var boton = document.querySelector('button');
boton.addEventListener('click', function() {
alert('Gracias por hacer clic en el botón!');
});

// Ocultar y mostrar contenido al hacer clic en un botón
var botonMostrar = document.querySelector('#mostrar');
var botonOcultar = document.querySelector('#ocultar');
var contenido = document.querySelector('#contenido');

botonMostrar.addEventListener('click', function() {
contenido.style.display = 'block';
});

botonOcultar.addEventListener('click', function() {
contenido.style.display = 'none';
});

// Agregar una animación de desplazamiento suave a los enlaces de anclaje
var enlaces = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < enlaces.length; i++) {
enlaces[i].addEventListener('click', function(evento) {
evento.preventDefault();
var destino = this.getAttribute('href');
var destinoElemento = document.querySelector(destino);

window.scroll({
  behavior: 'smooth',
  left: 0,
  top: destinoElemento.offsetTop
});
});
}