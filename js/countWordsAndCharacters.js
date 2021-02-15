function countWordsAndCharacters() {
  let textArea = document.getElementById("textArea").value;

  let numberOfLetters;
  let numberOfWords;

  numberOfLetters = textArea.length;

  if (textArea.includes("  ")) {
    numberOfLetters = numberOfLetters - 1;
  }

  document.getElementById("numberOfLetters").innerHTML =
    "NUMBER OF CHARACTERS INSERTED " + numberOfLetters;

  numberOfWords = textArea.split(" ");

  for (i = 0; i < numberOfWords.length; i++);
  document.getElementById("numberOfWords").innerHTML =
    "NUMBER OF WORDS OR SPACES " + i;
}
