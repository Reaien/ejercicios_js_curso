//Objetos
//Estructua es Objeto > Key > Value

const producto = {
  nombre: "Tablet",
  precio: 1000,
  disponible: true,
};

console.log(typeof producto);
console.table(producto);

//acceder a las propiedades del objeto
console.log(producto.nombre);

//Destructuring del objeto, extraer el valor del objeto
const { nombre, precio, disponible } = producto;
console.log(precio);

//Object literal enhancment
//sirve para crear datos y objeto nuevo
const autenticado = true;
const usuario = "Ando";

const nuevoObjeto = {
  autenticado,
  usuario,
};

console.table(nuevoObjeto);
