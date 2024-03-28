//funciones - functions expressions
// function expression se asigna la function declaration a una variable o constante
const sumar = function (num1 = 0, num2 = 0) {
  console.log(num1 + num2);
};
sumar(10, 10);

//las diferencias entre el function declaration y el expression es que al declararse en una const, la función solo se ejecutara despues de la declaracion de la const
//en cambio la function_declaration puede ser ejecutada en cualquier posición ya que JS primero lee las funciones y luego da la segunda pasada
