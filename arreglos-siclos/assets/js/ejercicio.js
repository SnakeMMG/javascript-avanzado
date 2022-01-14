let numeros = [1, 3, 5, 87, 645, 23, 12, 62, 45, 9, 56, 365, 321, 123, 45, 65, 231, 15, 64, 79];
let suma = 0;
for(let i = 0; i < numeros.length; i = i + 1){
   suma += numeros[i];
}
document.write('las suma es ' + suma);

promedio = suma / 20;// tambien se puede usar numeros.length para hacer la divicion 

document.write('<br>' + 'el promedio es ' + promedio);


