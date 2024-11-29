// Take words from command line and make them to phrase
const inputPhrase = process.argv.slice(2).join(" ");

// translate word to Pig Latin
function translateWord(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  // change word to lower case
  word = word.toLowerCase();

  // starting with vowel check
  if (vowels.includes(word[0])) {
    return word + "way";
  }

  // starting with 2 consonant check
  if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
    return word.slice(2) + word[0] + word[1] + "ay";
  }

  // else starts with 1 consonant
  return word.slice(1) + word[0] + "ay";
}

// Split the phrase into words
// translate and combine
const words = inputPhrase.split(" ");
let pigLatinWords = [];

// translate word and add to the arrayf
for (let word of words) {
  pigLatinWords.push(translateWord(word));
}
// combine into a phrase
const pigLatinPhrase = pigLatinWords.join(" ");
//Output: translated phrase
console.log(pigLatinPhrase);
