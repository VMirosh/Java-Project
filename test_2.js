let firstWrittenWord = prompt('Введите первое слово',);
let secondWrittenWord = prompt('Введите второе слово',);
anagramCheck(firstWrittenWord, secondWrittenWord);



function anagramCheck(firstWord, secondWord) {

  let firstArrayLetters = Array.from(firstWord.toLowerCase());
  firstArrayLetters.sort();
  console.log(firstArrayLetters);

  let secondArrayLetters = Array.from(secondWord.toLowerCase());
  secondArrayLetters.sort();
  console.log(secondArrayLetters);

  if ((firstArrayLetters.length == 0) || (secondArrayLetters.length == 0)) {
    return alert('You didn\'t enter a word!');

  } else if (secondArrayLetters.length != firstArrayLetters.length) {
    return alert('Your words are different lengths!');
  }

  let answerArray = [];

  for (let index = 0; index < secondArrayLetters.length; index++) {

    if (secondArrayLetters[index] == firstArrayLetters[index]) {
      answerArray.push(true);
    } else {
      answerArray.push(false);
    }

  }
  // console.log(answerArray);

  for (let answer of answerArray) {
    if (answer != true) {
      return alert("Слова " + firstWord + " и " + secondWord + "  НЕ являются анаграммой.");
    }
  }
  alert("Слова " + firstWord + " и " + secondWord + " являются анаграммой.");
} 
