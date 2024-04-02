//DOM eventos clicks

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

//esto se le llama callback, porque espera a que ocurra el eventListener, en este caso click, y se llama a la función configurada al lado
heading.addEventListener("click", () => {
  heading.textContent = "Hiciste Click";
});

enlaces.forEach((enlace) => {
  //el parametro e, se refiere al evento que sucede, al hacer click sobre el elemento
  enlace.addEventListener("click", (e) => {
    //mostrará todo, donde se hizo click, a que, etc
    console.log(e);
    //En este caso al ser un enlace, este evento tiene entonces la opcion de enlace que lleva a otra pagina, y podemos manipular incluso ese evento default
    e.preventDefault();
    enlace.textContent = "Hiciste Click";
  });
});
