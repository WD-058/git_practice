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

const playerMove = process.argv[2].toLowerCase();
const validMoves = ["rock", "paper", "scissors"];
if (!validMoves.includes(playerMove)) {
  console.log("Invalid move. Please choose rock, paper, or scissors.");
  process.exit(1);
}
const computerMove = validMoves[Math.floor(Math.random() * validMoves.length)];
let result;
if (playerMove === computerMove) {
  result = "draw";
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "paper" && computerMove === "rock") ||
  (playerMove === "scissors" && computerMove === "paper")
) {
  result = "win";
} else {
  result = "lose";
}
console.log(
  `You chose ${playerMove}. Computer chose ${computerMove}. You ${result}.`
);
