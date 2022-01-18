/* let $titulo = document.getElementById('titulo');
console.log(titulo.textContent);
titulo.textContent = 'Titulo escrito desde js'; */

let $titulo = document.querySelector('#titulo');
titulo.textContent = 'Titulo escrito desde js';

/* con .querySelector podemos selecionar estos tipos de atributos
.clase 
#id
etiqueta */

let $parrafo = document.querySelector('p');//sempre regresa el primer elemento que encuentre 
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');//devuelve un arreglo con todos loes elementos que encuentre con el nombre de la etiqueta
console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'este es un subtitulo de js';

//document.body.append agrega un elemento dentro del body al final
document.body.insertAdjacentElement('afterend',subtitulo);
$titulo.body.insertAdjacentElement('afterend',subtitulo)
$titulo.remove();

let $contenido = document.querySelector('#contenido');
/* //console.log($contenido.textContent = '<br>');solo nos permite agregar texto al html
console.log($contenido.innerHTML = '<br>' );//nos permite agregar codigo html, afecta a los hijos del elemnto
console.log($contenido.outerHTML = 'hola');//afecta desde el padre que es el elemento, y a los hijos
 */
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);

