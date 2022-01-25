export const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

export const restar = (numero1, numero2) => {
    return numero1 - numero2;
}

export const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

export const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

export const mostrarResultado = (operacion, numero1, numero2, resultado) => {
    const respuesta = document.createElement('h3');//crea elementos dentro del html
    respuesta.textContent = `la ${operacion} del ${numero1} y el ${numero2} es ${resultado}`;
    document.body.appendChild(respuesta);//appendChild agrega hijos en algun elemento de html
}

//con export podemos exportar archivos de un archivo a otro
/* export {
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado
} */