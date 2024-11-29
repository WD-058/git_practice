// Container
const container1 = document.querySelector(".container");

// Alphabet
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// h1
const newH1 = document.createElement("h1");
container1.appendChild(newH1);
newH1.innerHTML = "Caesar (Shift) Cipher";

// p-fix
const pFix = document.createElement("p");
pFix.innerText = alphabet.join(" - ");
container1.appendChild(pFix);
pFix.style.padding = "20px";
pFix.style.fontSize = "20px";
pFix.style.width = "760px";

// p-Shift
const pShift = document.createElement("p");
pShift.innerText = alphabet.join(" - ");
container1.appendChild(pShift);
pShift.style.padding = "10px";
pShift.style.fontSize = "20px";
pFix.style.width = "760px";

// Shift count
let shiftCount = 0;
const countDisplay = document.createElement("p");
countDisplay.innerText = `Shift Count: ${shiftCount}`;
container1.appendChild(countDisplay);
countDisplay.style.marginTop = "20px";
countDisplay.style.fontSize = "18px";

// Shift function
function shiftFunc() {
  shiftCount++;
  let shiftedAlphabet = [];
  for (let i = 0; i < alphabet.length; i++) {
    let newIndex = (i + shiftCount) % alphabet.length;
    shiftedAlphabet.push(alphabet[newIndex]);
  }
  pShift.innerText = shiftedAlphabet.join(" - ");
  countDisplay.innerText = `Shift Count: ${shiftCount}`;
}

// btn-Shift
const btnShift = document.createElement("button");
container1.appendChild(btnShift);
btnShift.textContent = "Shift";
btnShift.style.marginTop = "10px";
btnShift.style.width = "70px";
btnShift.style.height = "25px";
btnShift.style.fontSize = "15px";
btnShift.addEventListener("click", shiftFunc);
// btn-Reset
const btnReset = document.createElement("button");
container1.appendChild(btnReset);
btnReset.textContent = "Reset";
btnReset.style.marginTop = "15px";
btnReset.style.width = "70px";
btnReset.style.fontSize = "15px";
btnReset.style.height = "25px";
// Reset function
function resetFunc() {
  shiftCount = 0;
  pShift.innerText = alphabet.join(" - ");
  countDisplay.innerText = `Shift Count: ${shiftCount}`;
  resultDisplay.innerText = "Encrypted Text: ";
  inputText.value = "";
}
btnReset.addEventListener("click", resetFunc);

// Input for text
const inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "Enter text to encrypt");
container1.appendChild(inputText);
inputText.style.marginTop = "20px";
inputText.style.display = "block";
inputText.style.width = "300px";
inputText.style.fontSize = "18px";

// Result display
const resultDisplay = document.createElement("p");
resultDisplay.innerText = "Encrypted Text: ";
container1.appendChild(resultDisplay);
resultDisplay.style.marginTop = "20px";
resultDisplay.style.fontSize = "18px";

// Encrypt function
function encryptText() {
  let text = inputText.value.toUpperCase();
  let encryptedText = "";

  for (let char of text) {
    if (alphabet.includes(char)) {
      let originalIndex = alphabet.indexOf(char);
      let newIndex = (originalIndex + shiftCount) % alphabet.length;
      encryptedText += alphabet[newIndex];
    } else {
      encryptedText += char;
    }
  }

  resultDisplay.innerText = `Encrypted Text: ${encryptedText}`;
}

// btn-Encrypt
const btnEncrypt = document.createElement("button");
container1.appendChild(btnEncrypt);
btnEncrypt.textContent = "Encrypt";
btnEncrypt.style.marginTop = "20px";
btnEncrypt.style.width = "100px";
btnEncrypt.style.height = "30px";
btnEncrypt.style.fontSize = "15px";
btnEncrypt.addEventListener("click", encryptText);
