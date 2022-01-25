const {sumar} = require('./calculadora');

describe('pruebas en el componente calculadora', () => {

    test('prueba en la funcion sumar', () => {

      expect(sumar(3, 5)).toBe(8) ;
    });
});

const {restar} = require('./calculadora');
describe('prueba de resta', () => {
    test('prueba resta', () => {
        expect(restar(5, 2)).toBe(3);
    });
});