const saldo = 1000;
const pagar = 500;
const tarjeta = true;

if (saldo > pagar) {
  console.log("Puede pagar");
} else if (tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No puedes pagar");
}

//si hay ambas condiciones cumpliendose if y else if, se ejecutará siempre la primera

//En cambio con los comparadores or and
//Logical or || logical and &&
if (saldo >= pagar || tarjeta) {
  console.log("Puede pagar");
} else {
  console.log("No puedes pagar");
}
