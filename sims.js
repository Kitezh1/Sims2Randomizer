function randAspiration() {
    const aspirations = ["pleasure.png", "Family", "Romance", "Knowledge", "Fortune", "Popularity"];
    number = Math.floor(Math.random() * 6);
    return aspirations[number];
}

function randHobbie() {
    const hobbies = ["Cuisine", "Film & Literature", "Tinkering", "Sports", "Music & Dance", "Fitness", "Arts & Crafts", "Science", "Games", "Nature"];
    number = Math.floor(Math.random() * 9);
    return hobbies[number];
}


// HOBBIES
const myHobbie = document.getElementById("hobbieRand");
const hobbieCalc = document.getElementById("hobbieCalc");

hobbieCalc.addEventListener("click", function(e) {
    myHobbie.innerHTML = randHobbie();

});


// ASPIRATIONS
const myAspiration = document.getElementById("aspirationRand");
const aspCalc = document.getElementById("aspCalc");

aspCalc.addEventListener("click", function(e) {
    myAspiration.innerHTML = randAspiration();
});