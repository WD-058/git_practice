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

const toTranslate = process.argv.slice(2).join(" ");

console.log("Translating your phrase to Pig Latin...");

const consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

let words = toTranslate.split(" ");
let piggySentence = null;
words.forEach((word) => {
  let piggyWord;
  let firstLetter = word[0];
  let secondLetter = word[1];

  if (consonants.includes(firstLetter) && vowels.includes(secondLetter)) {
    let rest = word.slice(1);
    if (firstLetter === firstLetter.toUpperCase()) {
      piggyWord =
        rest[0].toUpperCase() +
        rest.slice(1) +
        firstLetter.toLowerCase() +
        "ay";
    } else {
      piggyWord = rest + firstLetter.toLowerCase() + "ay";
    }
  }

  if (consonants.includes(firstLetter) && consonants.includes(secondLetter)) {
    let rest = word.slice(2);
    if (firstLetter === firstLetter.toUpperCase()) {
      piggyWord =
        rest[0].toUpperCase() +
        rest.slice(1) +
        firstLetter.toLowerCase() +
        secondLetter +
        "ay";
    } else {
      piggyWord = rest + firstLetter.toLowerCase() + secondLetter + "ay";
    }
  }

  if (vowels.includes(firstLetter)) {
    piggyWord = word + "way";
  }
  if (!piggySentence) {
    piggySentence = piggyWord + " ";
  } else {
    piggySentence += piggyWord + " ";
  }
});

console.log(piggySentence);
