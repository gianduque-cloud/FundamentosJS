console.log("Hola cabros del yutu");

//seleccion de tiutulo con querySelector
let tittle = document.querySelector("#tittle");
console.log(tittle); // <h1 id="tittle">Hola mundo</h1>
console.log(`´El titulo es: ${tittle.textContent}`); // El titulo es: Hola mundo

// Seleccionar un parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

// seleccionar dentro del nav
let logoImg = document.querySelector("nav img");
console.log(logoImg); // <img src="img/logo.png" alt="Logo">