import eventClicker from "../../modules/eventClicker";


export default function init(object) {

  // changeUrl('question')

  let currentCategory = object.currentCategory;
  let currentCategoryScore = object.category[currentCategory].score;
  let currentQuestionIndex = object.category[currentCategory].questionIndex;
  let currentQuestion =
  object.category[currentCategory].questions[currentQuestionIndex];
  let currentQuestionChoices =
  object.category[currentCategory].questions[currentQuestionIndex]
      .choices;
  let currentQuestionAnswer =
    object.category[currentCategory].questions[currentQuestionIndex].answer;
  let currentQuestionPictureNum =
    object.category[currentCategory].questions[currentQuestionIndex].num;

  if (object.category[currentCategory].isEnded()) {
    console.log('hello');
  }

  let question = `
    <section class="question">
      <div class="container question-container">
        <div class="question-header">
          <button class="button close-quiz-button">x</button>
          <div class="timer-line"></div>
          <p class="timer-text">0:00</p>
        </div>
        <p class="answer-title">Who is the author of this picture?</p>
        <div class="question-picture">
          <img src="../../../assets/image-data-master/full/${currentQuestionPictureNum}full.webp" alt="question-picture">
          <ul class="question-pagination">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="question-answers-container">
          ${currentQuestionChoices
            .map(
              (item) => `
            <button class="button answer-button" value="${item}">${item}</button>
          `
            )
            .join('\n')}
        </div>
      </div>
    </section>
    `;

  let container = document.querySelector('.pageEntry');
  container.innerHTML = question;

}
