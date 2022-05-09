// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
    /*El operador de estricta igualdad (===) revisa si dos 
    operandos son iguales y produce un resultado Booleano. A diferencia del
    operador de igualdad regular (==), el operador de estricta igualdad siempre 
    considera que los operandos de distinto tipo de valor son diferentes y nunca similares.*/
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)