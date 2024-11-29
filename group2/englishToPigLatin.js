// Description: Create a program that translates English text to Pig Latin.
// Requirements:
// The program should take an English phrase as an input from process.argv.
// Convert each word to Pig Latin:
// If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
// Example: Happy = appyh + ay = appyhay
// If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
// Example: Child = Ildch + ay = Ildchay
// If a word starts with a vowel add the word “way” at the end of the word.
// Example: Awesome = Awesome +way = Awesomeway
// Output the translated phrase to the console.
// Example:
// node pigLatin.js "Pig Latin is hard to speak"
// # Output: Igpay Atinlay isway ardhay otay eakspay

// console.log(process.argv);

let word; // let everyone know there is a variable with the name "word"

const vowels = "aeiou";
let result; //declaring variable, let everyone know there is a variable "result"
const N = process.argv.length;
for (
  //now starts a loop
  let counter = 2; //looping as of word in position 2
  counter < N; //loop condition is verified
  counter = counter + 1 //if true, loop update
) {
  word = process.argv[counter];
  if (vowels.indexOf(word[0]) >= 0) {
    result = word + "way";
  } else {
    //not a vowel
    if (vowels.indexOf(word[1]) >= 0) {
      //second letter is a vowel
      result = word.substring(1); // the result is substring starting at position 1 of word
      result = result + word[0]; // append letter at position zero of word
    } else {
      result = word.substring(2); //the result is the substring starting at position 2 of word
      result = result + word.substring(0, 2); //append the substring starting at position 0 and ending at position 2
    }
    result = result + "ay";
  }
  console.log(result); //console log the result output, write the value of result to console
}
