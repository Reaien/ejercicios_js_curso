//Function declaration
//forma básica y clásica de crear funciones
function sumar() {
  console.log(1 + 1);
}
sumar();
//se deben mandar a llamar

//funcion con parametros
//UN PARAMETRO ES UNA VARIABLE ESPECIAL QUE SE UTILIZA EN UNA FUNCION Y CUYO VALOR SE REFIERE A VALORES QUE VIENEN DEL EXTERIOR
function sumar1(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}
sumar1(5, 5);
