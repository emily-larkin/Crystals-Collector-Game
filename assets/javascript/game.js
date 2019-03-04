// variables 
var wins = 0;
var losses = 0;
var totalScore = 0;
var scoreCounter = 0;
var goalScore = 0;
// create 4 crystal buttons that each have a different value
// creating different random values between 1 and 12 for each crystal. Same num until refresh
var crystalValue1 = Math.floor(Math.random() * 12) + 1;
var crystalValue2 = Math.floor(Math.random() * 12) + 1;
var crystalValue3 = Math.floor(Math.random() * 12) + 1;
var crystalValue4 = Math.floor(Math.random() * 12) + 1;

// creating on click functions
$("#crystal1").on("click", crystal1);
$("#crystal2").on("click", crystal2);
$("#crystal3").on("click", crystal3);
$("#crystal4").on("click", crystal4);

// function to reset crystal values 
function resetsCrystals() {
    crystalValue1 = Math.floor(Math.random() * 12) + 1;
    crystalValue2 = Math.floor(Math.random() * 12) + 1;
    crystalValue3 = Math.floor(Math.random() * 12) + 1;
    crystalValue4 = Math.floor(Math.random() * 12) + 1;
}

// creates a random number for the goal for the user between 19 and 120
function makeGoal() { 
    goalScore = Math.floor(Math.random() * 101) + 19;

    var goalScoreText = document.getElementById("goal-score");
    goalScoreText.textContent = "Goal Score: " + goalScore;
}

var winsText = document.getElementById("wins-text");
winsText.textContent = "Wins: " + wins;

var lossesText = document.getElementById("losses-text");
lossesText.textContent = "Losses: " + losses;

var totalScoreText = document.getElementById("score-text");
totalScoreText.textContent = "Your total score is: " + totalScore;


// when the crystals are clicked, it adds their value to the users score
function crystal1() {
    totalScore = totalScore + crystalValue1;
    totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    checkScore(totalScore);
}

function crystal2() {
    totalScore = totalScore + crystalValue2;
    totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    checkScore(totalScore);
}

function crystal3() {
    totalScore = totalScore + crystalValue3;
    totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    checkScore(totalScore);
}

function crystal4() {
    totalScore = totalScore + crystalValue4;
    totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    checkScore(totalScore);
}

// the game resets if the user wins or loses 
// when the game resets, the user will see a new random number that is the goalScore
// when the game resets, the users score and score counter will reset to 0
function checkScore(totalScore){
    // if the user meets the goalScore, the user wins
    if (totalScore === goalScore) {
        wins++;
        alert("You win!");
        gameRestart();
    }
    
    // if the user goes above the goalScore, the user loses 
    else if (totalScore >= goalScore) {
        losses = losses + 1;
        alert("You lose!");
        gameRestart();
    }
    
    winsText;
    winsText.textContent = "Wins: " + wins;

    lossesText;
    lossesText.textContent = "Losses: " + losses;
}

function gameRestart(){
    totalScore = 0;
    makeGoal();
    resetsCrystals();
    }

makeGoal();
