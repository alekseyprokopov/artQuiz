import './artist.scss';
import './question.scss';

//functions
import dataHandler from '../../modules/dataHandler';
import eventClicker from '../../modules/eventClicker';
import question_init from './question_init';
import animation from '../../modules/animation';
import play_correct_answer from '../../modules/play_correct_answer';
import play_wrong_answer from '../../modules/play_wrong_answer';
import play_endround from '../../modules/play_endround';
import timer from '../../modules/timer';
import intervalKill from '../../modules/intervalKill';
import getLocalStorage from '../../modules/localStorageGet';
import setLocalStorage from '../../modules/localStorageSet';
import setLocalResult from '../../modules/setLocalResult';
//components:
import Quiz from '../../components/classes/quiz';

let settings = {
  volumeValue: null,
  TimerSwitcher: null,
  TimerTime: null,
  name: 'settings',
};
window.addEventListener('load', () => getLocalStorage(settings));
window.addEventListener('hashchange', () => getLocalStorage(settings));

let getData = async () => {
  let url = '../assets/image-data-master/images.json';
  let response = await fetch(url);
  let data = await response.json();
  return dataHandler(data);
};

let artistQuiz;

let result = {};
result.name = 'artist';

window.addEventListener('load', () => getLocalStorage(result));

window.addEventListener('beforeunload', () => setLocalStorage(result));

let Artist = {
  render: async () => {
    if (!artistQuiz) {
      let data = await getData();
      artistQuiz = new Quiz(data.artistData, 'artist');
    }
    if (result.category) {
      setLocalResult(result, artistQuiz);
    }
    let category = artistQuiz.category;

    let card = category
      .map((item, index) => {
        return `<div class="category-card ${
          item.isPassed ? '' : 'monochrome'
        }" id="${index}" >
          <div class="category-card-header">
            <p class="category-title">Round ${index + 1}</p>
            <p class="category-score ${item.isPassed ? '' : 'no-active'}">${
          item.result
        }/10</p>
          </div>
          <div class="category-card-preview">
            <a href="#/artist-result"class="star ${
              item.isPassed ? '' : 'no-active'
            }"></a>

            <img class="art-category-card-image" src="../../assets/image-data-master/img/${
              item.questions[0].num
            }.jpg" alt="category-preview">
            <div class="category-card-footer">Play</div>

          </div>
        </div>
      `;
      })
      .join('\n');

    let view = /*html*/ `
    <section class="container categories categories-container">
      <div class="categories-header">
        <div class="logo categories-logo">
          <img src="../../assets/svg/logo.svg" alt="art-quiz-logo" />
        </div>
        <div class="nav-bar">
          <a href="#">Home</a>
          <a class='nav-bar-categories' href="#/artist">Categories</a>
          <a class="button-settings" href="#/settings"></a>
        </div>

      </div>
      <div class="categories-card-container">${card}</div>
</section>
    `;
    return view;
  },
  after_render: async () => {},
};

//functions
function timerEND() {
  timer(settings.TimerTime, () => {
    let answerIncorrectCard = document.querySelector('.incorrect-answer');
    let overlay = document.querySelector('.overlay');

    overlay.classList.add('active');
    answerIncorrectCard.classList.add('active');
    artistQuiz.guess('');
  });
}

//event listeners
//клик по карточке
document.querySelector('.pageEntry').addEventListener('click', (e) => {
  if (e.target.classList.contains('art-category-card-image')) {
    artistQuiz.currentCategory = +e.target.closest('.category-card').id;
    result.currentCategory = +e.target.closest('.category-card').id;
    Object.assign(result, artistQuiz);
    setLocalStorage(result);
    question_init(artistQuiz);
    if (settings.TimerSwitcher) timerEND();
  }
  if (e.target.classList.contains('star')) {
    artistQuiz.currentCategory = +e.target.closest('.category-card').id;
    result.currentCategory = +e.target.closest('.category-card').id;
    Object.assign(result, artistQuiz);
    setLocalStorage(result);
  }
});

//клик по ответу
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('answer-button')) {
    let answerCorrectCard = document.querySelector('.correct-answer');
    let answerIncorrectCard = document.querySelector('.incorrect-answer');
    let overlay = document.querySelector('.overlay');

    overlay.classList.add('active');
    intervalKill();

    //копирование результатов
    Object.assign(result, artistQuiz);
    setLocalStorage(result);
    //показать карточку взависимости от ответа
    if (artistQuiz.isCorrect(e.target.value)) {
      answerCorrectCard.classList.add('active');
      play_correct_answer();
    } else {
      answerIncorrectCard.classList.add('active');
      play_wrong_answer();
    }

    artistQuiz.guess(e.target.value);
  }
});

//клик по кнопке next
document.body.addEventListener('click', (e) => {
  let showResultCard = document.querySelector('.result');
  let overlay = document.querySelector('.overlay');
  Object.assign(result, artistQuiz);
  setLocalStorage(result);

  if (e.target.classList.contains('next-button')) {
    question_init(artistQuiz);
    if (settings.TimerSwitcher) timerEND();
  }
  if (artistQuiz)
    if (artistQuiz.isEnded() || false) {
      overlay.classList.add('active');
      showResultCard.classList.add('active');
      play_endround();
    }
});

//клик по кнопке закрытия
eventClicker('close-quiz-button', async () => {
  let closeQuizCard = document.querySelector('.close-quiz');
  let overlay = document.querySelector('.overlay');

  overlay.classList.add('active');
  closeQuizCard.classList.add('active');
});

//обработка кнопки закрытия
eventClicker('close-card-button', () => {
  let closeQuizCard = document.querySelector('.close-quiz');
  let overlay = document.querySelector('.overlay');

  overlay.classList.remove('active');
  closeQuizCard.classList.remove('active');
});
//обработка кнопки Cancel
eventClicker('cancel-button', () => {
  let closeQuizCard = document.querySelector('.close-quiz');
  let overlay = document.querySelector('.overlay');

  overlay.classList.remove('active');
  closeQuizCard.classList.remove('active');
});

//обработка кнопки Yes yes-button
eventClicker('yes-button', async () => {
  artistQuiz.questionIndexReset();
  const content = null || document.getElementById('page_container');
  content.innerHTML = await Artist.render();
  animation();
});

//next Quiz
eventClicker('nextQuiz-button', async () => {
  const content = null || document.getElementById('page_container');
  content.innerHTML = await Artist.render();
  animation();
});

export default Artist;
