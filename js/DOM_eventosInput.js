//Eventos del DOM - Inputs

//Obtenemos el input por el id
const inputNombre = document.querySelector("#nombre");
//Callback que nos permite ver el valor de lo escrito dentro del input a través de su evento
inputNombre.addEventListener("input", (e) => {
  console.log(e.target.value);
});
const inputPassword = document.querySelector("#password");

//Lo mismo, callback pero nos permite tomar el input del pass
inputPassword.addEventListener("input", (e) => {
  console.log(e.target.value);
});
