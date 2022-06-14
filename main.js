//list of all the options 
const computerChoices = [ "rock", "paper", "scissors"];

//holds either wins, losses, or ties
let wins = 0;
let losses = 0;
let ties = 0;


//loop through number of times to play
for (let i = 0; i < 5; i++) {
    //create the computer guess at random
    const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //create the user guess
    const userGuess = prompt("Enter rock, paper, or scissors to start playing");
    //send each guess to be lowercase
    userGuess = userGuess.toLowerCase();

    if(userGuess === "rock" || userGuess === "paper" || userGuess === "scissors") {
        alert("the computer chose" + computerGuess);
        
    }
}

