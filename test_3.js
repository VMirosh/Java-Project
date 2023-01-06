
let questions = [
  {
    question: "Какой специалист занимается разработкой пользовательского интерфейса?",
    correctAnswer: 'b',
    firstOption: "Leftend",
    secondOption: "Frontend",
    thirdOption: "Rightend",
    fourthOption: "Backend",
    prize: 500,
  },
  {
    question: "Какого должен быть формата файла для веб страницы?",
    correctAnswer: 'c',
    firstOption: ".js",
    secondOption: ".title",
    thirdOption: ".html",
    fourthOption: ".txt",
    prize: 1000,
  },
  {
    question: "Как называеться язык, меняющий внешний вид или поведение html элемента?",
    correctAnswer: 'a',
    firstOption: "CSS",
    secondOption: "JAVA",
    thirdOption: "SSM",
    fourthOption: "VIEW",
    prize: 2000,
  },
  {
    question: "Сколько способов есть для подключения стилей?(CSS)",
    correctAnswer: 'c',
    firstOption: "ONE",
    secondOption: "FIVE",
    thirdOption: "THREE",
    fourthOption: "SEVEN",
    prize: 3000,
  },
  {
    question: "Какой тег не являиться семантическим?",
    correctAnswer: 'b',
    firstOption: "<header>",
    secondOption: "<div>",
    thirdOption: "<selection>",
    fourthOption: "<figure>",
    prize: 5000,
  },
  {
    question: "Какой из языков программированя не являиться строго типизированым?",
    correctAnswer: 'a',
    firstOption: "JavaScript",
    secondOption: "Java",
    thirdOption: "CSS",
    fourthOption: "C++",
    prize: 8000,
  },
  {
    question: "Именованная область памяти, которая хранит в себе некоторое значение, которое можно изменить это - ",
    correctAnswer: 'c',
    firstOption: "Сейф",
    secondOption: "Константа",
    thirdOption: "Переменная",
    fourthOption: "Коментарий",
    prize: 10000,
  },
  {
    question: "Какого типа данных не существует?",
    correctAnswer: 'd',
    firstOption: "string",
    secondOption: "null",
    thirdOption: "object",
    fourthOption: "const",
    prize: 13000,
  },
  {
    question: "Что такое конкатенация?",
    correctAnswer: 'a',
    firstOption: "операция сцепления строк",
    secondOption: "преобразование значения одного типа в значение другого типа",
    thirdOption: "функция, которая отображает диалоговое окно",
    fourthOption: "операция для создания строки на основе шаблона и значений,",
    prize: 15000,
  },
  {
    question: "Какого логического операторa на существует ?",
    correctAnswer: 'c',
    firstOption: "Конъюнкция",
    secondOption: "Дизъюнкция",
    thirdOption: "Слощение",
    fourthOption: "Отрицание",
    prize: 25000,
  },
  {
    question: "Как называеться цикл со счетчиком?",
    correctAnswer: 'b',
    firstOption: "if",
    secondOption: "for",
    thirdOption: "do while",
    fourthOption: "while",
    prize: 50000,
  },
  {
    question: "Каким методом можно записать в значения конец массива?",
    correctAnswer: 'd',
    firstOption: ".map",
    secondOption: ".pop",
    thirdOption: ".slice",
    fourthOption: ".push",
    prize: 100000,
  },
  {
    question: "Где хранятся объекты в JS?",
    correctAnswer: 'c',
    firstOption: "в корзине",
    secondOption: "в стеке",
    thirdOption: "в куча",
    fourthOption: "в шапке",
    prize: 250000,
  },
  {
    question: "На какие уровни принятo делить IT-специалистов?",
    correctAnswer: 'b',
    firstOption: "Senior-Captain-Major",
    secondOption: "Junior-Middle-Senior",
    thirdOption: "Student-Teacher-Professor",
    fourthOption: "Spirit-Special-Father",
    prize: 500000,
  },
  {
    question: "Как долго учить программирование ?",
    correctAnswer: 'd',
    firstOption: "Три месяца",
    secondOption: "Три года",
    thirdOption: "Десять лет",
    fourthOption: "Вечность",
    prize: 1000000,
  }
];
// Начало игры!
let choiseStart = confirm("Вы готовы сыграть в игру ?");
if (!choiseStart) {
  alert("Спасибо, что за ходили!");
} else {
  alert("ПРАВИЛА\r\nВам нужно дать правильный ответ на вопрос,\r\nза каждый правильный ответ вы получаете деньги.\r\n Номер вопроса __ Приз\r\n  1 _________________ 500 $\r\n  2 _________________ 1 000 $\r\n  3 _________________ 2 000 $\r\n  4 _________________ 3 000 $\r\n  5 _________________ 5 000 $\r\n  6 _________________ 8 000 $\r\n  7 _________________ 10 000 $\r\n  8 _________________ 13 000 $\r\n  9 _________________ 15 000 $\r\n 10 ________________ 25 000 $\r\n 11 ________________ 50 000 $\r\n 12 ________________ 100 000 $\r\n 13 ________________ 250 000 $\r\n 14 ________________ 500 000 $\r\n 15 ________________ 1 000 000 $\r\n");
  alert('Наша игра начинаеться! \r\n ');
  // Перебор обьектов с вопросами и ответами!
  let object = {};


  for (let index = 0; index < questions.length; index++) {
    object = questions[index];
    // Начало игры!
    alert(`Вопрос на сумму ${object.prize} $`);
    let answer = prompt(`${object.question} \r\n a) ${object.firstOption} \r\n b) ${object.secondOption} \r\n c) ${object.thirdOption} \r\n d) ${object.fourthOption}`,);
    let result = checkingAnswer(answer, object.correctAnswer, object.prize);
    if (!result) {
      break;
    }
  }

}
// Функция проверяет ответ
function checkingAnswer(value, rite, win) {

  if ((value === 0) || (value == null)) {
    alert('You didn\'t choose!');
    return false;
  } else if (value === rite) {
    alert('Yes!');
    alert('Вы дали правильный ответ!\r\nВаш выиграш ' + win + ' $');
    if (win === 5000){
      alert('Поздравляем! Вы получаете несгораемую сумму 5 000 $');
    }else if(win === 25000){
      alert('Поздравляем! Вы получаете несгораемую сумму 25 000 $');
    }else if(win === 1000000){
      alert(' Поздравляем!\r\nВы стали миллионером!');
      return false;
    }
    let choice = confirm('Вы продолжаете игру или забераете деньги?');
    if (!choice) {
      alert('Ваш выиграш составил ' + win + ' $\r\nЖелаем Вам хорошего отпуска!');
      return false;
    } else {
      alert('Игра продолжаеться!');
      return true;
    }
  } else {
    alert('No!');
    alert('Вы проиграли!');
    if ((win > 5000)&&(win < 25000)){
      alert('Ваш выиграш составил 5 000 $')
    }else if(win > 25000){
      alert('Ваш выиграш составил 25 000 $')
    }
    return false;
  }
}






