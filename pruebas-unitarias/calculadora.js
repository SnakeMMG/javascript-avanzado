const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

const restar = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

const mostrarResultado = (operacion, numero1, numero2, resultado) => {
    const respuesta = document.createElement('h3');//crea elementos dentro del html
    respuesta.textContent = `la ${operacion} del ${numero1} y el ${numero2} es ${resultado}`;
    document.body.appendChild(respuesta);//appendChild agrega hijos en algun elemento de html
}

module.exports = {
    sumar, restar, multiplicar, dividir
}

//con export podemos exportar archivos de un archivo a otro
/* export {
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado
} */