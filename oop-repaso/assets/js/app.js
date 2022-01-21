class Animalito { // la primera letra de una clase siempre deve de ser mayuscula, como buena practica 
      constructor(nombre, edad, especie, revisado){
          this.nombre = nombre;
          this.edad = edad;
          this.especie = especie;
          this.enfermo = false;
          this.revisado = revisado;

      }
      saludar(){
          return console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} y soy un ${this.especie}`); //las variables se usan con this. para hacer referencia a estas misamas
      }
}n

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];

    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes++;
        /* this.cantidadPacientes += 1; */
        let mensaje = `paciente agregado <br>`;
        return document.write(mensaje);
    }
    modificarPacientesRevisados(){
       this.pacientesRevisados++;
    };



    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados()//llamando a otro metodo de esta misma clase
           // this.pacientesRevisados++;
            document.write(`Paciente ha sido revisado <br>`)

        }else{
            document.write(`<br>este paciente ya fue revisado`)
        }
    }
    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write(' ' + this.listaPacientes[i].nombre)
        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes} <br>pacientes revisados ${this.pacientesRevisados}`)
    }

}




const VeterinariaPanchito = new Veterinario();
//objetos vreados de la clase animalito
const Animalito1 = new Animalito('misha', '5', 'gato', false);
const Animalito2 = new Animalito('manchas', '2', 'perro', true);
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarLista();

VeterinariaPanchito.revisarPaciente(Animalito2);