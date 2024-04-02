//DOM Eventos - generar alertas div en el html al evaluar condiciones en un form

//Generar alerta de error insertando un div con una alerta de campos obligatorios
const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;
  const alerta = document.createElement("div");

  //Prevenir nuevas alertas que se spameen
  const alertaPrevia = document.querySelector(".alerta");
  //evaluamos que haya un div con la clase alerta, si lo hay, sacamos el que estaba usando optional chaining
  alertaPrevia?.remove();

  alerta.classList.add(
    "alerta",
    "text-white",
    "uppercase",
    "text-sm",
    "text-center",
    "p-2",
    "font-black"
  );

  if (nombre === "" || password === "") {
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add("bg-red-500");
  } else {
    alerta.textContent = "Usuario Autenticado";
    alerta.classList.add("bg-green-500");
  }
  form.appendChild(alerta);
  //seteamos 3 segundos para borrar el div
  setTimeout(() => {
    alerta.remove();
  }, 3000);
});
