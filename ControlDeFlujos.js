function viajar(destino) {
    if(destino === 'Brasil') { //describe las condiciones a cumplir para que se ejecuten las órdenes especificadas entre las llaves {}
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') { //se ejecuta en el caso de que no se cumplan las condiciones de if, y sí las especificadas por el else
             console.log('Gire a la derecha');
    } else { //se ejecuta si no cumple ninguna de las condiciones especificadas anteriormente.
             console.log('Nos perdimos');''
    }
  };
  viajar('China');

  function puedeManejar(edad) {
    if(edad >= 18) { //especifica la condición de tener 18 años o más para manejar y si se cumple, nos mostrará True en la consola. En caso contrario, nos mostrará "False"
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);