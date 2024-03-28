//iterar en arreglos con funciones (map es un iterador)

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "Nest"];
//iterar con for clasico cada elemento
for (let i = 0; i < tecnologias.length; i++) {
  console.log(`Ejemplo for: ${tecnologias[i]}`);
}

//forEach
//se pasa dentro de una funcion un parametro que reciba todos los elementos del array para mostrar
tecnologias.forEach((tecnologia) => {
  return console.log(`Ejemplo forEach ${tecnologia}`);
});

//map
//sirve para iterar pero su caracteristica especial es que crea un nuevo array en base a las condiciones de la funcion que va adentro
const arrayTecnologiasMap = tecnologias.map((tecnologia) => {
  return tecnologia;
});
//map crea un arreglo nuevo, por ende se puede guardar dentro de una variable
console.log(arrayTecnologiasMap);

//resumen

//for y forEach hacen lo mismo, solo recorren
//map se asocia a una const ya que crea un nuevo arreglo de lo que iteró y asi llamas al const
