//destructuring en arrays
//pasar valores del arreglo a variables
const tecnologías = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];

//modo básico
const react = tecnologías[3];
console.log(react);

//destructuring, extrae y asigna según la posicion
const [arrayPosition0, arrayPosition1] = tecnologías;
console.log(arrayPosition0, arrayPosition1);

//destructuring sin generar todas las variables antes de la posicion a la que se quiere llegar
const [, , , arrayPosition3] = tecnologías;
console.log(arrayPosition3);
//se salta las primeras posiciones sin generar de forma obligatoria las demas variables
