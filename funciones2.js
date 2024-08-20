//Explicación del uso de console.log y return
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre); //muestra en la consola el valor entre paréntesis, pero no lo regresa al código, sólo se usa como ayuda visual para el programador.
    return nombre; //regresa a la línea de código el valor y el tipo de valor que es, como por ejemplo un string que se usatá en otras partes del código.
  }

  //Aquí el programa nos va a retornar el texto entrecomillado más el tipo de valor a la función cuidadoConElConsoleLog
  function cuidadoConElReturn(nombre) {
    return (
        "El nombre retornado por la función cuidadoConElConsoleLog es " + cuidadoConElConsoleLog('TheRaven')
    ); 

  }

  function finDeLaFuncion(nombre) {
    return nombre;
    console.log(nombre);
    //Cuando se ejecuta el return, el resto de operaciones quedan sin ejecutar, por ello, sólo se mostraría el return en consola, y no el console.log
  }