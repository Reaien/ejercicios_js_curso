//funciones - arrow functions

//arrow function
const sumar = (num1 = 0, num2 = 0) => {
  console.log(num1 + num2);
};
sumar(5, 5);

//cuando la arrow function devuelve solo 1 parametro, puedes borrar las llaves
const sumar2 = (num1 = 0, num2 = 0) => console.log(num1 + num2);
sumar2(10, 10);
