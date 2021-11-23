import question from './index.html';
import './index.scss';

//functions
import htmlToElement from '../../modules/htmlToElement';

//components:
import button from '../../components/customButton/button';
let questionHTML = document.createElement('section');
questionHTML.classList.add('question')

// import('../../modules/dataHandler')
//   .then((module) => module.data())
//   .then((result) => {
//     questionHTML.innerHTML =
//     `
//     <div class="container question-container">
//       <div class="question-header">
//         <div class="timer-line"></div>
//         <p class="timer-text">0:00</p>
//       </div>
//       <p class="answer-title">Who is the author of this picture?</p>
//       <div class="question-picture">
//         <ul class="question-pagination">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//     </div>
//   `;


//     let data = result.authorData; //ПОМЕНЯТЬ!!!!!!!!!!
//     let category = data.category;

//     let questionsAnswersContainer = document.createElement('div');
//     questionsAnswersContainer.classList.add('questions-answers-container');
//     console.log(data);
//     let categoryNum = data.currentCategory;
//     let questionNum = data.category[categoryNum].questionIndex;
//     let question = data.category[categoryNum].questions[questionNum];
//     let choices = question.choices;

//     // вывод картинки
//     let picture = new Image();
//     picture.src = `../../../assets/image-data-master/full/${question.num}full.webp`;
//     questionHTML.querySelector('.question-picture').appendChild(picture);

//     // вывод вариантов ответа
//     for (let i = 0; i < choices.length; i++) {
//       const answerButton = button({
//         onClick: () => {
//           data.guess(choices[i]);
//           data.current('hello')
//           createQuestion(type);
//           console.log(data);
//         },
//         title: choices[i],
//         className: 'answer-button',
//       });
//       questionsAnswersContainer.appendChild(answerButton);
//     }

//     const closeButton = button({
//       onClick: () => console.log('hello'),
//       title: 'x',
//       className: 'close-quiz-button',
//     });
//     let questionHeader = questionHTML.querySelector('.question-header');
//     questionHeader.insertAdjacentElement('afterbegin', closeButton);

//     questionHTML.firstElementChild.appendChild(questionsAnswersContainer);
//   console.log(questionHTML);

//   });


export default questionHTML;
