export default class Category {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.result = 0;
    this.questionIndex = 0;
    this.isPassed = false;
  }
  getQuestionIndex() {
    console.log(this.questionIndex);
    return this.questions[this.questionIndex];
  }

  isEnded() {}

  // guess(answer) {
  //   if (this.getQuestionIndex().correctAnswer(answer)) {
  //     this.score++;
  //   }
  //   this.questionIndex++;
  // }
}
