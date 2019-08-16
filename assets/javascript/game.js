
// the counters starting points
var wins = 0;
var losses = 0;
var guessCount = 10;


// letters in array
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// words in array
var words = ["hawkman","aquaman","batman","superman","wonder woman", "green arrow", "captain america", "daredevil", "falcon", "hulk", "ironman", "thor", "robin", "storm", "war machine", "doctor strange", "spiderman"];

// when button is released
document.onkeyup = function(event) {
var userGuess = event.key;

// random generator
var theHero = words[Math.floor(Math.random() * words.length)];

// each letter sperated into a single string
for (var i = 0; i < theHero.length; i++) {
}

// prints the result of each game
userChoiceText.textContent = "You guessed: " + userGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
countText.textContent = "Guesses you have left: " + guessCount;
correctText.textContent = "The hero was: " + theHero;
};