/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
let nombre;
let peso;
let sexo;
let edad;
let i;
let contadorHombres = 0;
let contadorMujeres = 0;
let acuEdad = 0;
let banderaHombrePeso = 0;
let mayorPesoHombre;
let nombreHombrePesado;
let mensajeHombrePesado = "No se ingresaron hombres";

for (i = 0; i < 5; i++) {

    nombre = prompt("Ingrese nombre: ");
	peso = parseFloat(prompt("Ingrese peso: "));
	while (peso < 0) {
		peso = parseFloat(prompt("Error. Ingrese peso: "));
	}
    sexo = prompt("Ingrese sexo -f/m-");
    while (sexo != "f" && sexo != "m") {
        sexo = prompt("Error. Ingrese sexo -f/m-");
    }
    edad = parseInt(prompt("Ingrese edad: "));
    while (edad < 1 || edad > 120 || isNaN(edad)) {
        edad = parseInt(prompt("Error. Ingrese edad: "));
    }
    if (sexo == "f") {
        contadorMujeres++;
    
    }
    else {
		contadorHombres++;
		if (banderaHombrePeso == 0 || peso > mayorPesoHombre) {
		   mayorPesoHombre = peso;
		   nombreHombrePesado = nombre;
            banderaHombrePeso = 1;
        }
    }
    acuEdad = acuEdad + edad;
}

if (banderaHombrePeso == 1) {
    mensajeHombrePesado = "Hombre con mayor peso: "+nombreHombrePesado+", peso: "+mayorPesoHombre;
}

document.write("A- Cantidad de mujeres: " + contadorMujeres + "<br>");
document.write("B- Edad promedio: " + (acuEdad / 5)+"<br>");
document.write("C - "+mensajeHombrePesado);

}
