//Medir performance de async await de multiples consultas

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  try {
    const inicio = performance.now(); //puedes medir el performance de la ejecucion de codigo

    //haciendo performance a varios endpoints a la vez
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log(data);

    const response3 = await fetch(url3);
    const data3 = await response3.json();
    console.log(data);

    const fin = performance.now(); //lo mides de nuevo al finalizarlo,

    console.log(`El resultado de la primer performance es: ${fin - inicio} ms`); //y puedes sacar el tiempo en ms restando ambos
  } catch (error) {
    console.log(error);
  }
};

const consultarAPI2 = async () => {
  try {
    const inicio = performance.now(); //puedes medir el performance de la ejecucion de codigo

    //haciendo performance a varios endpoints a la vez utilizando un array de consultas

    const [response, response2, response3] = await Promise.all([
      fetch(url),
      fetch(url2),
      fetch(url3),
    ]);

    const [data, data2, data3] = await Promise.all([
      response.json(),
      response2.json(),
      response3.json(),
    ]);

    const fin = performance.now(); //lo mides de nuevo al finalizarlo,

    console.log(
      `El resultado de la segunda performance es: ${fin - inicio} ms`
    ); //y puedes sacar el tiempo en ms restando ambos
  } catch (error) {
    console.log(error);
  }
};

consultarAPI();
consultarAPI2();
