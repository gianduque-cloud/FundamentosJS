console.log("Conexión exitosa con JS...")

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada() {
    let edad = 16;
    alert(`Mi edad es: ${edad} años
    \nEn 5 años tendré: ${edad + 5} años
    \nHace 10 años tenía: ${edad - 10} años`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento() {
    let precio = 25000;
alert(`El precio es de: ${precio}
    \nPero con descuento: ${precio - (precio * 0.20)}`); //alerta en pantalla
}

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas() {
    let nota1 = 7.5;
    let nota2 = 8.3;
    let nota3 = 6.9;
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`Se tiene 3 notas ${nota1}, ${nota2}, ${nota3}
        \nEl promedio de estas es: ${promedio}
        \nY redondeado seria ${Math.round(promedio)}`); //alerta en pantalla
}

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura() {
    let temperatura = 15; // Temperatura actual en grados Celsius
    let aumentada = temperatura + 3; // Aumenta en 3 grados
    let disminuida = aumentada - 5; // Disminuye en 5 grados
    alert(`Temperatura actual: ${temperatura}°C
    \nDespués de aumentar 3 grados: ${aumentada}°C
    \nDespués de disminuir 5 grados: ${disminuida}°C`); //alerta en pantalla
}

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo() {
    let sueldoPorHora = 8000;
    let horasTrabajadas = 45;
    let sueldo = sueldoPorHora * horasTrabajadas;
    let horasExtra = 5;
    let sueldoExtra = horasExtra * sueldoPorHora;
    let nuevoSueldo = sueldo + sueldoExtra;
    alert(`Sueldo por 45 horas: ${sueldo}
    \nSueldo por 5 horas extra: ${sueldoExtra}
    \nNuevo sueldo total: ${nuevoSueldo}`); //alerta en pantalla
}

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function divisionResto() {
    let numero1 = 10;
    let numero2 = 3;
    let division = numero1 / numero2;
    let resto = numero1 % numero2;
    alert(`División: ${numero1} / ${numero2} = ${division}
    \nResto: ${numero1} % ${numero2} = ${resto}`); //alerta en pantalla
}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function compararNumeros() {
    let numero1 = 15;
    let numero2 = 10;
    let comparacion = numero1 > numero2 ? "es mayor que" : "no es mayor que";
    let esIgualA10 = (numero1 === 10 || numero2 === 10) ? "Sí, uno de los números es igual a 10" : "No, ninguno de los números es igual a 10";
    alert(`Comparación: ${numero1} ${comparacion} ${numero2}
    \n${esIgualA10}`); //alerta en pantalla
}

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacionCientifica() {
    let poblacion = 1e6; // Población de 1 millón
    let grupos = 4;
    let poblacionPorGrupo = poblacion / grupos;
    alert(`Población total: ${poblacion}
    \nNúmero de grupos: ${grupos}
    \nPoblación por grupo: ${poblacionPorGrupo}`); //alerta en pantalla
}

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaCalculo() {
    let base = 3;
    let exponente = 4;
    let potencia = Math.pow(base, exponente);
    let resultado = (potencia * 2) - 10;
    alert(`3 elevado a 4: ${potencia}
    \nMultiplicado por 2: ${potencia * 2}
    \nResultado final después de restar 10: ${resultado}`); //alerta en pantalla
}

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function lanzarDado() {
    let dado = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
    let resultado = dado >= 4 ? "¡Gana!" : "Pierde";
    alert(`Número del dado: ${dado}
    \nResultado: ${resultado}`); //alerta en pantalla
}