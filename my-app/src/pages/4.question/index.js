import question from './index.html';
import './index.scss';

//functions
import htmlToElement from '../../modules/htmlToElement';

//components:
import button from '../../components/customButton/button';
const questionHTML = htmlToElement(question);


let questionsAnswersContainer = document.createElement('div');
questionsAnswersContainer.classList.add('questions-answers-container');

for (let i = 0; i < 4; i++) {
  const answer = button({
    onClick: () => console.log('hello'),
    title: 'answer',
    className: 'answer-button',
  });
  questionsAnswersContainer.appendChild(answer);
}

const closeButton = button({
  onClick: () => console.log('hello'),
  title: 'x',
  className: 'close-quiz-button',
});
let questionHeader = questionHTML.querySelector('.question-header');
questionHeader.insertAdjacentElement('afterbegin',closeButton)

questionHTML.firstElementChild.appendChild(questionsAnswersContainer);


let picture = new Image()
picture.src = '../../../assets/image-data-master/full/0full.webp'
console.log(picture);
questionHTML.querySelector('.question-picture').appendChild(picture)

let Question = {
  render: async () => {
    let view = questionHTML;
    return view;
  },
  after_render: async () => {},
};
export default Question;
