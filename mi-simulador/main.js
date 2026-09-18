let goles = 0;

function pedirDato(mensaje) {
    return parseInt(prompt(mensaje));
}

function anotarGoles(cantidadGoles) {
    for (let i = 1; i <= cantidadGoles; i++) {
        goles++;
    }
    return goles;
}

const simularTemporada = (partidos, golesPorPartido) => {
    for (let partido = 1; partido <= partidos; partido++) {
        anotarGoles(golesPorPartido);
    }
}

function mostrarResultado(objetivo) {
    if (goles >= objetivo) {
        alert("Felicitaciones, alcanzaste el objetivo de " + objetivo + " goles");
    } else {
        alert("Todavia te faltan " + (objetivo - goles) + " goles para alcanzar el objetivo");
    }
}

const partidosJugados = pedirDato("Ingrese la cantidad de partidos jugados en la temporada: ");
const golesPorPartido = pedirDato("Ingrese la cantidad de goles convertidos por partido: ");
const objetivoGoles = pedirDato("Ingrese el objetivo de goles para la temporada: ");

simularTemporada(partidosJugados, golesPorPartido);

mostrarResultado(objetivoGoles);

console.log("Partidos jugados: " + partidosJugados);
console.log("Goles por partido: " + golesPorPartido);
console.log("Objetivo de goles: " + objetivoGoles);
console.log("Total de goles anotados: " + goles);