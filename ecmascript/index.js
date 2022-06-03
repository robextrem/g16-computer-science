// Imprimir Emoji Windows+.

console.log("🤓");

/**
 * Variables en JS
 *
 * var: alcance función
 * let: alcance de bloque
 * const: alcance de bloque, no se debería de modificar
 */

// Camel Case: inicia con minúscula y cada palabra empieza con mayúscula
// Pascal Case: inicia con mayúscula y cada palabra empieza con mayúscula

/**
 * Variables
 *
 * var nombreCompleto = "Víctor Reyes";
 * nombreCompleto = "René Ayerdí";
 *
 * let nombreCompleto = "Víctor Reyes";
 * nombreCompleto = "René Ayerdí";
 *
 * const nombreCompleto = ["Víctor Reyes", "René Ayerdí"];
 * nombreCompleto.push("Brenda Cárdenas");
 *
 * const DB_PASSWORD = 'qE89Z2ChkHkmNV';
 */

function iterar() {
  for (let i = 0; i < 10; i++) {
    // Alcance de bloque
    let num = i + 1;
    console.log(num);
  }
}
iterar();

/**
 * Parámetros
 *
 *
 * function nombre(nombre, edad) {
 * let pNombre = nombre || "Ingrese un nombre";
 * let pEdad = edad || "Ingrese la edad";
 * console.log(pNombre, pEdad);
 * }
 * nombre();
 */

function nombre(nombre = "Ingrese un nombre", edad = "Ingrese la edad") {
  console.log(nombre, edad);
}
nombre("Victor Reyes", 36);

/**
 * Concatenar
 * console.log("Mi nombre es "+nombre+" "+apellido+" y mi edad es "+edad);
 */

// let nombre = "Víctor";
// let apellido = "Reyes";
// let edad = 36;

console.log(`Mi nombre es ${nombre} ${apellido} y mi "edad" es ${edad}`);

/**
 * Salto de línea
 * const mensajeLargo = "Limón\nPera\nManzana";
 */

const mensajeLargo = `Limón
Pera
Manzana`;

console.log(mensajeLargo);

/**
 * Destructuración
 * console.log(personajeDBZ.nombre, personajeDBZ.nivel, personajeDBZ.raza);
 */

const personajeDBZ = {
  nombre: "Vegeta",
  nivel: 8000,
  raza: "Sayajin",
  planeta: "Vegeta",
  aparariciones: {
    sayajin: true,
    frezer: true,
    cell: true,
  },
};

const { nombre, nivel, raza } = personajeDBZ;
const { sayajin, frezer, cell } = personajeDBZ.aparariciones;

console.log(nombre, nivel, raza);
console.log(sayajin, frezer, cell);

/**
 * Spread Operator
 */

const vegeta = {
  nombre: "Vegeta",
  nivel: 8000,
  raza: "Sayajin",
  planeta: "Vegeta",
  aparariciones: {
    sayajin: true,
    frezer: true,
    cell: true,
  },
};

let goku = { ...vegeta, nombre: "Goku", nivel: 9000, planeta: "Tierra" };

console.log(goku);

/**
 * Funciones flecha
 *
 * function imprimir(){
 *   console.log('🖨️')
 * }
 */

// const imprimir = (saludo) => {
//   console.log(`🖨️ : ${saludo}`);
// };

// const imprimir = saludo => {
//   console.log(`🖨️ : ${saludo}`);
// };

// const imprimir = saludo => console.log(`🖨️ : ${saludo}`);

const imprimir = (saludo) => {
  let fecha = Date.now();
  console.log(`🖨️ : ${fecha} ${saludo}`);
};

imprimir("Hola");

// function suma(a, b) {
//   return a + b;
// }

let suma = (a, b) => a + b;
console.log(suma(1, 2));

// import { funcion } from "./folder";

// $('#contenedor')
// document.getElementById('contenedor')
// document.querySelector('#contenedor')

/**
 * . = clase
 * # = id
 * tag = h1, p, a
 */
