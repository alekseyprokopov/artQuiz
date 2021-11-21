//
import './artist.scss';

//functions

import changeUrl from '../../modules/changeUrl';
import dataHandler from '../../modules/dataHandler';
import eventClicker from '../../modules/eventClicker';
import question_init from './question_init';

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

// let categories = getData().then((data) => {
//   artistQuiz = new Quiz(data.artistData);
// });

document.querySelector('.pageEntry').addEventListener('click', (e) => {
  if (e.target.closest('.category-card')) {
    artistQuiz.currentCategory = +e.target.closest('.category-card').id;
    question_init(artistQuiz);
  }
});

document.body.addEventListener('click', (e) => {
  let isCorrect;
  if (e.target.classList.contains('answer-button')) {
    artistQuiz.guess(e.target.value);
    question_init(artistQuiz);

    // artistQuiz.guess(e.target.value);

    console.log(artistQuiz.currentCategory);
    // let categoryIndex = this.currentCategory;
    // if (this.category[categoryIndex].getQuestionIndex().correctAnswer(answer))

    console.log(
      artistQuiz.category[artistQuiz.currentCategory].getQuestionIndex()
    );

    // question_init(artistQuiz)
  }
});

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
            <p class="category-score">${item.score}/10</p>
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
