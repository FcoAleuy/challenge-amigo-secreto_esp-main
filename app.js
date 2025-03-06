// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

function actualizarListaAmigos() {
    // 1️⃣ Obtener el elemento de la lista en el HTML
    let listaAmigos = document.getElementById("listaAmigos");

    // 2️⃣ Limpiar la lista para evitar duplicados
    listaAmigos.innerHTML = "";

    // 3️⃣ Iterar sobre el array de amigos y agregar cada amigo a la lista
    for (let amigo of amigos) {
        let elemento = document.createElement("li"); // Crear un nuevo <li>
        elemento.textContent = amigo; // Asignar el nombre del amigo
        listaAmigos.appendChild(elemento); // Agregarlo a la lista en el HTML
    }
}

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.querySelector("#nombreAmigo");
    let nombre = inputAmigo.value.trim(); // Elimina espacios extra

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = "";
    actualizarListaAmigos();
}

function sortearAmigo() {
    // 1️⃣ Validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // 2️⃣ Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3️⃣ Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4️⃣ Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎁`;
}