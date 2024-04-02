//Ternario
const auth = true;
const saldo = 1000;
const pagar = 1200;
const tarjeta = false;

//ejemplo tradicional 1
if (auth) {
  console.log("Usuario autenticado");
} else {
  console.log("Usuario no autenticado");
}
//ejemplo tradicional 2
if (saldo >= pagar || tarjeta) {
  console.log("Puede pagar");
} else {
  console.log("No puedes pagar");
}

//operador ternario true ejemplo 1
auth
  ? console.log("Usuario autenticado")
  : console.log("Usuario no autenticado");

//operador ternario comparador ejemplo 2
pagar >= saldo || tarjeta
  ? console.log("Pago realizado con exito")
  : console.log("Pago no realizado");
