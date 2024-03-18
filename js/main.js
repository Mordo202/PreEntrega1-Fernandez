let nombreJugador1 = "";
let nombreJugador2 = "";

while(nombreJugador1 === "" || nombreJugador2 === "") {
    if(nombreJugador1 === "") {
        nombreJugador1 = prompt("Ingresar nombre jugador 1");
    }
    if(nombreJugador2 === "") {
        nombreJugador2 = prompt("Ingresar nombre jugador 2");
    }
}
alert("Nombre jugador 1:" + nombreJugador1 + " Nombre Jugador 2: " + nombreJugador2);

let puntosVidaJugador1 = 100;
let puntosVidaJugador2 = 100;

while (puntosVidaJugador1 > 0 && puntosVidaJugador2> 0) {
    const danioJugador1 = Math.floor(Math.random() * 20) + 1;
    puntosVidaJugador2 -= danioJugador1;
    console.log("El jugador 1 golpea al jugador 2 y le causa" + " " + danioJugador1 + " " + "de daño.");

    if (puntosVidaJugador2 <= 0) {
        console.log("¡Jugador 2 a sido derrotado! ¡Jugador 1 gana la batalla!");
        alert(nombreJugador1 + " " +"Gana la batalla!");
        break;
    }

    const danioJugador2 = Math.floor(Math.random() * 20) + 1;
    puntosVidaJugador1 -= danioJugador2;
    console.log("El enemigo golpea al jugador y le causa" + " " + danioJugador2 + " " + "de daño.");

    if (puntosVidaJugador1 <= 0) {
        console.log("¡El Jugador 1 a sido derrotado! ¡Jugador 2 gana la batalla!");
        alert(nombreJugador2 + " " +"Gana la batalla!");
        break;
    }
}