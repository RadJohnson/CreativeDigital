console.log("script.js loaded");

const filmGrid = document.querySelector(".film-grid");//gets reference for film grid seems to be compleetly pointless
const filmCards = document.querySelectorAll(".film-card");
const filmCardButtons = document.querySelectorAll(".film-card button");
//console.log(filmGrid);
//console.log(filmCards);

console.log(filmCardButtons)

filmCardButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const filmCard = button.closest(".film-card");

        filmCard.classList.toggle("film-card--selected");
    });
});


//filmGrid.forEach(element => {
//const tempFilmCard = element.querySelector(".film-card");

//});
/*
filmCards.forEach(function (button) {
    button.addEventListener("click", function () {
        filmCardButton = button.closest(".film-card")

        filmCardButton.classList.toggle(".film-card--selected");
    })


});
*/
//filmGrid.children.addEventListener("click",function(button){});

//filmGrid.children.fo