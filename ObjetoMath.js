//Vamos a ver las distintas funciones del objeto Math

//Math.pow nos permite potenciar un número

2 + 2 + 2 == Math.pow(2,3); // El primer número es la base y el segundo la potencia.

//Math.round redondeará un decimal al número entero más próximo
Math.round(0.49); // = 0
Math.round(0.51); // = 1

//Math.floor redondea el decimal al entero inmediato de menor valor
Math.floor(5.99); // = 5

//Math.ceil redondea el decimal al entero inmediato de mayor valor
Math.ceil(2.01); // = 3

//Math.max nos dará a conocer el valor máximo de un conjunto de números
Math.max(1, 3, 5, 7, 9); // = 9

//Math.min nos dará a conocer el valor mínimo de un conjunto de números
Math.min(1, 2, 4, 6, 7); // = 1

//Math.random() nos generará un número decimal y puede ser cualquiera entre el 0 y el 1
Math.random()