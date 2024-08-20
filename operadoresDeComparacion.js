//Operaciones de comparación
console.log (4 < 7); //4 es menor que 7 - true
console.log (4 < 1 ); //4 es menor que 1 - false
console.log (4 > 4); //4 es mayor que 4 - false
console.log (4 == 7); //4 es igual que 7 - false

//Igualdad vs igualdad estricta 
console.log (3 == 3); //3 es igual a 3 (compara si el valor es el mismo); true
console.log (3 === 3); //3 es igual a 3 (compara si el valor y el tipo de dato son iguales, en este caso, números); true
console.log (3 == "3"); //3 es igual a 3 (mismo valor);true
console.log (3 === "3"); //3 es igual a 3 (mismo valor, distinto tipo de dato);false
console.log (7 == "7"); //7 es igual a 7 (mismo valor;true
console.log (7 === "7"); //7 es igual a 7 (mismo valor, distinto tipo de dato);false

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b; // var = c = (a = b); Asociatividad de derecha a izquierda
console.log (c); //