//clases, molde que nos permite crear objetos
//calss palabra reservada 

class Animal{
    //constructor es una funcion 
    constructor (nombre, especie){
        //palabra reserbada this. hace referencia al contexto en que se esta utilizando 
        this.nombre = nombre;
        this.especie = especie;
    }
    //getters y setters
    //solo tienen el propocito de leer o modificar el atributo
    get getNombre(){
        return this.nombre;

    }
    set setNombre(nombre){
        this.nombre = nombre;

    }

    get getespecie (){
        return this.especie
    }

    set setespecie(especie){
        this.especie = especie
    }
    
    //metodos == funcion 
    presentarce(){
        document.write(`hola soy ${this.especie} y me llamo ${this.nombre} <br>`);
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return mensaje;
    }
    //metodo estaticos
    //pertenece solo a la clase y no la heredan los objetos
    static saludar(){
        return console.log('hola soy un metodo estatico');
    }
}

//Animal1.presentarce();
//console.log(Animal1.getNombre)
Animal.saludar();

//heredando los atrubutos y los metodos de la clase que estan utulizando  
const Animal1 = new Animal('scooby', 'perro');//creamos un objeto
//instancias = hacer una copia, crear un objeto
console.log(Animal1);
const Animal2 = new Animal('pecas', 'gato');
console.log(Animal2);
const Animal3 = new Animal();

Animal1.presentarce();
Animal2.presentarce();
Animal3.presentarce();

console.log(Animal1.nombre);
Animal1.nombre = 'scrappy';//Notacion de punto para cambiar el valor,con este metodo podemnos cambiar el valor de un objeto
console.log(Animal1.nombre);
document.write(Animal1.cambiarNombre('Oddie'));//metodo para cambiar valor 

//Gettes y Setters
//get = obtener el valor de una Atributo
//set = fijar o cambiar el valor de un Atributo
//se utilizan como si fueran aributos
console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);
Animal1.saludar;