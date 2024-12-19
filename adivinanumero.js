// Vamos a crear la logica del juego

// Declaracion de variables

//Generamos el numero aleatorio
let randomNumber = Math.floor(Math.random() * 100) + 1; // Otra forma: "random_number"

//  Gueardamos una referencia a los elementos "p" de nuestro HTML
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

// Guardamos la referencia a los elementos input con las classes especificadas

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Guardamos el numero de intentos y una variable para generar un boton de reset

let guessCount = 1;
let resetButton // Para crear una referencia a un boton.

// Funciones
// Son bloques de codigo reutilizable que escribimos una sola vez y podemos ejecutar una y otra vez, ahorrando la necesidad de repetir codigo todo el tiempo

function checkGuess() {
    // condicionales
    // Son instrucciones que comprueban una comparacion y
    // realizara una accion u otra segun sea verdadero o falso.
    // Sintaxis condiciones
    /*
        if (condicion) {
            Cuando condicion es True
            Ejecuto este bloque de codigo
        } else {
            Cuenado condicion es False
            Ejecuto este bloque de codigo
        }
    */

    let userGuess = Number(guessField.value);

    // Comprobamos si el numero introducido es igual al numero aleatorio
    if (userGuess === randomNumber) {
        lastResult.textContent = "Correct!";
        // Si es igual, mostramos mensaje de Feliciacion
        lastResult.textContent == "Congratulations! You've made it!";
        // Cambiamos los estilos de fondo de lastResult
        lastResult.style.backgroundColor = "green";
        //Quitamos el texto de lowOrHi
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {  // fallanis y no quedan intentos
        lastResult.textContent = "Game over!";
        setGameOver();
    } else {
        lastResult.textContent = "Incorrect!";
        lastResult.style.backgroundColor = "red";
        // Comprobamos si el numero introducido es mayor o menor al aleatorio
        // Es la ayuda al jugador para adivinar el numero
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "The number you have inserted is too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "The number you have inserted is too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    resetButton.style.backgroundColor = "black";
    resetButton.style.color = "lightgreen";
    resetButton.style.padding = "10px";
    resetButton.style.border = "1px solid green";
    resetButton.style.borderRadius = "5px";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    // Bucle
    // Sintaxis for
    /*
        for(inicializar contador; condicion de parada; incrementar | decrementar variable contador) {
            bloque de codigo
        }
    */
    for ( let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "black";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
