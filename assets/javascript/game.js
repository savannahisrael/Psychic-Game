// Set Variables
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesRemaining = 10;
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");
var winsCountText = document.getElementById("winsCount");
var lossesCountText = document.getElementById("lossesCount");


var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = options[Math.floor(Math.random() * options.length)];


//Function to repeat game

function gameReplay() {
    guessesRemaining = 10;
    lettersGuessed = [];
    computerGuess = options[Math.floor(Math.random() * options.length)];
}

// Game Code

document.onkeyup = function (event){
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    console.log(computerGuess);

if (options.indexOf(userGuess) > -1) {
    var userGuess = event.key.toLowerCase();
    if (lettersGuessed.indexOf(userGuess) === -1) {
        if (userGuess === computerGuess) {
            wins++;
            gameReplay();
        } else if (guessesRemaining > 1) {
            guessesRemaining--;
            lettersGuessed.push(userGuess);
        } else {
            losses++;
            gameReplay();
        }
        winsCountText.textContent = wins;
        lossesCountText.textContent = losses;
        guessesRemainingText.textContent = guessesRemaining;
        lettersGuessedText.textContent = lettersGuessed;
    } else {
        alert("Choose a new letter to continue the game!")
    }
} 
}










