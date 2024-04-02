//fetch API con async await
//Es la versión moderna de XMLHTTPREQUEST Y $.AJAX

const url = "https://jsonplaceholder.typicode.com/comments";

// //fetch version promises
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//
//fetch version async con función
//convertir la función a asyncrona nos permite ejecutarla aparte del código
//await significa que parecido a .then, esperará a una respuesta
const consultarAPI = async () => {
  try {
    const response = await fetch(url); //await el fetch
    if (!response.ok) {
      throw new Error("Hubo un error");
    }
    //con esto controlamos los errores, condicionamos que si la respuesta no está ok, tire el error
    const data = await response.json(); //await el json
    console.log(data); //luego, consologuea el data
  } catch (error) {
    console.log(error);
  }
};
//a diferencia del promise, aqui no se puede usar el catch(error) así que hay que usar el trycatch

consultarAPI(); //se debe mandar a llamar
