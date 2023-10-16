"use strict";

const nombre1 = "Gustavo";
let edad = 46;
const diasSemana = 7;
const mesAnio = 12;
let ciudad = "Valencia";
let cadena = "All work and no play makes Jack a dull boy";

console.log(nombre1);
console.log(edad);
console.log(diasSemana);
console.log(mesAnio);

// ejercicio 4
console.log(`Hola, me llamo ${nombre1} y vivo en ${ciudad}`);

// ejercicio 5
console.log(
  `La variable "cadena" tiene un largo total de ${cadena.length} caracteres`
);

// ejercicio 6
let var1 = 7;
let var2 = 4;

console.log(var1 + var2);

// ejercicio 7
let numAleat = Math.floor(Math.random() * 10 + 1);
console.log(numAleat);

// ejercicio 8
const a = 5;
const b = 10;
const c = 15;

console.log(`es el valor de ${a} + ${b} = ${c} ?? => ${a + b === c}`);

// ejercicio 9
const numeroComprobar = 7;
if (numeroComprobar % 2 === 0) {
  console.log(`el numero ${numeroComprobar} es PAR`);
} else {
  console.log(`el numero ${numeroComprobar} es IMPAR`);
}

// ejercicio 10
const edadMinima = 18;
const edadMáxima = 65;
const pesoMinimo = 50;
const enfermedadCronica = false;

if (
  edadMinima >= 18 &&
  edadMáxima <= 65 &&
  pesoMinimo >= 50 &&
  enfermedadCronica != true
) {
  console.log(`La persona en cuestion es apta para donación`);
} else {
  console.log(`La persona no es apta para donación`);
}

// ejercicio 11
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// ejercicio 12
let num6 = 6;
for (let i = 0; i <= 10; i++) {
  console.log(`${num6} x ${i} = `, num6 * i);
}

// ejercicio 13
const fecha = new Date();
console.log(`La fecha actual es: `, fecha);

// ejercicio 14
function saludar(nombre1) {
  console.log(`Hola ${nombre1}`);
}
saludar("Gustavo");

// ejercicio 15
const suma = function (a, b) {
  return a + b;
};
const result = suma(103, 5);
console.log(result);

// ejercicio 16
const calcularPromedio = (numero1, numero2) => (numero1 + numero2) / 2;
console.log(calcularPromedio(114, 22));

// ejercicio 17
function mostrarNumerosPares(limite) {
  for (let i = 2; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
mostrarNumerosPares(32);

// ejercicio 18
let estudiante = {
  nombre: "Marta",
  apellido: "Silva",
  edad: 22,
  carrera: "Ingeniería en Computación",
  promedio: 9.1,
};
estudiante.presentacion = function () {
  console.log(
    `Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}`
  );
};

estudiante.presentacion();

// ejercicio 19
for (const llave in estudiante) {
  console.log(`${llave} :`, estudiante[llave]);
}

// ejercicio 20
const calle = estudiante.direccion?.calle;
console.log(calle);

// ejercicio 21
let estudianteCopia = { ...estudiante };
estudianteCopia.nombre = "Pepe";
console.log("nombre en objeto ESTUDIANTE:");
console.log(estudiante.nombre);
console.log("nombre en objeto ESTUDIANTECOPIA:");
console.log(estudianteCopia.nombre);

// ejercicio 22
const { nombre, apellido, carrera } = estudiante;

console.log(nombre);
console.log(apellido);
console.log(carrera);

// ejercicio 23
const numbers = [1, 2, 3, 4, 5, 6];
console.log(`el valor del 5to elemento del Array es: ${numbers[4]}`);

// ejercicio 24
const colores = ["rojo", "azul", "verde", "amarillo", "naranja"];
for (const color of colores) {
  console.log(color);
}

// ejercicio 25
const frutas = ["manzana", "naranja", "uva", "plátano", "kiwi"];
frutas.push("fresa", "mango");
console.log(frutas);
console.log(`el largo del Arrays es ${frutas.length}`);

// ejercicio 26
const frutas2 = ["manzana", "naranja", "uva", "plátano", "kiwi"];
const frutDelete = frutas2.splice(1, 2, "fresa", "mango");
console.log(frutas2);
console.log(frutDelete);

// ejercicio 27
const frutas3 = ["manzana", "naranja", "uva", "plátano", "kiwi"];
if (frutas3.includes("uva")) {
  console.log(`El array contiene la fruta UVA`);
} else {
  console.log(`El Array no contiene UVA`);
}
if (frutas3.includes("cereza")) {
  console.log(`Contiene CEREZA`);
} else {
  console.log(`No contiene CEREZA`);
}

// ejercicio 28
const animales = ["gato", "elefante", "perro", "jirafa", "tigre"];
const animFive = animales.find((animal) => animal.length > 5);
console.log(animFive);

// ejercicio 29
const animales2 = ["gato", "elefante", "perro", "jirafa", "tigre"];
const newAnimales = animales2.map((animal) => animal.length);
console.log(newAnimales);

// ejercicio 30
const numeros30 = [5, 12, 8, 16, 7, 11];
const filterNum = numeros30.filter((numeros) => numeros > 10);
console.log(filterNum);

// ejercicio 31
const numeros31 = [1, 2, 3, 4, 5];
const prodNum = numeros31.reduce((acumula, actual) => acumula * actual);
console.log(prodNum);

// ejercicio 32
const numeros32 = [18, 5, 32, 7, 15];
const orden = numeros32.sort((a, b) => a - b);
console.log(orden);
