let goles = 0;

function anotarGoles(cantidadGoles) {
    for (let i = 1; i <= cantidadGoles; i++) {
        goles++;
    }
    return goles;
}

function golesEsperados(objetivo) {
    if (goles >= objetivo) {
        alert("Felicitaciones, alcanzaste el objetivo");
    } else {
        alert(`Todavia te faltan ${objetivo - goles} goles para alcanzar el objetivo`);
    }
}

const simularTemporada = (partidos, golesPorPartido) => {
    for (let partido = 1; partido <= partidos; partido++) {
        anotarGoles(golesPorPartido);
    }
}

const golesPorPartido = parseInt(prompt("Ingrese la cantidad de goles por partido: "));

simularTemporada(38, golesPorPartido);
golesEsperados(77);
console.log(`Goles anotados en la temporada: ${38 * golesPorPartido}`);