// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let computerChoices = ["rock", "paper", "s"];

// set wins loss and ties to 0 initially
let wins = 0;
let losses = 0;
let ties = 0;

for (var i = 0; i < 5; i++) {
  //get computer response at random
  let computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  //get user response 
  let userGuess = prompt("Enter rock, paper, or scissors to play!");
  userGuess = userGuess.toLowerCase();

  // Only run game logic if user chose a valid option
  if (userGuess === "rock" || userGuess === "paper" || userGuess === "scissors") {
    alert("The computer chose " + computerGuess);

    // Win/lose conditions:
    if (
      (userGuess === "rock" && computerGuess === "scissors") ||
      (userGuess === "scissors" && computerGuess === "paper") ||
      (userGuess === "paper" && computerGuess === "rock")
    ) {
      wins++;
      alert("You've won " + wins + " time(s)!");
    } else if (userGuess === computerGuess) {
      ties++;
      alert("You've tied " + ties + " time(s).");
    } else {
      losses++;
      alert("You've lost " + losses + " time(s).");
    }
  }
}

// alert the total wins and losses
alert(
  "Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses
);
