export default class Quiz {
  constructor(category, name) {
    this.category = category;
    this.totalScore = 0;
    this.currentCategory = 0;
    this.name = name;
  }

  guess(answer) {
    let categoryIndex = this.currentCategory;

    if (this.category[categoryIndex].getQuestionIndex().correctAnswer(answer)) {
      this.category[categoryIndex].score++;
      this.category[categoryIndex].getQuestionIndex().isCorrect = true;
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

      this.category[categoryIndex].isPassed = true;
      this.category[categoryIndex].questions.forEach((item) => {
        item.isCorrectResult = item.isCorrect;
        item.isCorrect = null;
      });
    }
    return result;
  }
  questionIndexReset() {
    let categoryIndex = this.currentCategory;
    this.category[categoryIndex].questionIndex = 0;
  }
}
