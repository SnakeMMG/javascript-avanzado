/* codigo sincrono */

let variablesSincronas;
variablesSincronas = 10 * 3;
console.log(variablesSincronas);

/* codigo asincrono */
let variableAsincrona;

setTimeout(() => {
    variableAsincrona = 10 * 3;
}, 2000);

console.log(variableAsincrona);