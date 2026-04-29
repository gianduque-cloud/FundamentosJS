console.log("conexion exitosa con js...")

///////////////////ESTUDIAR\\\\\\\\\\\\\\\\\\\\\\\

// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Gian";
    alert(`bienvenido ${nombre}`);

}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let numero = 5;
    let suma = 10;
    alert(`la suma es: ${numero + suma}`);

}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let numero2 = 15;
    let resta = 3
    alert(`la resta es: ${numero2 - resta}`)

}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let numero3 = 1;
    let multiplicador = 24
    alert(`la multiplicacion es: ${numero3 * multiplicador}`)

}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let numeros = (5.7 + 5.7 + 5.7)
    alert(`el promedio es; ${numeros / 3}`)

}
    

// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad=18

    if(edad >= 18) { 
    alert(`eres mayor de edad`);
    } else {
    alert(`eres menor de edad `);
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero1=8
    if(numero1 % 2 ===0){ 
    alert(`El numero es par`)
    }
    else {
    alert(`El numero es impar`)
    }


}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota=6.0
    if(nota > 5.0){
        alert(`Haz aprobado`)
    }
    else {
        alert(`No haz aprobado`)
    }

}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let precioOriginal=20000
    let descuento=0.1
    alert(`precio final con descuento ${precioOriginal- precioOriginal* descuento}`)

}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let numerico=21
    if(numerico > 22){
        alert (`EL numero es mayor a 22`)
    }
    else{
        alert(`el numero es menor que 22`)
    }

}

