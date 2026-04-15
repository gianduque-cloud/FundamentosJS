console.log("conexion correcta con js");

// 💻 Desafío: Strings en JavaScript (Aplicación Integrada)
// 🎯 Objetivo
// Aplicar de forma combinada:
// Concatenación y template literals
// typeof
// .length
// Métodos (toUpperCase, toLowerCase)
// .includes()
// Conversión de datos

// 📌 Instrucciones generales
// Crear un archivo .js
// Respetar nombres y valores indicados
// Mostrar todo en consola
// Cada ejercicio debe resolverse completo (no por partes)

// 🧠 Ejercicios

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.

let nombre = "camila"
let edad = "25"
console.log( "Hola, mi nombre es" + nombre + " y tengo " + edad + " años" )

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas

let comuna = "maipu" 
let region = "metropolitana"
console.log( "la persona vive en: " + comuna.toUpperCase() + " de la region: " + region.toLowerCase() )

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato

let lenguaje = "python"
console.log( `la palabra ${lenguaje.toUpperCase()} tiene ${lenguaje.length} letras.`);
console.log("la variable python es un tipo de dato: " + typeof lenguaje);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas

let mensaje = "me encanta programar en JavaScript"
console.log( `el mensaje  "${mensaje.toLowerCase()}" contiene ${mensaje.length} letras `);
console.log(`el mensaje contiene la palabra "JavaScript" `)

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres

let compras = " arroz, fideos, aceites, sal"
console.log(` la variable "compras = ${compras.toUpperCase()}" contiene ${compras.length} letras y existe la palabra "ACEITE"`);

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene


// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS

let nombre2 = "diego"
let apellido = " rojas"
console.log( `NOMBRE COMPLETO ${nombre2.toUpperCase() + apellido.toUpperCase()} Y EL NOMBRE COMPLETO TIENE ${nombre2.length + apellido.length} CARACTERES` )

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres

let frase = "hoy aprenderemos sobre strings"
console.log(`la frase "${frase.toUpperCase()}" contiene ${frase.length} caracteres y contiene la palabras "strings"`);

// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres

let texto= "programar es divertido"
console.log(`la cantidad de caracteres en la variable "${texto}" (texto) contiene ${texto.length} caracteres
    en mayuscúlas: ${texto.toUpperCase()}. en minúsculas: ${texto.toLowerCase()}`)
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS

let curso = "4°C"
let año = "2026"
console.log(`EL CURSO ${curso.toUpperCase()} DEL AÑO ${año.toUpperCase()}`);
console.log("la variable año es un tipo de dato: " + typeof año);
// ⭐ Desafío extra (nivel alto)
// Crea la variable:
// textoFinal: Estoy listo para el desafío
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "desafío"
// Muestre el texto en MAYÚSCULAS
// Indique el tipo de dato 
