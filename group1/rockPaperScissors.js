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

// Rock Paper Scissors Game

// ASCII Art
const ascii = {
  logo: `
  ╦═╗┌─┐┌─┐┬┌─  ╔═╗┌─┐┌─┐┌─┐┬─┐  ╔═╗┌─┐┬┌─┐┌─┐┌─┐┬─┐┌─┐
  ╠╦╝│ ││  ├┴┐  ╠═╝├─┤├─┘├┤ ├┬┘  ╚═╗│  │└─┐└─┐│ │├┬┘└─┐
  ╩╚═└─┘└─┘┴ ┴  ╩  ┴ ┴┴  └─┘┴└─  ╚═╝└─┘┴└─┘└─┘└─┘┴└─└─┘
  `,
  win: `
    ┬ ┬  ┬  ┌┐┌
    │││  │  │││
    └┴┘  ┴  ┘└┘
    `,
  lose: `
    ┬    ┌─┐  ┌─┐  ┌─┐
    │    │ │  └─┐  ├┤
    ┴─┘  └─┘  └─┘  └─┘
      `,
  draw: `
    ┌┬┐  ┬─┐  ┌─┐  ┬ ┬
     ││  ├┬┘  ├─┤  │││
    ─┴┘  ┴└─  ┴ ┴  └┴┘
    `,
};

// COLORS to paint the console text
const colors = {
  reset: "\x1b[0m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  white: "\x1b[37m",
  bgRed: "\x1b[41m",
  bgWhite: "\x1b[47m",
};

// Convert r p s to Rock Paper Scissors
const rpsConvert = {
  r: "rock",
  p: "paper",
  s: "scissors",
};

function cpuPlay() {
  // Returns a random CPU move ("r", "p" or "s")
  const drawRockPaperScissors = ["r", "p", "s"];
  let i = Math.floor(Math.random() * 3); // pick a random index 0, 1 or 2
  let cpu = drawRockPaperScissors[i]; // take r, p or s with random index i
  return cpu;
}

function logMessage(message, rl) {
  // Logs a message and closes the readline
  console.log(message);
  rl.close();
}

function play(cpu) {
  // Starts a game

  if (cpu === undefined) {
    cpu = cpuPlay();
  }

  console.log(`Shhh... CPU played ${rpsConvert[cpu]}, will you cheat?`); // Cheating line, comment it out for real play

  const readline = require("node:readline"); // Import the module
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Asking user to choose r, p or s
  rl.question(
    `${colors.green}Rock, Paper, Scissors? ${colors.red}(r/p/s, q to quit): ${colors.reset}`,
    (player) => {
      if (player === "q") {
        logMessage(
          `${colors.black}${colors.bgWhite}Thank you for playing! Quitting now...${colors.reset}`,
          rl
        );
      } else if (!(player in rpsConvert)) {
        logMessage(
          `${colors.red}Invalid input. Type r, p or s.${colors.reset}`,
          rl
        );
        play(cpu); // play again but set the cpu value the same as before the invalid user input
      } else if (player === cpu) {
        logMessage(
          `${colors.white}${colors.bgRed}You both chose ${rpsConvert[cpu]}. It's a draw :|${colors.reset}`,
          rl
        );
        console.log(ascii.draw);
        play();
      } else if (
        (player === "r" && cpu === "s") ||
        (player === "p" && cpu === "r") ||
        (player === "s" && cpu === "p")
      ) {
        logMessage(
          `${colors.white}${colors.bgRed}You chose ${rpsConvert[player]}. Computer chose ${rpsConvert[cpu]}. You win :)${colors.reset}`,
          rl
        );
        console.log(ascii.win);
        play();
      } else {
        logMessage(
          `${colors.white}${colors.bgRed}You chose ${rpsConvert[player]}. Computer chose ${rpsConvert[cpu]}. You loose :(${colors.reset}`,
          rl
        );
        console.log(ascii.lose);
        play();
      }
    }
  );
}

// Program starts here

// Logging a welcome messages
console.log(
  `\n${colors.black}${colors.bgWhite}        Welcome to the Rock Paper Scissors Game        ${colors.reset}`
);
console.log(ascii.logo);
console.log(
  `${colors.black}${colors.bgWhite}            Rock > Scissors > Paper > Rock             ${colors.reset}\n`
);

// Start the game
play();
