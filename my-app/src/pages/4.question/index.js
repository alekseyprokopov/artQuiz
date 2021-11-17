import question from './index.html';
import './index.scss';

//functions
import htmlToElement from '../../modules/htmlToElement';

//components:
import button from '../../components/customButton/button';
import categoryCardFunc from '../../components/category-card';
const categoriesHTML = htmlToElement(categories);

// const categoryCard = categoryCardFunc({
//   onClick: () => console.log('hello'),
//   title: 'Portrait',
//   score: '5/10',
// });

categoriesHTML.firstElementChild.appendChild(categoriesHeader);
// categoriesHTML.firstElementChild.appendChild(categoryCard);
let categoriesCardContainer = document.createElement('div');
categoriesCardContainer.classList.add('categories-card-container')

console.log(categoriesCardContainer);
for (let i = 0; i < 12; i++) {
  const categoryCard = categoryCardFunc({
    onClick: () => console.log('hello'),
    title: 'Portrait',
    score: '5/10',
  });
  categoriesCardContainer.appendChild(categoryCard)

  console.log();
}

categoriesHTML.firstElementChild.appendChild(categoriesCardContainer);



let Question = {
  render: async () => {
    let view = categoriesHTML;
    return view;
  },
  after_render: async () => {},
};
export default Question;
