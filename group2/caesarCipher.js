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

const arr = process.argv;
const phrase = arr[2];
const shift = parseInt(arr[3]);

function shiftChar(char, shift) {
  if (char !== ' ') {
  const code = char.charCodeAt(0);
  return String.fromCharCode(code + shift)
  }
  return char;
}

const output = phrase.split('').map(char => shiftChar(char, shift)).join('');

console.log(output)