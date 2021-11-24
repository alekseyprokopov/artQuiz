export default class Question {
  constructor(choices, answer, num, name, author, year) {
    // this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.num = num;
    this.name = name;
    this.author = author;
    this.year = year;

    this.isCorrect = null;
    this.isCorrectResult = false;
  }

  correctAnswer(choice) {
    return choice === this.answer;
  }
  answerGet() {
    return this.answer;
  }
}
