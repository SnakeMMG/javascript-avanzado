/* operadores aritmeticos */
// + - / * () %(modulo nos permite obtener el reciduo)
/* estos operadores tiene un jerarquia de orden  */
let operaciones = 3 * 5 + (10 - 5);

console.log(operaciones);

let operaciones2 = 3 - 5 / 2 * 4;
console.log(operaciones2);

/*operadores relacionales
 <, >, >=, <=, ==, ===, !=, !==,estos operadores entregan resultados de tipo boolean */

console.log(7 < 7);//no estamos incliyendo el numero a comparar
console.log(7 <= 7);//incluyendo el numero a comparar

console.log(7 == '7');//compara el valor no el tipo de dato

console.log(7 === '7');//aqui se compara el tipo de dato y el valor

console.log(7 != '7');
console.log(7 !== '7');

/* Incremanto y Decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento += 5;//incremento = incremento + 5;
console.log(incremento);//incremento = 10

incremento -= 5;
//incremento = incremento - 5;
console.log(incremento); //incremento = 5


incremento *= 5;
console.log(incremento)//incremento = 25

incremento /= 5;
console.log(incremento);//incremento = 5

/* Operador unario, Inclremento y Decremento
++, --
sumar uno, o restar uno*/

let suma = 0;
console.log(suma);//sumar = 0
suma++;// ++ sumara uno a la variable
console.log(suma);//suma = 1
suma++;// ++ sumara uno a la variable
console.log(suma);//suma = 2
suma--;//-- le resta uno a la variable
suma--;
console.log(suma);//suma = 0

/*  */
for(let i = 0; i < 10; i++){
    /* codigo */
}
/* ++ antes de la variable = preincremento - primero modifica el valor y despues hace uso de la variable
   variable ++ = postincremento - usando la variuable y despues hace el incremento */
let num = 5;
console.log(++num);//6
console.log(num++);//6
console.log(num);//7

for(let i = 0; i < 10; i++){
    //iteracion(hace referencia a una vuelta
    //primera iteracion, se detiene
    console.log('esto es el ciclo padre')
    for(let j = 0; j < 5; j++){
        //hacesus iteraciones(repeticiones) propias
        console.log('esto es el ciclo hijo')
    }
}







