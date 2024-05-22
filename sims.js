function randAspiration() {
    const aspirations = ["pleasure", "Family", "Romance", "Knowledge", "Fortune", "Popularity"];
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
const aspImg = document.getElementById("aspImg");

aspCalc.addEventListener("click", function(e) {
    aspImg.src = "/icons/load.png";
    setTimeout(function() {
        let result = randAspiration();
        aspImg.src = "/icons/" + result + ".png";
        aspImg.alt = result;
        myAspiration.innerHTML = result;
    }, 200);
});