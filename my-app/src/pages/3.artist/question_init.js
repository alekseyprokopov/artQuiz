import eventClicker from '../../modules/eventClicker';

export default function init(object) {
  // changeUrl('question')

  let currentCategory = object.currentCategory;
  let currentCategoryScore = object.category[currentCategory].score;
  let currentQuestionIndex = object.category[currentCategory].questionIndex;
  let currentQuestion =
    object.category[currentCategory].questions[currentQuestionIndex];
  let currentQuestionChoices =
    object.category[currentCategory].questions[currentQuestionIndex].choices;
  let currentQuestionAnswer =
    object.category[currentCategory].questions[currentQuestionIndex].answer;
  let currentQuestionPictureNum =
    object.category[currentCategory].questions[currentQuestionIndex].num;

  let currentQuestionPictureAuthor =
    object.category[currentCategory].questions[currentQuestionIndex].author;
  let currentQuestionPictureName =
    object.category[currentCategory].questions[currentQuestionIndex].name;
  let currentQuestionPictureYear =
    object.category[currentCategory].questions[currentQuestionIndex].year;

  if (object.category[currentCategory].isEnded()) {
    console.log('hello');
  }

  let overlay = `
  <div class="overlay">

    <div class="overlay-item close-quiz">
      <button class="button black-button close-card-button">x</button>
      <p class="close-quiz-text">Do you really want to quit the game?</p>
      <div class="button-container button-close-quiz-container">
        <button class="button black-button cancel-button">Cancel</button>
        <button class="button black-button yes-button">Yes</button>
      </div>
    </div>

    <div class="overlay-item correct-answer standard">
      <div class="answer-picture">
        <img
          src="../../../assets/image-data-master/img/${currentQuestionPictureNum}.jpg"
        />
        <div class="correct-logo"></div>
      </div>
      <p class="correct-answer-name">${currentQuestionPictureName}</p>
      <p class="correct-answer-artist">
        ${currentQuestionPictureAuthor}, ${currentQuestionPictureYear}
      </p>
      <button class="button black-button next-button">Next</button>
    </div>




    <div class="overlay-item correct-answer standard incorrect-answer">
      <div class="answer-picture">
        <img
          src="../../../assets/image-data-master/img/${currentQuestionPictureNum}.jpg"
        />
        <div class="incorrect-logo"></div>
      </div>
      <p class="correct-answer-name">${currentQuestionPictureName}</p>
      <p class="correct-answer-artist">
        ${currentQuestionPictureAuthor}, ${currentQuestionPictureYear}
      </p>
      <button class="button black-button next-button">Next</button>
    </div>


      <div class="overlay-item result standard">
        <img src="../../assets/svg/congratulations-logo.svg"/>
        <p class="result-congratulations">Congratulations!</p>
        <p class="result-score">${currentCategoryScore}/10</p>
        <div class="button-container button-close-quiz-container">
          <button class="button black-button home-button">Home</button>
          <button class="button black-button nextQuiz-button">Next Quiz</button>
        </div>
      </div>


      <div class="overlay-item game-over result standard">
        <img src="../../assets/svg/gameOver-logo.svg"/>
        <p class="result-score">Game over</p>
        <p class="result-congratulations">Play again?</p>
        <div class="button-container button-close-quiz-container">
          <button class="button black-button playYes-button">Yes</button>
          <button class="button black-button playNo-button">No</button>
        </div>
      </div>





  </div>
  `;

  let question = `
    <section class="question">
      ${overlay}
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
