//Objetos Manipulación

const producto = {
  nombre: "Tablet",
  precio: 1000,
  disponible: true,
};
//Reescribir el objeto producto y su key disponible
producto.disponible = false;
console.log(producto);

//Sirve para insertar datos al Objeto ya creado
producto.imagen = "producto.jpg";
console.log(producto);

//Eliminar key del objeto producto
delete producto.precio;
console.log(producto);

//Como hacer que un objeto no pueda modificarse
Object.freeze(producto);
//Object.freeze permite que un objeto no pueda modificarse

//Modificar valores existentes pero no dejar insertar nuevos
Object.seal(producto);
//Object.seal permite modificar valores existentes pero no dejar insertar nuevos
