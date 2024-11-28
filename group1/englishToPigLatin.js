const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Please provide a phrase to translate.");
  process.exit(1);
}

// Function to convert a single word to Pig Latin
function toPigLatin(word) {
  const vowels = "aeiouAEIOU";
  if (vowels.includes(word[0])) {
    // If the word starts with a vowel, add "way" at the end
    return word + "way";
  } else {
    // If the word starts with consonants
    const firstVowelIndex = [...word].findIndex((char) =>
      vowels.includes(char)
    );
    if (firstVowelIndex === -1) {
      // If no vowel is found, just add "ay" to the end
      return word + "ay";
    } else {
      // Otherwise, move the starting consonants to the end and add "ay"
      return (
        word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay"
      );
    }
  }
}

// Split the input phrase into words, translate each to Pig Latin, and join them back
const pigLatinPhrase = input.split(" ").map(toPigLatin).join(" ");

console.log(pigLatinPhrase);
