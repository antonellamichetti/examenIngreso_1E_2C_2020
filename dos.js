/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let producto;
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta = "s";
  let acuPeso = 0;
  let banderaPrimerLiquido = 0;
  let marcaLiquidoCaro;
  let mayorPrecioLiquido;
  let banderaPrimerSolido = 0;
  let menorPrecioSolido;
  let marcaSolidoBarato;
  let mensajeB = "No se ingresaron líquidos";
  let mensajeC = "No se ingresaron sólidos";

  do {
    producto = prompt("Ingrese producto: ");
    marca = prompt("Ingrese marca: ");
    precio = parseFloat(prompt("Ingrese precio: "));
    while (precio < 0 || isNaN(precio)) {
      precio = parseFloat(prompt("Error. Ingrese precio: "));
    }
    peso = parseFloat(prompt("Ingrese peso en kg: "));
    while (peso < 0) {
      peso = parseFloat(prompt("Error. Ingrese peso en kg: "));
    }
    tipo = prompt("Ingrese tipo -sólido/líquido-");
    while (tipo != "sólido" && tipo != "líquido") {
      tipo = prompt("Error. Ingrese tipo -sólido/líquido-. Revise las tildes");
    }

    acuPeso = acuPeso + peso;

    if ((tipo == "líquido" && banderaPrimerLiquido == 0) || (tipo == "líquido" && precio > mayorPrecioLiquido)) {
      mayorPrecioLiquido = precio;
      marcaLiquidoCaro = marca;
      banderaPrimerLiquido = 1;
    }
    else if ((tipo == "sólido" && banderaPrimerSolido == 0) || (tipo == "sólido" && precio < menorPrecioSolido)) {

      menorPrecioSolido = precio;
      marcaSolidoBarato = marca;
      banderaPrimerSolido = 1;
    }

    respuesta = prompt("Continua ingresando productos? s/n");
  } while (respuesta == "s");

  if (banderaPrimerSolido == 1) {
    mensajeC = marcaSolidoBarato + ", de $ " + menorPrecioSolido;
  }
  if (banderaPrimerLiquido == 1) {
    mensajeB = marcaLiquidoCaro + ", de $ " + mayorPrecioLiquido;
  }

  alert("A- Peso total de la compra: " + acuPeso + "\n" +
    "B - Marca del más caro de los líquidos: " + mensajeB + "\n" +
    "C - Marca del más barato de los sólidos: " + mensajeC);
}
