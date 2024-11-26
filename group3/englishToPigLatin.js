// function
// The program should take an English phrase as an input from process.argv
// slice and join

//input = process.argv.slice.join;

lowercase;

// If a word starts with a vowel add the word “way” at the end of the word.

/* vowels = ["a", "e", "i", "o", "u"];
return
  word + "way" */

// If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”

/* !==  ["a", "e", "i", "o", "u"]

return word + "ay"; */

// If a word starts with two consonants move the two consonants to the end of the word and add “ay.”

// Output the translated phrase to the console.

// Example:
// node pigLatin.js "Pig Latin is hard to speak"
// # Output: Igpay Atinlay isway ardhay otay eakspay

/*
console.log(pigLatinPhrase);

// Take input from the command line arguments
const inputPhrase = process.argv.slice(2).join(" "); // Combine input words into a phrase

// Function to translate a single word to Pig Latin
function translateWord(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  word = word.toLowerCase(); // Convert word to lowercase

  // Check if the word starts with a vowel
  if (vowels.includes(word[0])) {
    return word + "way";
  }

  // Check if the word starts with two consonants
  if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
    return word.slice(2) + word[0] + word[1] + "ay";
  }

  // Otherwise, the word starts with one consonant
  return word.slice(1) + word[0] + "ay";
}

// Split the phrase into words, translate each one, and combine them
const words = inputPhrase.split(" "); // Break the phrase into individual words
let pigLatinWords = [];

for (let word of words) {
  pigLatinWords.push(translateWord(word)); // Translate each word and add to the result array
}

const pigLatinPhrase = pigLatinWords.join(" "); // Combine all translated words into a single string
console.log(pigLatinPhrase); // Output the translated phrase */
