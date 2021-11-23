import Question from '../../pages/3.authorQuestion';

export default class Quiz {
  constructor(category) {
    this.category = category;
    this.totalScore = 0;
    this.currentCategory = 0;
  }

  guess(answer) {
    let categoryIndex = this.currentCategory;
    if (this.category[categoryIndex].getQuestionIndex().correctAnswer(answer)) {
      this.category[categoryIndex].score++;
    }
    this.category[categoryIndex].questionIndex++;
  }

  current(answer) {
    if (true) {
      this.totalScore++;
      this.currentCategory = answer;
    }
  }

  isCorrect(answer) {
    let categoryIndex = this.currentCategory;
    return this.category[categoryIndex]
      .getQuestionIndex()
      .correctAnswer(answer);
  }

  isEnded() {
    let categoryIndex = this.currentCategory;
    let result =
      this.category[categoryIndex].questions.length ===
      this.category[categoryIndex].questionIndex;
    if (result) {
      this.category[categoryIndex].result = this.category[categoryIndex].score;
      this.totalScore += this.category[categoryIndex].result;
      this.category[categoryIndex].score = 0;
      this.category[categoryIndex].questionIndex = 0;
    }
    return result;
  }
  questionIndexReset() {
    let categoryIndex = this.currentCategory;
    this.category[categoryIndex].questionIndex = 0;
  }
}
