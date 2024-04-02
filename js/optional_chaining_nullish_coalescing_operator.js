//Optional Chaining ' ? '
//Te permite acceder a las propiedades de un objeto o llamar metodos de propiedades sin verificar si existen o no

const alumno = {
  nombre: "Juan",
  clase: "Programacion 1",
  aprobado: true,
};

//esta propiedad no existe
//Por ende el código o programa dará error y no se ejecutará el console.log bueno, alumno.nombre
console.log(alumno.examenes?.examen1);
//si alumno.examenes existe, accede a examen1 dentro de examenes

//En cambio si usamos el optional chaining, evaluará si existe la propiedad, y aunque no exista, continuara ejecutando el resto, se le pone el ? despues de la propiedad

console.log(alumno.nombre);

//Optional Chaining funciona como un if, ahorra mucho codigo para comparar o evaluar si algo existe o no

//Nullish Coalescing Operator ' ?? '
//Es un operador logico que retorna el valor del lado derecho cuando la propiedad es undefined y de lo contrario retorna el valor de la izquierda
//Ejemplo de paginador de contenido en web
const pagina = null ?? 1;
//retorna 1
console.log(pagina);

const pagina2 = 3 ?? 1;
//retorna 3
console.log(pagina2);

//Se utiliza bastante cuando trabajas con paginadores
