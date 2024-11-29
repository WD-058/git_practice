// Rock Paper Scissors
// Description: Implement a basic Rock Paper Scissors game.
// Requirements:
// The program should take the player’s move as an input from process.argv.
const player1Move = process.argv[2]?.toLowerCase();
const moves = ["rock", "paper", "scissors"];
const computerMove1 = moves;
if (!moves.includes(player1Move)) {
  console.log("Please make a valid move: rock, paper, or scissors");
  process.exit(1);
}
const computerMove = moves[Math.floor(Math.random() * 3)];
let result;
if (player1Move === computerMove) {
  result = "draw";
} else if (
  (player1Move === "rock" && computerMove === "scissors") ||
  (player1Move === "paper" && computerMove === "rock") ||
  (player1Move === "scissors" && computerMove === "paper")
) {
  result = "win";
} else {
  result = "lose";
}
console.log(`You chose: ${player1Move}`);
console.log(`Computer chose: ${computerMove}`);
console.log(`Result: You ${result}!`);
// The program should randomly generate a move for the computer.
// Determine the winner based on the rules of Rock Paper Scissors.
// Output the result (win, lose, or draw) to the console.
// Example:
// node rockPaperScissors.js rock
// # Output: You chose rock. Computer chose scissors. You win!
