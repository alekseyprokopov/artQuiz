export default function setLocalResult(from, to) {
  to.totalScore = from.totalScore;
  to.currentCategory = from.currentCategory;
  console.log(from);
  console.log(to);
  from.category.forEach((item, index) => {

    to.category[index].score = item.score;
    to.category[index].result = item.result;
    // to.category[index].questionIndex = item.questionIndex;
    to.category[index].isPassed = item.isPassed;

    let questionsTo = from.category[index].questions;
    let questionsFrom = item.questions;

    for (let i = 0; i < questionsFrom.length; i++) {
      questionsTo[i].isCorrect = questionsFrom[i].isCorrect;
      questionsTo[i].isCorrectResult = questionsFrom[i].isCorrectResult;
    }
  });
}
