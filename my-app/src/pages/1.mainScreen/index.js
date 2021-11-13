import mainScreen from './index.html';
import './index.scss';

import htmlToElement from '../../modules/htmlToElement';
import toggleSettingsHide from '../../modules/toggleSettingsHide';

//components:
import button from '../../components/customButton/button';
import settings from '../../components/settingsButton';
import logo from '../../components/logo';
import footer from '../../components/footer';

const mainScreenHTML = htmlToElement(mainScreen);
console.log(mainScreenHTML.firstElementChild.appendChild(footer));
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
  onClick: toggleSettingsHide,
});

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
buttonContainer.appendChild(artistButton);
buttonContainer.appendChild(picturesButton);

mainScreenHTML.firstElementChild.appendChild(settingsButton);
mainScreenHTML.firstElementChild.appendChild(logo);
mainScreenHTML.firstElementChild.appendChild(buttonContainer);

export default mainScreenHTML;
