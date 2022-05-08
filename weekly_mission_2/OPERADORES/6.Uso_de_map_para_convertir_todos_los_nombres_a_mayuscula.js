// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas las primeras tres letras

const countries = ['mexico', 'chile', 'ecuador', 'peru', 'nicaragua']

const countriesFirstThreeLetters = countries.map((country) =>
        country.toUpperCase().slice(0, 3)) //el metodoslice obtiene lalongitud marcada del string

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)