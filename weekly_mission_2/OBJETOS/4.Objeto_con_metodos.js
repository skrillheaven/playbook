// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    // Esta es una función que se guarda como propiedad
    sayHello: function() {
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español!`)
    }



}

function hello() { //probando una funcion por fuera 

    return console.log("hello")
}


console.log("Ejemplo 4: Objeto con métodos")
console.log(pet) // se imprime todo el objeto
pet.sayHello() // se imprrime la funcion sayhello
console.log(hello)