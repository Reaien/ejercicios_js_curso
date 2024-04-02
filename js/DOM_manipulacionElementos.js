//Manipulacion y modificacion de elementos DOM
const enlaces = document.querySelectorAll(".navegacion a");
const heading = document.querySelector(".heading");
//cambiamos el texto del elemento que tiene la clase heading
heading.textContent = "Heading manipulado con JS";

//le agregamos id al elemento html que fue seleccionado a través de la clase
heading.id = "nuevo_id";

//borramos el id
heading.removeAttribute("id");

//obtenemos el elemento a través del id
const inpuNombre = document.querySelector("#nombre");
//agregamos texto al input
inpuNombre.value = "Te toy hakiando";

//accedemos al queryAll y como es mas de 1 elemento se accede como si fueran arreglos
enlaces[0].textContent = "Nuevo enlace manipulado";

//Podemos acceder a todos los elementos con 1 codigo
enlaces.forEach(
  (enlace) => (enlace.textContent = " Enlaces mapiulados con DOM y forEach")
);
