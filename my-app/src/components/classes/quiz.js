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
      this.totalScore++;
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
}
