let nombre = 'Mauricio Garcia';
let edad = 30;
let tienesTabajo = false;
let varianleNull = null;
let variableUnfined;

console.log(typeof(nombre));//string o cadena
console.log(typeof(edad));//tipo de dato number
console.log(typeof(tienesTabajo));//tipo de dato Boolean
console.log(typeof(varianleNull));//la variable esta vacia
console.log(typeof(variableUnfined));//esta vacia o indefinida

console.log(varianleNull === variableUnfined);
console.log('1' === 1);
console.log(0 === false);

console.log(typeof(10 + 10));//number
console.log(typeof('10' + 10));//string, rodo lo que se sume con un string se convierte en string
console.log(typeof(parseInt('11')));// el parseInt solo funcuiona con numeros

let numero = 10;
console.log(numero.toString());//el toString convierte numeros a strings