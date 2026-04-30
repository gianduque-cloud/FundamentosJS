console.log ("conexión exitosa con JS..." )
////////////////ESTUDIAR\\\\\\\\\\\\\\\\\\\
// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 3.0
    let nombre = "Juan"
    if (nota >= 6.0) {
        alert(`el estudiante ${nombre} tiene nota ${nota}
    \ny su resultado es: Excelente rendimiento`);
    } else if (nota >= 4.0) {
        alert(`el estudiante ${nombre} tiene nota ${nota}
    \ny su resultado es: aprobado`)
    } else {
        alert(`el estudiante ${nombre} tiene nota ${nota}
    \ny su resultado es: bajo rendimiento`)
    }
}
// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre = "daniel pérez"
    alert(`El nombre convertido es: ${nombre.toUpperCase()} 
    \nY tiene ${nombre.length} caracteres`);

}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo= "ejemplo@gmail.com"
    if(correo === "ejemplo@gmail.com" )
    alert(`El correo convertido es: ${correo}
        \nY y el resultado es: correo valido`)
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase="estoy aprendiendo JavaScript";
if(frase.length >= 20){ 
    alert(`tiene ${frase.length} y es una frase larga`);
} else if (frase.length >= 11) {
    alert (`La frase es mediana`)
}
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto= "teclado";
    let precio = 50000
    let descuento = 0.1
    alert(`El producto ${producto.toUpperCase()}
    tiene un precio final de $${precio -(precio * descuento)}`)

}