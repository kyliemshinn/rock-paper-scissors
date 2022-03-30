var userScore = 0;
var computerScore = 0;
var ties = 0;

//alert user to play rock, paper, scissors
alert("Do you want to play rock, paper scissors?");


//prompt user to input r, s, or p

function computerChoice() {
    var choices = ["R", "P", "S"];
    var random = choices[Math.floor(Math.random() * 3)];
    return random;
}

function userChoice() {
   var userInput = prompt("Type R, P, or S");
   return userInput;

}

computerChoice();

userChoice();
//alert user what the computer picks
function gameScore(userScore, computerScore) {
    if (userScore === "R") {
        if (computerScore === "S") {
            alert("Rock beats scissors. You win this round. Your score is: ") + userScore++;
        }
    } if (userScore === "S") {
        if (computerScore === "P") {
            alert("Scissors beats paper. You win this round. Your score is: ") + userScore++;
        }
    } if (userScore === "P") {
        if (computerScore === "R")
        alert("Paper beats rock. You win this round. Your score is: ") + userScore++;
    }if (userScore === computerScore) {
        alert("It's a tie!");
    } else {
        alert("")
    }

}



//confirm if you want to keep playing
//confirm()

//alert to show the wins, losses, and ties- conditional statements
//alert()

//confirm if you want to keep playing
//confirm()



