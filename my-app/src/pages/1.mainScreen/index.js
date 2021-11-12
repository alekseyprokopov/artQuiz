import mainScreen from './index.html';
import './index.scss';
import htmlToElement from '../../modules/htmlToElement';
//components:
import button from '../../components/customButton/button';
import settings from '../../components/settingsButton';
import logo from '../../components/logo';
import footer from '../../components/footer';

const mainScreenHTML = htmlToElement(mainScreen);

const artistButton = button({
  onClick: () => {
    console.log('hello');
  },
  title: 'Artist quiz',
  className: 'custom-button',
});

const picturesButton = button({
  onClick: () => {
    console.log('hello');
  },
  title: 'Pictures quiz',
  className: 'custom-button',
});

const settingsButton = settings({
  onClick: () => {
    console.log('hello');
  },
});

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
buttonContainer.appendChild(artistButton);
buttonContainer.appendChild(picturesButton);

mainScreenHTML.firstElementChild.appendChild(settingsButton);
mainScreenHTML.firstElementChild.appendChild(logo);
mainScreenHTML.firstElementChild.appendChild(buttonContainer);
mainScreenHTML.firstElementChild.appendChild(footer);

export default mainScreenHTML;
