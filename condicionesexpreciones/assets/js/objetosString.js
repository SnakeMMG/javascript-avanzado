let cadena1 = 'hola';
console.log(cadena1);

let cadena2 = new String('Adios');//Objeto String
console.log(cadena2);

/* let arreglo = new Array();
console.log(arreglo); */

//includes() nusca una cadena en otra y regresa true o false

console.log(cadena2.toLocaleLowerCase().includes('a'));
//convierte en minusculas a mayusculas
console.log(cadena2.toLocaleLowerCase());
console.log(cadena2.toLocaleUpperCase());

/* LOS METODOS SIRMPRE DEVEN DE LLAVER PARENTECIS ()
EJEMPLO .log() aunque no lleven alguna variable */

//cohersion y convercion

//cohersion - JavaScript convierte en automatico un de dato en otro

console.log(cadena1.toLowerCase());

/* Funcion que recibe una palabra y la regresa invertida */
/* let palabra = 'hola mundo';
let arreglo = palabra.split('');
console.log(arreglo);
console.log(arreglo.reverse().join('')); */


function invertirPalabra(cadena){
    let arreglo = cadena.split('').reverse().join('');//convierte la cadena en arreglo, invierte el arreglo en los elementos de un arreglo y regresa un sprint
    return document.write('tu palabra invertida es ' + arreglo);

}
let cadena = prompt('Ingresa una palabra ');

invertirPalabra(cadena);