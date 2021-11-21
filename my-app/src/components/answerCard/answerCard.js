import './answerCard.scss';

const Card = ({ onClick, className, title, author, id, score, isCorrect }) => {
  const CardElement = document.createElement('div');
  CardElement.classList.add('button');
  buttonElement.addEventListener('click', onClick);
  buttonElement.innerHTML = title;
  buttonElement.classList.add(className);

  return buttonElement;
};

export default button;
