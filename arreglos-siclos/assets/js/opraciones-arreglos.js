let numeros = [1, 3, 5, 87, 645, 23, 12, 62, 45,];//arreglo


// forEach recorre todos los elementos de un arreglo de forma automatica, la funcion dentro de un arreglo, solo vive en ese arreglo, y despues se desecha de la memoria

numeros.forEach(marrano => {
    document.write(marrano + ', ');
});

/* numeros.forEach(function(marrano){
    document.write(marrano + ', ');
}); */


let numeros2 = numeros.map(function(marrano){
    return marrano * 2;
});
/* el .map crea un arreglo apartir de un arreglo, tambien se puede agregar modificaciones al elemento  */

document.write('<br/>' + numeros2);

/* let frutas = ['mango', 'uva', 'naranja'];
let frutas2 = frutas;

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');

frutas2.push('pera');

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>'); */

/* let frutas = ['mango', 'uva', 'naranja'];
let frutas2 = frutas.map(function(elemento) {
    return elemento
});

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');

frutas2.push('pera');

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>'); */

/* Includes, sos permite saber si un elemento existe en un arreglo o no */
document.write('<br/>' + numeros.includes(645) + '<br/');

/* .filter recorre todos los elementos de un arreglo, y si estos elementos cumplen con la condicion que se le impuso, los gregara a un nuevo arreglo */

let numerosPares = numeros.filter((elemento) => {
    /* if(elemento % 2 == 0) {
        return true;
    } else{
        return false;
    } */
    console.log(elemento % 2 == 0);

    return elemento % 2 == 0; 
    
});

document.write('<br>' + numerosPares + '<br>')

let frutas = ['Mango', 'Uva', 'Naranja', 'Mandarina', 'Manzana', 'Aguacate', 'Sandia'];
let frutasFiltro = frutas.filter((fruta) => {
    /* if(fruta.includes('i') == true) {
        return true;
    } */
    return fruta.toLowerCase().includes('na');
    //toLowerCase() convierte las mayusculasa minusculas y vicev, toUpperCase() hace lo contrario
    
});
document.write('<br>' + frutasFiltro + '<br>');

/* includes nos ayuda a saber que elementos del arreglo incluyen la o las letras que yo agrege ensegida de includes */

/* sort() arregla los elementos de un arreglo, pero de mala manera  */
let otrosNumeros = [9, 56, 365, 321, 123, 45, 65]
//document.write('<br>' + otrosNumeros.sort() + '<br>');

/* reverse() cambia los elementos de posicion */

document.write('<br>' + otrosNumeros.reverse() + '<br>');

/* find.() obtiene el primer elemento que cumpla con la condicion*/
let frutaEncontrada = frutas.find((elemento) =>{
    return elemento.toLowerCase().includes('ma');
});

document.write('<br>' + frutaEncontrada + '<br>');