//list of all the options 
const computerChoices = [ "rock", "paper", "scissors"];

//holds either wins, losses, or ties
let wins = 0;
let losses = 0;
let ties = 0;


//loop through number of times to play
for (let i = 0; i < 5; i++) {
    const userGuess = prompt("Enter rock, paper, or scissors to start playing");
    //send each guess to be lowercase
    userGuess = userGuess.toLowerCase();
}

