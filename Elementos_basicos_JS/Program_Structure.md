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