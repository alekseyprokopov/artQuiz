import categoryCard from './index.html';
import './index.scss';
import htmlToElement from '../../modules/htmlToElement';

const categoryCardFunc = ({ onClick, title, score = '', preview = '0' }) => {
  const categoryElement = htmlToElement(categoryCard);
  categoryElement.addEventListener('click', onClick);
  categoryElement.querySelector('.category-title').innerHTML = title;
  categoryElement.querySelector('.category-score').innerHTML = score;
  categoryElement.querySelector(
    '.category-card-preview'
  ).innerHTML = `<img src="../../assets/image-data-master/img/${preview}.jpg" alt="category-preview" width=200 height=200>`;

  return categoryElement;
};

export default categoryCardFunc;
