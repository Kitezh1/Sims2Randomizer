const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];

const words = ["Food", "Bar", "Hats", "Sunny", "Bacon"];

const container = document.getElementById("show-letters");
const wordElement = document.getElementById("word");
const myImage = document.getElementById("hangImg");
let imgCounter = 1;
let wrongLetCounter = 0;

const myNumber = Math.floor(Math.random() * words.length);
const myWord = words[myNumber].toLowerCase();
console.log(myWord);

// Create a variable to keep track of the guessed word state
let guessedWord = "_".repeat(myWord.length);

// Display underscores for the word to guess
wordElement.textContent = guessedWord.split('').join(' ');

// Create buttons for each letter
letters.forEach(letter => {
    const newButton = document.createElement("button");
    newButton.addEventListener("click", checkLetter);
    newButton.textContent = letter;
    newButton.classList.add("btn-primary", "btn", "m-1");
    container.appendChild(newButton);
});

function checkLetter(event) {
    const clickedButton = event.target;
    const buttonText = clickedButton.textContent;
    let newGuessedWord = "";
    let letterFound = false;

    // Update guessedWord with the correct letters
    for (let i = 0; i < myWord.length; i++) {
        if (myWord[i] === buttonText) {
            newGuessedWord += buttonText;
            letterFound = true;
        } else {
            newGuessedWord += guessedWord[i];
        }
    }

    if (!letterFound) {
        wrongLetCounter++;
        if (imgCounter < 7) {
            imgCounter++;
            myImage.setAttribute('src', "images/stage" + imgCounter + ".jpg");
        }
        if (imgCounter >= 7) {
            const gameOver = document.createElement("h3");
            container.appendChild(gameOver);
            gameOver.textContent = "The Word was: " + myWord;
            disableButtons();
        }
    }

    guessedWord = newGuessedWord;

    if (!guessedWord.includes("_")) {
        const congratulations = document.createElement("h3");
        container.appendChild(congratulations);
        congratulations.textContent = "YOU GOT IT!";
        disableButtons();
    }

    // Update the displayed word with spaces between underscores and letters
    wordElement.textContent = guessedWord.split('').join(' ');
}

function disableButtons() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}