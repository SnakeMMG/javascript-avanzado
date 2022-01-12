/* let miObjeto = {
    //pares de clave valor
    nombre: 'Mauricio Garcia';

} */
let nombre = 'Mauricio Garcia';
let edad = 30;
let direccion = 'chimalpopoca, CDMX';
let numero =  123456789;  

console.log(nombre);

let persona = {
    nombre: { 
        seudonimo: 'Snake MMG',
        apellido: 'MMG',
        nombre: 'snake'
    },
    edad: 30,
    direccion: {
        ciudad: 'chimalpopoca, CDMX',
        estado: 'CDMX'
    },
    numero: [ 
        123456789,
        321654984,
    ]
}
/* arreglos vs objetos
ambos sirven para almacenar informacion
['valor1', 'valor2', 'valor3'];
arreglo[1];

let otroObjeto = {
    nombre: 'asdada',
    apellidos: 'sdafasd'
}
otroObjeto.nombre; */

console.log(persona.nombre);

let pcMasteRace = {
    prosesador: ['core i9 12900k', 'ryzen 7 5800x', 'core i7-12700k'],
    gpu: { 
        nvidia: ['RTX 3090TI', 'RTX 3080TI', '3070TI']
    },
    ram: 'Gskill Trident Z RGB 32 gb',
    fuente: 'EVGA Supernova 1000 P3, 80 Plus Platinum 1000W',
    almacenamiento: 'SAMSUNG 980 Pro 1TB PCIe NVMe Gen4 SSD m.2',
    tarjetaMadre: 'Asus Motherboard Z690',
    gabinete: 'NZXT CA-H510E-W1 H510',
    perifericos: ['monitor benq MOBIUZ EX2710 144Hz IPS', 'Teclado K70 RGB MK 2 Mechanical', 'raton g502 lightspeed'],
    juegos: {
        imprescindible: 'DOOM Eternal',
        imprescindible2: 'Dark souls',
        juegaso: 'God of war',
        pasarElRato: 'warzone'
}
}
console.log(pcMasteRace);
