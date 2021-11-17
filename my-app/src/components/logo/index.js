import logo from './index.html';
import htmlToElement from '../../modules/htmlToElement';
import './index.scss';

const logoHTML = ({ onClick, className }) => {
  const logoElement = document.createElement('div');
  logoElement.innerHTML= '<img src="../../assets/svg/logo.svg" alt="art-quiz-logo">'
  logoElement.classList.add('logo');
  logoElement.addEventListener('click', onClick);
  logoElement.classList.add(className);

  return logoElement;
};

export default logoHTML;
