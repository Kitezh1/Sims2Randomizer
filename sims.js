function randNumber(int) {
    return int;
}

textContent = aspirations[number];


function randAspiration() {
    const aspirations = ["Pleasure", "Family", "Romance", "Knowledge", "Fortune", "Popularity"];
    number = Math.floor(Math.random() * 6);
    return aspirations[number];
}

const myAspiration = document.getElementById("aspirationRand");

myAspiration.addEventListener("click", function() {
    randAspiration.innerHTML = randAspiration;

});