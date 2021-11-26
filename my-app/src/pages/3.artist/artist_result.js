import getLocalStorage from '../../modules/localStorageGet';

//результат игры и его загрузка
let result = { name: 'artist' };
window.addEventListener('load', () => getLocalStorage(result));
window.addEventListener('hashchange', () => getLocalStorage(result));

let ArtistResult = {
  render: async () => {
    getLocalStorage(result);
    let currentCategory = result.currentCategory;
    let category = result.category;
    let questions = category[currentCategory].questions;

    let card = questions
      .map((item, index) => {
        let author = item.author;
        let imageNum = item.num;
        let isCorrectResult = item.isCorrectResult;
        console.log(isCorrectResult);
        return `<div class="category-card ${
          isCorrectResult ? '' : 'monochrome'
        } result-card" id="${index}" >

          <div class="category-card-preview category-card-preview-result">

            <img class="category-card-image" src="../../assets/image-data-master/img/${imageNum}.jpg" alt="category-preview">
            <div class="category-card-footer-results">${
              isCorrectResult ? author : '???'
            }</div>

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
          <a class='nav-bar-categories' href="#/artist-result">Score</a>
          <a href="#">Home</a>
          <a  href="#/artist">Categories</a>
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
//LISTENERS
//клик по карточке с картиной
document.addEventListener('click', (e) => {
  let element = e.target.closest('.result-card');
  let parent = element.parentElement.children;
  element.classList.toggle('result-card-active');

  for (let i = 0; i < parent.length; i++) {
    const item = parent[i];
    if (!item.classList.contains('result-card-active')) {
      item.classList.toggle('no-active');
    }
  }

  if (element.classList.contains('no-active')) {
    element.classList.remove('no-active');
  }
});

export default ArtistResult;
