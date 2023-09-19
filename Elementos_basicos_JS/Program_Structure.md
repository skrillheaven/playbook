# Program Structure

En esta seccion se resumira el capitulo 2 del libro [eloquentjavascript](https://eloquentjavascript.net/02_program_structure.html).

### Expressions and statements

Un simple tipo de declaracion es un ";" al final de cada linea de codigo.
```
1;
!false;
```

### BINDINGS

Para la declaración de variables usamos algo como lo siguiente:

```
let caught = 5 * 5;
```
Podemos usar las varibles para distintos usos teniendo en cuenta el valor declarado por ejemplo:

* Enteros: 
```
let ten = 10;
console.log(ten * ten);
// → 100
```

```
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105
```

``` 
```
* Strings:

```
let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark
```

### Binding names
Nota importante las variables no deben de iniciar con digitos (numeros), estos pueden hacer uso de signos como $ o _ , pero no de otros caracteres especiales.

Hay que tener presente las _variables reservadas_ que son propias del lenguaje, un ejemplo es __let__.

### The environment 
La coleccion de variables y valores que existen en el mismo tiempo y pueden ser llamadas a eso se le llama _enviroment_.

## Functions
Existen valores tipo __function__ , ejecutar ello permite invocar, llamar y aplicarlos como el caso de:

```
prompt("Enter passcode");
```
El cual muestra una ventana para asignarle un valor.

## The console.log function

Permite escribir argumentos de texto y darlos como salida:

```
let x = 30;
console.log("the value of x is", x);
// → the value of x is 30
```

### CONDITIONAL EXECUTION

Condicionales como el caso de if , el cual dependiendo de las condiciones solicitadas el se ejecutara o no 
Estructura de un condicional __if__

```
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
```
NOTA: Si algun valor de la condicion es NaN este regresara un _TRUE_

Estrutura del __else__:
```
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

**ELSE IF**:

```
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

### While and do loops

Si requieres repetir un X cantidad de veces un codigo hasta un cierto limite no haras lo siguiente:
```
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
```

Para solucionar este tipo de problemas y mas si quieres hacer una repetición a muchos podeces a utilizarm _while_:

```
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
```
Tambien podemos hacer uso de un segundo valor incremental dentro del while por ejemplo:
```
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
```


__Do while__
Para un bucle _do while_, este ejecutara lo solicitado en la clausula _do_ y dejara de hacerlo hasta que cumpla con la condición del _while_
```
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

```


### FOR LOOPS

Estructura de ub cilco _for_ : 

```
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```

```
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

### Breaking Out of a Loop

Cuando una condicion produce _false_ no necesariamente termina el bucle. Para ello exite _break_.

```
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```
### Dispatching on a value with switch
Para tener un acción especifico de alguna condición en particular y evitar una linea de codigos llenas de _if_ podemos hacer uso de _switch_:
```
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```
Podemos agregar la cantidad de casos que sean necesarios.

### COMMENTS

Ejemplos de como comentar en el codigo:

```
let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
let report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass.
```
```
/*
  I first found this number scrawled on the back of an old
  notebook. Since then, it has often dropped by, showing up in
  phone numbers and the serial numbers of products that I've
  bought. It obviously likes me, so I've decided to keep it.
*/
const myNumber = 11213;
```