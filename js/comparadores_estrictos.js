const numero1 = 20;
const numero2 = "20";

//comparador no estricto ==
//comaprador estricto ===

//ejemplo comparador no estricto
if (numero1 == numero2) {
  console.log("Son iguales");
} else {
  console.log("No son iguales");
}
//Devuelve true, son iguales porque solo compara el contenido

//ejemplo comparador estricto
if (numero1 === numero2) {
  console.log("Son iguales");
} else {
  console.log("No son iguales");
}
//devuelve false, compara tanto el contenido, como el tipo de dato, y como uno es string es false
