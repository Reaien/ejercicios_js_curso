//fetch API con promises
//Es la versión moderna de XMLHTTPREQUEST Y $.AJAX

const url = "https://jsonplaceholder.typicode.com/comments";

//hacer consulta sin función
//fetch_api usa promises
//Promises es un objeto que va a estar disponible a futuro o no
//Los promises cuentan con varios pasos y con varios estados

fetch(url) //ok consulta esta url
  .then((response) => {
    //entonces espera a recibir una respuesta
    return response.json(); //al recibir la respuesta toma los datos y pasalos a json
  })
  .then((data) => {
    //entonces los toma los datos pasados a json
    console.log(data); //muestralos
  })
  .catch((error) => {
    //el catch sirve para atrapar un error y poder consultarlo en consola o mostrarlo
    console.log(error); //
  });
