// Rock Paper Scissors
// Description: Implement a basic Rock Paper Scissors game.
// Requirements:
// The program should take the player’s move as an input from process.argv.
// The program should randomly generate a move for the computer.
// Determine the winner based on the rules of Rock Paper Scissors.
// Output the result (win, lose, or draw) to the console.
// Example:
// node rockPaperScissors.js rock
// # Output: You chose rock. Computer chose scissors. You win!

const rps = ["Rock", "Paper", "Scissors"];

const computerChoice = rps[Math.floor(Math.random() * rps.length)];

const args = process.argv.slice(2);

let playerChoice = args[0];

if (playerChoice) {
  playerChoice =
    playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
}

if (!rps.includes(playerChoice)) {
  console.log("Not a valid input. Please choose Rock, Paper, or Scissors.");
  process.exit(1);
}

console.log("Player chose: " + playerChoice);
console.log("Computer chose: " + computerChoice);

if (computerChoice === playerChoice) {
  console.log("Draw");
} else if (
  (computerChoice === "Rock" && playerChoice === "Scissors") ||
  (computerChoice === "Paper" && playerChoice === "Rock") ||
  (computerChoice === "Scissors" && playerChoice === "Paper")
) {
  console.log("Computer wins");
} else {
  console.log("Player wins");
}
