/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexoTitular;
	let lugar;
	let temporada;
	let cantidad;
	let respuesta = "s";
	let acuPersonasInvierno = 0;
	let contViajeInvierno = 0;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let destinoMasElegido;
	let banderaPrimerViaje = 0;
	let mayorCantPasajeros;
	let sexoMayorCantPasajeros;
	let promPersViajeInvierno = 0;


	do {
		sexoTitular = prompt("Ingrese sexo del titular -f/m-: ");
		while (sexoTitular != "f" && sexoTitular != "m") {
			sexoTitular = prompt("Error. Ingrese sexo del titular -f/m-: ");
		}
		lugar = prompt("Ingrese lugar de destino: ");
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt("Error. Ingrese lugar de destino -bariloche/cataratas/salta- ");
		}
		temporada = prompt("Ingrese temporada: ");
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt("Error. Ingrese temporada: ");
		}
		cantidad = parseInt(prompt("Ingrese la cantidad de personas que viajan: "));
		while (cantidad < 1 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Error. Ingrese la cantidad de personas que viajan: "));
		}

		switch (lugar) {
			case "bariloche":
				contBariloche++;
				break;
			case "cataratas":
				contCataratas++;
				break;
			case "salta":
				contSalta++;
				break;
		}

		if (temporada == "invierno") {
			acuPersonasInvierno = acuPersonasInvierno + cantidad;
			contViajeInvierno++;
		}

		if (banderaPrimerViaje == 0 || cantidad > mayorCantPasajeros) {
			mayorCantPasajeros = cantidad;
			sexoMayorCantPasajeros = sexoTitular;
			banderaPrimerViaje = 1;
		}

		respuesta = prompt("continúa ingresando datos? s/n");
	} while (respuesta == "s");

	if (contBariloche > contCataratas && contBariloche > contSalta) {
		destinoMasElegido = "Bariloche";
	}
	else if (contCataratas > contSalta && contCataratas >= contBariloche) {
		destinoMasElegido = "Cataratas";
	}
	else {
		destinoMasElegido = "Salta";
	}
	promPersViajeInvierno = acuPersonasInvierno / contViajeInvierno

	if (contViajeInvierno == 0 || isNaN(promPersViajeInvierno)) {
		promPersViajeInvierno = "No se ingresaron viajes en inverno";
	}


	alert("A- El lugar más elegido es: " + destinoMasElegido + "\n" +
		"B - Sexo del titular que lleva más pasajeros: " + sexoMayorCantPasajeros + "\n" +
		"C - Promedio de personas por viaje en invierno: " + promPersViajeInvierno);


}
