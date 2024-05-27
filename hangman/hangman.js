let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];

let words = ["Food", "Bar", "Hats", "Sunny", "Bacon"];

container = document.getElementById("show-letters");
myWord = document.getElementById("word");

myNumber = Math.floor(Math.random() * words.length + 1);
console.log(myNumber);













for (letter in letters) {
    newButton = document.createElement("button");
    newButton.textContent = letters[letter];
    newButton.classList.add("btn-primary", "btn", "m-1");
    container.appendChild(newButton);
}