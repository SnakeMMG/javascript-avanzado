
class carro{
    contructor(marca, color, modelo, velocidad, numeroPuertas){
      this.marca = marca;
      this.color = color;
      this.modelo = modelo;
      this.velocidad = velocidad
      this.numeroPuertas = numeroPuertas 
    }
    acelerar(){
       this.velocidad +=1
    }
    frenar(){
       this.velocidad = 0
    }
    reversa(){
       this.velocidad -=1
    }
    toString(){
      document.write(`El carro ${this.marca}, modelo ${this.modelo}, del color ${this.color}, tiene ${this.numeroPuertas} puertas, va a una velocidad de ${this.velocidad}km/h<br>`)
    }

}

const Carro1= new carro('vw', 'Amarillo', 'Bocho', '60', '2' );
Carro1.toString();
Carro1.frenar();
Carro1.toString();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();

Carro1.toString();

Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();

Carro1.toString();