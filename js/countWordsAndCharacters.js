function countWordsAndCharacters() {
  let textArea = document.getElementById("textArea").value

  let numberOfLetters = textArea.length
  document.getElementById("numberOfLetters").innerHTML = "NUMBER OF CHARACTERS INSERTED " + numberOfLetters

  let numberOfWords = textArea.split(' ')
  for (i = 0; i < numberOfWords.length; i++);
  document.getElementById('numberOfWords').innerHTML = "NUMBER OF WORDS OR SPACES " + i;
}
