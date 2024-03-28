//Template strings, concatenacion

const producto = "Tablet de 12 pulgadas";
const precio = 400;
const marca = "Orange";
//forma básica y antigua
console.log("El producto es: " + producto);

//forma template strings
console.log(
  `El producto es: ${producto} su precio es de $${precio} y su marca es ${marca}`
);
