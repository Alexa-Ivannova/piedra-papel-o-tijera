alert("Vamos a jugar un juego, ¿te atreves? 👹");
alert("Jugaremos piedra papel o tijera, solo debes seguir las instrucciones");
 
const opciones = ["✊", "✋", "✌️"];
let seguirJugando = 's';
 
while (seguirJugando === 's') {
  let opcion = parseInt(prompt("Ingresa un número teniendo en cuenta las siguientes opciones: \n1) Piedra \n2) Papel \n3) Tijera"));
 
  juego(opcion);
 
  seguirJugando = prompt("¿Quieres jugar de nuevo? (s/n)").toLowerCase();
}
 
alert("Gracias por jugar. ¡Hasta luego!");
 
 
function opcionPC(opciones) {
  return opciones[Math.floor(Math.random() * 3)];
}
 
function opcionJugador(opcion) {
  let opcionJugador;
  switch (opcion) {
    case 1:
      opcionJugador = "✊";
      break;
    case 2:
      opcionJugador = "✋";
      break;
    case 3:
      opcionJugador = "✌️";
      break;
    default:
      console.log(
        "Opción invalida, solo puedes elegir uno de los número indicados"
      );
  }
  return opcionJugador;
}
 
function resultadoJuego(opcionPC, opcionJugador) {
  if (
    (opcionJugador === "✌️" && opcionPC === "✌️") ||
    (opcionJugador === "✊" && opcionPC === "✊") ||
    (opcionJugador === "✋" && opcionPC === "✋")
  ) {
    console.log("Has empatado");
  } else if (
    (opcionJugador === "✋" && opcionPC === "✌️") ||
    (opcionJugador === "✌️" && opcionPC === "✊") ||
    (opcionJugador === "✊" && opcionPC === "✋")
  ) {
    console.log("Te ha ganado la computadora");
  } else if (
    (opcionJugador === "✌️" && opcionPC === "✋") ||
    (opcionJugador === "✊" && opcionPC === "✌️") ||
    (opcionJugador === "✋" && opcionPC === "✊")
  ) {
    console.log("Has ganado");
  } else {
    console.log("Algunas de las opciones no son validas.")
  }
}
 
function juego(opcion) {
  const opcionPCSeleccionada = opcionPC(opciones);
  const opcionJugadorSeleccionada = opcionJugador(opcion);
  console.log("Tu opción: " + opcionJugadorSeleccionada);
  console.log("Opción de la computadora: " + opcionPCSeleccionada);
  resultadoJuego(opcionPCSeleccionada, opcionJugadorSeleccionada);
}
 
juego(opcion);