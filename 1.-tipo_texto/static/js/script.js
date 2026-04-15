console.log("conexion cor js correcta");
/*
datos: tipo texto (string)
1.- constenacion de texto con el signo +
podemos unir texto y variables 
*/
//concatenacion: unir texto y/o variables
const nombre = "Gian"
const apellido = "huenuleo"
//unimos ambas constantes con untexto extra
console.log ("hola, mi nombre es: " + nombre + " " + apellido );

/*
2.- ver el tipo de dato (typeof)
*/
console.log("la variable nombre es un tipo de dato: " + typeof nombre);

//template literals (forma moderna para conectar)
console.log(``);

//mostrar el largo de un string(texto) - contar los caracteres.
// .legth --> para contar caracteres y espacio.
let palabra = "paralelepipedo"
console.log(`la palabra ${palabra} tiene ${palabra.length} letras.`);

// crear una frase y contar sus caracteres.
let frase = ".legth es para contar caracteres y espacios como esta"
console.log(`la frase ${frase} tiene ${frase.length} letras.`);

//metodo comunes en js para formatear texto 
//trasformar texto en mayúsculas
let texto = "dAddY YaNKee es WekITo";
console.log(texto1.toUpperCase());

//transformar texto en minusculas  .toLoweCase()
console.log(texto1.toLoweCase());

//buscar texto dentro de un string
let texto2 = "leche, azucar, pera , huevos, harina";
console.log(texto1.includes("peras")); //true

//convertir una variable a texto
let telefono = 98776543;
let telefono_texto = string(telefono);
console.log(`mi número de telefono &{telefono_texto} es de tipo: ${typeof telefono_texto}`)