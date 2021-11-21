export default class Category {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
  }
  getQuestionIndex() {
    console.log(this.questionIndex);
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  // guess(answer) {
  //   if (this.getQuestionIndex().correctAnswer(answer)) {
  //     this.score++;
  //   }
  //   this.questionIndex++;
  // }
}
