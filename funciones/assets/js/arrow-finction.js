/* arrow function o funcion de flecha 
son otra manera de declarar funciones */

/* function sumar(numero1, numero2){
    //operaciones que se van a realizar
    return numero1 + numero2    
    
} */

const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}
let numero1 = parseInt (prompt('numero 1'));
let numero2 = parseInt (prompt('numero 2'));
let suma = sumar(numero1, numero2);//antes de invocar una funcion de flecha, ya deven estar declaradas :-)

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);