//funciones - arrow functions retornando valores
const sumar2 = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};
//los valores se retornan y alojan en la const creada
const resultado = sumar2(10, 10);
//alojamos el valor retornado en una nueva const para manipularla
console.log(resultado);

//funcion en 1 linea con return
const sumar3 = (num1 = 0, num2 = 0) => num1 + num2;
//en las funciones con return de 1 linea, podemos borrar el return ya que se da por asumido
const resultado2 = sumar3(10, 10);

console.log(resultado2);
