class Ninja {
    constructor(nombre){
        this.nombre=nombre;
        this.salud=10;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName() {
        console.log(this.nombre);
    }
    showStats (){
        console.log(`Nombre ${this.nombre}, salud actual es de ${this.salud}HP con una fuerza de ${this.fuerza} y una velocidad de ${this.velocidad}`)
    }
    drinkSake (){
        this.salud+=10;
        console.log(`Aumentado de salud +10:  ${this.salud}HP`);
    }
}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre)
            this.salud=210;
            this.velocidad=10;
            this.fuerza=10;
            this.sabiduria=10;
    }
    speakWisdom (){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    
}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
