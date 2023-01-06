function palindromDefine(word) {

  let arrayLitter = Array.from(word.toLowerCase());
  console.log(arrayLitter);

  let middleOfArray = (Math.floor(arrayLitter.length / 2));

  for (let index = 0; index < middleOfArray; index++) {
    if (arrayLitter[index] !== arrayLitter[arrayLitter.length - index - 1]) {

      return alert("Введенное слово не является палиндромом - " + word);
    }
    return alert("Введенное слово является палиндромом - " + word);

  }
}
let wordWrite = prompt("Введите слово",);
palindromDefine(wordWrite);


