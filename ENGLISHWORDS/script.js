// Arrays para almacenar palabras en español e inglés
var spanishWords = ["hola", "adiós", "casa", "perro", "gato"];
var englishWords = ["hello", "goodbye", "house", "dog", "cat"];

// Array para almacenar las palabras
var words = [];

// Contador de palabras guardadas
var wordCount = 0;

// Función para verificar si una palabra está en español o inglés
function isValidWord(word) {
    return spanishWords.includes(word.toLowerCase()) || englishWords.includes(word.toLowerCase());
}

// Función para agregar una palabra al array y actualizar la lista en la página
function addWord(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    var wordInput = document.getElementById("wordInput");
    var word = wordInput.value.trim();

    if (word !== "" && isValidWord(word) && !words.includes(word)) { // Verifica que la palabra no esté ya en el array
        words.push(word);
        wordCount++; // Incrementar el contador de palabras
        wordInput.value = ""; // Limpiar el campo de entrada
        renderWordList(); // Actualizar la lista de palabras en la página
        updateWordCount(); // Actualizar el contador de palabras
        speakWord(word); // Reproducir el audio de la palabra
    } else {
        alert("La palabra ya está en la lista o no es válida.");
    }
}

// Función para actualizar la lista de palabras en la página
function renderWordList() {
    var wordList = document.getElementById("wordList");
    wordList.innerHTML = ""; // Limpiar la lista antes de volver a renderizar

    words.forEach(function(word) {
        var li = document.createElement("li");
        li.textContent = word;
        wordList.appendChild(li);
    });
}

// Función para actualizar el contador de palabras en la página
function updateWordCount() {
    var wordCountElement = document.getElementById("wordCount");
    wordCountElement.textContent = "Palabras guardadas: " + wordCount;
}

// Función para reproducir el audio de una palabra
function speakWord(word) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(word);
    synth.speak(utterance);
}

// Asociar la función addWord al evento submit del formulario
var wordForm = document.getElementById("wordForm");
wordForm.addEventListener("submit", addWord);
