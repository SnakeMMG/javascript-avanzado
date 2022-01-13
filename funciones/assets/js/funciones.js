/* funcion
     es un bloque de codigo reutilizable 
     puede tyener o no parametros de entrada y puede devolver o no un valor */

     function sumar(numero1, numero2){
        //operaciones que se van a realizar
        return numero1 + numero2    
        console.log()
    }

    function restar(marrano1, marrano2) {
        document.write(`la resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
    }
    let numero1 = parseInt (prompt('numero 1'));
    let numero2 = parseInt (prompt('numero 2'));
    let suma = sumar(numero1, numero2);


    //template strings: son codenas de texto pero tambie se puede usar codigo de javascript
    // ` backstick o comilla invertida
    document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);//con comilla invertida de puede hacer uso de codigo de html 
    restar(numero1, numero2);
    document.write('la suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma);
