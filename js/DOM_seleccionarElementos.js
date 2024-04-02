//DOM - SELECCION DE ELEMENTOS
const heading = document.querySelector(".heading");
console.log(heading);
//query selector es mas nuevo te permite tener acceso a todos los tags, class, id's, elementosHTML
//Se recomienda usar query

//distintas funciones para mostrar en el query selector
console.log(heading.tagName); //muestra el elemento HTML
console.log(heading.textContent); //muestra el texto dentro
console.log(heading.classList); //muestra todas las clases

//obtiene todos los elementos seleccionados por el All
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
