console.log("conexion exitosa...")
/* 
=================================
1. ¿que es una condicion js?
=================================
una condicion nos permite tomar decisiones en el codigo.
separando dos caminos el si(if)y el no(olse).

estructura basuca:( sintaxis --> reglas del lenguaje de programacion)

if (condicion) {
    //codigo que se ejecuta si la condicion es verdadera
}

else {
    //codigo que se ejecuta si la condicion es falsa.
}

*/

//ejemplo 1: (numerico) -- IF
let edad = 18;

if (edad <= 18) { //condicion si
    console.log("eres mayor de edad");
}

//ejemplo 2: Dos caminos positivos
let temperatura = 18;

if (temperatura > 20){ //condicion si
    console.log("hace calor")
} else{ //condicion no
    console.log("hace frio")
}

//ejemplo 3: - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0){ //primera condicion
    console.log("Excelente");
} else if (nota >= 4.0){ //segunda condicion
    console.log("aprovado");
} else { //valor si no cumple anteriores
    console.log("reprobado, estudia mas")
}

//ejemplo 4: condiciones con STRING
let nombre = "Gian"

//comparacion exacta (===)
if (nombre === "Gian"){
    console.log("hola, " + nombre)
} else {
    console.log("tu no eres Gian")
}

/* 
OPERADORES DE COMPARACION

> mayor que 
< menor que 
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto 
*/
// Ejemplo de distinto
let num = 10;
let num2 = 5
if(num !== num2){
    console.log(`El número: ${num} es distinto que ${num2}`)
} else{
    console.log("son iguales")
}