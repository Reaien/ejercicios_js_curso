const tecnologias = ["HTML", "CSS", "REACT", "JS", "NODEJS"];
const numeros = [10, 20, 30];

//Filter, sirve para sacar un elemento de un arreglo o sacar al resto y mantener un dato en el array nuevo creado en el const
const nuevoArray = tecnologias.filter(function (tech) {
  if (tech === "HTML") {
    return tech;
  }
});
console.log(nuevoArray);

const nuevoArrayArrowCool = tecnologias.filter((tech) => tech === "HTML");
console.log(nuevoArrayArrowCool);

//Includes, sirve para ver si el arreglo contiene un elemento true o false
const resultado = tecnologias.includes("CSS");
console.log(resultado);
//devuelve boolean true o false

//Some, devuelve true o false si al menos uno cumple la condicion
const resultado2 = numeros.some((numero) => numero == 20);
console.log(resultado2);

//find, devuelve el primer elemento que cumple la condicion
const resultado3 = numeros.find((numero) => numero > 15);
console.log(resultado3);

//Every, retorna true o false si todos los elementos cumplen la condición
const resultado4 = numeros.every((numero) => numero > 5);
console.log(resultado4);

//Reduce, retorna un acumulado del total, osea suma los elementos, elemento a elemento, sirve mucho para sacar el total en un carrito
//pide 2 parametros el total, y lo que se va sumando
const resultado5 = numeros.reduce((total, numero) => total + numero, 0);
console.log(resultado5);
