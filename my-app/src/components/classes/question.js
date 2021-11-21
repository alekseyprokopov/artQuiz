export default class Question {
  constructor(choices, answer, num) {
    // this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.num = num;
  }

  correctAnswer(choice) {
    return choice === this.answer;
  }
  answerGet() {
    return this.answer;
  }
}
