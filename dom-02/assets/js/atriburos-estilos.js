let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';//con .id se puede cambiar el id de un elemento
/* $texto.style = 'color: red; font-size: 24px';  */
$texto.className = 'h3';//sobreescribe la clase del elemento seleccionado 
$texto.className = 'bg-purple h3';
$texto.classList.add('text-center');//classList agrega o rremueve clases
$texto.classList.remove('bg-purple');