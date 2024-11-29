// Description: Implement a basic Caesar Cipher encryption.
// Requirements:
// The program should take a phrase and a shift number as inputs from process.argv.
// Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
// Case insensitive
// A negative shift means shift to the left
// A positive shift means shift to the right
// Output the encrypted phrase to the console.
// Example:
// node caesarCipher.js "hello world" 3
// # Output: khoor zruog

const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

function caesarCipher(phrase, shift) {
  let result = "";
  phrase.split(``).forEach((letter) => {
    if (letter >= "a" && letter <= "z") {
      result += String.fromCharCode(
        ((((letter.charCodeAt(0) - 97 + shift) % 26) + 26) % 26) + 97
      );
    } else if (letter >= "A" && letter <= "Z") {
      result += String.fromCharCode(
        ((((letter.charCodeAt(0) - 65 + shift) % 26) + 26) % 26) + 65
      );
    } else {
      result += letter;
    }
  });
  return result;
}
console.log(caesarCipher(phrase, shift));
