// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa!",
    sayHelloToMyPet: function(yourPet) { // se solicita una variable
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Tulio")