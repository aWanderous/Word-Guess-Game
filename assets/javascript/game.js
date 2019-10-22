// the counters starting points
var wins = 0;
var losses = 0;
var guessCount = 10;

// words in array
var heroes = ["ant-man", "aquaman", "beast", "batman", "hawkman", "superman", "wonder woman", "green arrow", "captain america", "daredevil", "falcon", "hulk", "ironman", "thor", "robin", "storm", "war machine", "doctor strange", "spiderman"];

var theHero;
var chosenHero = [];
var correct = [];
var incorrect = [];
var solved = false;

// start the game
$(document).one("keyup", function start() {
    $("#starter").hide();
    $("#title").text("Guess the hero!");
    newHero();
    play();
})
//generate new word
function newHero() {
    theHero = heroes[Math.floor(Math.random() * heroes.length)];
    chosenHero = [];
    for (var i = 0; i < theHero.length; i++) {
        chosenHero[i] = "_";
        $("#game").html(chosenHero.join(" "))
    }
    correct = [];
    incorrect = [];
    guessCount = 10;
    solved = false;
};


function play() {
    // when button is released
    document.onkeyup = function (event) {
        keyCode = event.key; 
        
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122)) {
            $("#message").text("Please enter a letter")
            return false;
            play();
        } else {
            choice = keyCode;
            console.log(choice)
            if (incorrect.includes(choice) || correct.includes(choice)) {
                $("#message").text("This letter has already been guessed");
            } else {
                
                function spellCheck(choice) {
                    for (var i = 0; i < theHero.length; i++) {
                        if (choice === theHero[i]) {
                            chosenHero[i] = choice;
                            correct.push(choice);
                            console.log(correct)
                            $("#message").text("The letter " + choice + " is in the hero's name.");
                        } else {
                            incorrect.push(choice);
                            console.log(incorrect)
                            $("#message").text("The letter " + choice + " is not in the hero's name.");
                            guessCount--;
                            console.log(guessCount)
                        }
                    }
                }
            };
        };
    }
}