let goles = 0;

function anotarGoles(cantidadGoles) {
    for (let i = 1; i <= cantidadGoles; i++) {   
        goles++;
    }

console.log("Goles totales: " + goles);
}

function golesEsperados(objetivo) {
    if (goles >= objetivo) {
        console.log("Felicitaciones, alcanzaste el objetivo");
    } else {
        console.log(`Todavia te faltan ${objetivo - goles} goles para alcanzar el objetivo`);
    }
}
 

const simularTemporada = (partidos, golesPorPartido) => {
    for (let partido = 1; partido <= partidos; partido++) {
        anotarGoles(golesPorPartido);
    }
}

simularTemporada(38, parseInt(prompt("Ingrese la cantidad de goles por partido: ")));
golesEsperados(77);