# Values, Types, and Operators

**Esta información va como resumen de un libro para tener presente las terminologias y aspectos principales usados en JS [enlace al capitulo.](https://eloquentjavascript.net/01_values.html)**

### NUMBERS 
Como dato complementario, el numero entero máximo real que se puede almacemar esta en el rango de 9 cuatrillones (15 ceros).

Algunos ejemplos de usos de numeros son:

|Ejemplo de numero|Tipo de numero|
|-----------------|--------------|
|9|Numero Entero|
|9.81|Numero Fraccionario|
|2.998e8 = 2.998 x 10^8 = 299,800,000.|Notación cientifica para numeros grandes o chicos|

### ARITHMETIC
Los simbolos usados se llaman operadores, tales como _+ , * y %_
Ejemplos de operaciones arimeticas
|Operacion|Info|
|----|-----|
|100 + 4 * 11| Operacion respetando el orden aritmetico |
|(100 + 4) * 11 |Se puede "alterar" el orden de ejecución de la operación con parentesis |
|Infinity - Infinity = NaN|Cualquier operacion entre infinitos dara un NaN "No es un numero"|

### STRINGS 
Los strings se pueden representar de la siguiente manera:

* `Down on the sea `
* "Lie on the ocean"
* 'Float on the ocean'

Pueden realizar saltos de linea de la siguiente manera:
* "This is the first line\nAnd this is the second"

Dando como resultado:
```
This is the first line
And this is the second
```
Si solo queremos hacer uso de la barra invertida tal cual es:
* "A newline character is written like \"\n\"."

Para concatenar usamos el operador + :
* "con" + "cat" + "e" + "nate"

Las cadenas invertidas (`) permite realizar otro tipo de funciones extras:
*   `half of 100 is ${100 / 2}`

### UNARY OPERATORS
NO todos los operadores son simbolos, el operador __typeof__ produce un valor cadena que muestra el tipo de valor que es:
* console.log(typeof 4.5) 

// → number
* console.log(typeof "x")

// → string
* console.log(- (10 - 2))

// → -8

### BOOLEAN VALUES
Para hacer comparaciones de si o no, existe este tipo de valores, haciendo la comparación entre dos valores siendo veradero o falso entre ellas:
* console.log(3 > 2)

// → true
* console.log(3 < 2)

// → false
* console.log("Aardvark" < "Zoroaster")

// → true
* console.log("Itchy" != "Scratchy")

// → true
* console.log("Apple" == "Orange")

// → false
* console.log(NaN == NaN)

// → false


