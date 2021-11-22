//
import './artist.scss';

//functions

import changeUrl from '../../modules/changeUrl';
import dataHandler from '../../modules/dataHandler';
import eventClicker from '../../modules/eventClicker';
import question_init from './question_init';
import animation from '../../modules/animation';

//components:
// import categoriesHeader from '../../components/categoriesHeader';
import categoryCardFunc from '../../components/category-card';
import Quiz from '../../components/classes/quiz';
// const categoriesHTML = htmlToElement(categories);

let categoriesCardContainer = document.createElement('div');
categoriesCardContainer.classList.add('categories-card-container');

let getData = async () => {
  let url = '../assets/image-data-master/images.json';
  let response = await fetch(url);
  let data = await response.json();
  return dataHandler(data);
};

let artistQuiz;

let a;

let Artist = {
  render: async () => {
    if (!artistQuiz) {
      let data = await getData();
      artistQuiz = new Quiz(data.artistData);
    }

    let category = artistQuiz.category;

    let card = category
      .map(
        (item, index) =>
          `<div class="category-card" id="${index}">
          <div class="category-card-header">
            <p class="category-title">level ${index + 1}</p>
            <p class="category-score">${item.result}/10</p>
          </div>
          <div class="category-card-preview">
          <img src="../../assets/image-data-master/img/${
            item.questions[0].num
          }.jpg" alt="category-preview">
          </div>
        </div>
      `
      )
      .join('\n');

    let view = /*html*/ `
    <section class="container categories-container">
      <div class="categories-header">
        <div class="logo categories-logo">
          <img src="../../assets/svg/logo.svg" alt="art-quiz-logo" />
        </div>
        <div class="nav-bar">
          <a href="#">Home</a>
          <a href="#/artist">Categories</a>
        </div>
        <a class="button-settings" href="#/settings"></a>
      </div>
      <div class="categories-card-container">${card}</div>
</section>
    `;
    return view;
  },
  after_render: async () => {},
};
Artist.render();

export default Artist;

//event listeners
//клик по карточке
document.querySelector('.pageEntry').addEventListener('click', (e) => {
  if (e.target.closest('.category-card')) {
    artistQuiz.currentCategory = +e.target.closest('.category-card').id;
    question_init(artistQuiz);
  }
});

//клик по ответу
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('answer-button')) {
    let answerCorrectCard = document.querySelector('.correct-answer');
    let answerIncorrectCard = document.querySelector('.incorrect-answer');
    let overlay = document.querySelector('.overlay');

    overlay.classList.add('active');
    //показать карточку взависимости от ответа
    if (artistQuiz.isCorrect(e.target.value)) {
      answerCorrectCard.classList.add('active');
    } else {
      answerIncorrectCard.classList.add('active');
    }

    artistQuiz.guess(e.target.value);
    // question_init(artistQuiz);
  }
});

//клик по кнопке next
document.body.addEventListener('click', (e) => {
  let showResultCard = document.querySelector('.result');
  let overlay = document.querySelector('.overlay');

  if (e.target.classList.contains('next-button')) question_init(artistQuiz);
  if (artistQuiz.isEnded()) {
    overlay.classList.add('active');
    showResultCard.classList.add('active');
  }
});

//клик по кнопке закрытия
eventClicker('close-quiz-button', async () => {
  let closeQuizCard = document.querySelector('.close-quiz');
  let overlay = document.querySelector('.overlay');

  overlay.classList.add('active');
  closeQuizCard.classList.add('active');



  // const content = null || document.getElementById('page_container');
  // content.innerHTML = await Artist.render();
  // animation();
});

//обработка кнопки закрытия
eventClicker('close-card-button',()=>{
  let closeQuizCard = document.querySelector('.close-quiz');
  let overlay = document.querySelector('.overlay');

  overlay.classList.remove('active');
  closeQuizCard.classList.remove('active');
});
//обработка кнопки Cancel
eventClicker('cancel-button',()=>{
  let closeQuizCard = document.querySelector('.close-quiz');
  let overlay = document.querySelector('.overlay');

  overlay.classList.remove('active');
  closeQuizCard.classList.remove('active');
});

//обработка кнопки Yes yes-button
eventClicker('yes-button', async ()=>{
  artistQuiz.questionIndexReset()
  const content = null || document.getElementById('page_container');
  content.innerHTML = await Artist.render();
  animation();
});
