console.log("conexión exitosa con js...")

// Tipos de datos numéricos

//1.- Declaración de numeros(creación de variables numéricas)
let edad = 31;
let temperatura = 5;
let precio = 19990;
let pi = 3.1416;
let descuento = 0.25;

//Operaciones básicas
let suma = 10 + 5; //15
let resta = 10 - 5; //5
let multiplicación = 10 * 5; //50
let división = 10 / 5;
let modulo = 10 % 3; //1
let potencia = 2 ** 3; //8 

console.log(`El resultado de 2 elevado a la 3 es: ${2 ** 3}.`);

//3.- Incremento y decremento (suma(++) o resta(--) 1)
let numero = 10;
numero++; // 11
numero--; // 9

//4.- Números con decimales
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

//5.- Números grandes y notación científica
let población = 1e6 //1000000
console.log("Número grande 1e6: " + población);
let numeroPequeno = 5e-3; //0.000001
console.log("Número pequeño 5e-3: " + numeroPequeno);

//6.- Operaciones  combinadas 
//calculo de precios
let precioProducto = 10000;
let iva = 0.19;
let total = precioProducto + (precioProducto * iva);//11900
console.log(`El precio total con IVA es: ${total}.`);
//Calculo de valor de hora trabajada 
let horas = 40;
let valorHora = 12000;
let sueldo = horas * valorHora; //480000
console.log(`El sueldo base es: ${sueldo}.`);

//7.- Redondeo de números
console.log(`Redondeando 4.6: ${Math.round(4.6)}.`); //5
console.log(`Redondeando 4.3: ${Math.floor(4.3)}.`); //4

//8.- Números aleatorios
let aleatorio = Math.random(); //Número entre 0 y 1
let dado = Math.floor(Math.random() * 6) + 1; //Número entre 1 y 6
console.log(`Tirar dados: ${dado}.`)

//9.- comparacion númericas
let a = 10;
let b = 5;
console.log ( a > b); //true
console.log ( a < b); //false
console.log ( a === 10); //true (=== estricta igualdad)
console.log(b === 3); //false