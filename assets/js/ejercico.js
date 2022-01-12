let titulo = document.getElementById('titulo');// guarda en una variable algun elemento de html, mediante la id del elemento

function canbia(){
    
    let nuevo = prompt('¿Cual es tu nombre?');
    titulo.textContent = ("Gusto en saludarte, "  + nuevo);
}