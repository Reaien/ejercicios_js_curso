//Condicionales
const disponible = 4000;
const retirar = 200;

if (disponible >= retirar) {
  console.log("Retiraste $200");
  const resto = disponible - retirar;
  console.log(resto);
} else {
  console.log("No puedes retirar $200 fondos insuficientes");
}
