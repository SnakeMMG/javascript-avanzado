/* formas para declarar arreglos */

/* const numeros = [5]; */
let numeros = new Array();
numeros = [1, 3, 5, 87, 645, 23, 12];

//con la propiedad lengthpodemos obtener los numeros de arreglos

//en el bucle for i++ significa que i va a avanzar de 1 en 1, avrevia i = i + 1, si quiciera que avanzara de 2 en 2, ejemplo: i = i + 2 
for(let i = 0; i < numeros.length; i = i + 1){
      /*  document.write(`${numeros[i]}<br/>`);
 */
       const numero = numeros[i];
       document.write(numero + '<br/>');
}