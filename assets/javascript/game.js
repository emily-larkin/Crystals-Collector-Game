// variables 
var wins = 0;
var losses = 0;
var totalScore = 0;
var scoreCounter = 0;
var goalScore = 0;

// creating on click functions
$("#crystal1").on("click", crystal1);
$("#crystal2").on("click", crystal2);
$("#crystal3").on("click", crystal3);
$("#crystal4").on("click", crystal4);

// create 4 crystal buttons that each have a different value
// creating different random values between 1 and 12 for each crystal. Same num until refresh
var crystalValue1 = Math.floor(Math.random() * 12) + 1;
var crystalValue2 = Math.floor(Math.random() * 12) + 1;
var crystalValue3 = Math.floor(Math.random() * 12) + 1;
var crystalValue4 = Math.floor(Math.random() * 12) + 1;
// creates a random number for the goal for the user between 19 and 120


function makeGoal() { 
    goalScore = Math.floor(Math.random() * 101) + 19;
    console.log(goalScore);

    var goalScoreText = document.getElementById("goal-score");
    goalScoreText.textContent = "Goal Score: " + goalScore;
}

// when the crystals are clicked, it adds their value to the users score
function crystal1() {
    console.log(crystalValue1);
    totalScore = totalScore + crystalValue1;
    console.log(totalScore);
    var totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    checkScore(totalScore);
}

function crystal2() {
    console.log(crystalValue2);
    totalScore = totalScore + crystalValue2;
    console.log(totalScore);
    var totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    checkScore(totalScore);
}

function crystal3() {
    console.log(crystalValue3);
    totalScore = totalScore + crystalValue3;
    var totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    console.log(totalScore);
    checkScore(totalScore);
}

function crystal4() {
    console.log(crystalValue4);
    totalScore = totalScore + crystalValue4;
    var totalScoreText = document.getElementById("score-text");
    totalScoreText.textContent = "Your total score is: " + totalScore;
    console.log(totalScore);
    checkScore(totalScore);
}

function checkScore(totalScore){
    // if the user meets the goalScore, the user wins
    if (totalScore === goalScore) {
        wins++;
        alert("You win!");
        displaytoPage(totalScore)
        gameRestart()
    }
    
    // if the user goes above the goalScore, the user loses 
    else if (totalScore >= goalScore) {
        losses = losses + 1;
        alert("You lose!");
        displaytoPage(totalScore)
        gameRestart()
    }
    var winsText = document.getElementById("wins-text");
    winsText.textContent = "Wins: " + wins;
    
    var lossesText = document.getElementById("losses-text");
    lossesText.textContent = "Losses: " + losses;
}

function gameRestart(){
    totalScore = 0;
    makeGoal();
}

function displaytoPage(totalScore) {

    
}

makeGoal();




// the game resets if the user wins or loses 


// when the game resets, the user will see a new random number that is the goalScore


// when the game resets, the value of each crystal will change


// when the game resets, the users score and score counter will reset to 0


// show the number of games the user has won/lost