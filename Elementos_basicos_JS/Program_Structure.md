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



