//Agregar o Modificar Arrays

const tecnologias = ["HTML", "CSS", "REACT", "JS", "NODEJS"];

//Forma de obtener una copia del array y trabajar con el
//Para no mutar el original
const nuevoArrayTecnologias = ["Prisma", ...tecnologias, "TailwindCSS"];
console.log(nuevoArrayTecnologias);
//Empujar dato al comienzo o al final de la copia del array

//insertar dato en posicion especifica
tecnologias[4] = "Next.js";
//modificar datos de un indice del array conociendo la longitud
//del arreglo
console.log(tecnologias);

//metodos array
//Insertar dato al final del arreglo, mutando el array original
tecnologias.push("Nest.js");
console.log(tecnologias);

//Eliminar el primer elemento de un arreglo mutando el array original
//tecnologias.shift();
console.log(tecnologias);

//Crear un arreglo que contenga funciones que mutan el original
const tecnologias2 = tecnologias.filter((tech) => {
  return console.log(tech);
});
//Con esto el parameto tech, toma todos los elementos dentro del arreglo, podemos condicionar para obtener un dato y manipularlo

const tecnologias3 = tecnologias.filter((tech) => {
  if (tech === "HTML") {
    return tech;
  }
});
//filter recorre los elementos del array, toma el parametro tech para guardarlo, y si existe el elemento del array en tech, que lo devuelva.
console.log(tecnologias3);

//MAP
//Trabajar con map al igual que con filter
//map al final recorre todos los elementos del arreglo
//los aloja gracias a una funcion a un parametro
const tecnologias4 = tecnologias.map((tech) => {
  if (tech === "REACT") {
    return console.log(tech);
  } else {
    return console.log(tech);
  }
});
