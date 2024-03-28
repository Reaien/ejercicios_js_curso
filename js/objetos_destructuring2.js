//Destructuring cuando hay 2 o mas objetos

const producto = {
  nombre: "Laptop",
  precio: 1000,
  disponible: false,
};

const cliente = {
  nombre: "Ando",
  premium: true,
};

//Aplicar destructuring
//Si queremos extraer 2 keys del mimsmo nombre
//pero de distintos objetos, dará error, solo se puede
//tener 1 variable del mismo nombre
const { nombre } = producto;
const { nombre: nombreCliente } = cliente;
console.log(nombre, nombreCliente);
//para eso debemos renombrar una de las 2, en este caso
//renombramos la key del nombre cliente

//Aplicar destructuring a un objeto dentro de otro
const cliente2 = {
  nombre: "Ando",
  premium: true,
  direccion: {
    calle: "Calle 123",
  },
};

const {
  direccion: { calle },
} = cliente2;
console.log(calle);
//Recordar destructuring es sacar valor y asignarlos a variables
//En este caso, se accede a la key direccion que es n objeto
//Se accede a la variable calle y así se accede a su valor
