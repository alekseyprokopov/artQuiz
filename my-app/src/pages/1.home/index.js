import home from './index.html';
import './index.scss';

import htmlToElement from '../../modules/htmlToElement';
import toggleSettingsHide from '../../modules/toggleSettingsHide';

//components:
import button from '../../components/customButton/button';
import settings from '../../components/settingsButton';
import logo from '../../components/logo';
import footer from '../../components/footer';
const homeHTML = htmlToElement(home);

let Home = {
  render: async () => {
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

    const logoElement = logo({
      onClick: () => {
        console.log('hello');
      },
      className: 'main-logo',
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(artistButton);
    buttonContainer.appendChild(picturesButton);

    homeHTML.firstElementChild.appendChild(settingsButton);
    homeHTML.firstElementChild.appendChild(logoElement);
    homeHTML.firstElementChild.appendChild(buttonContainer);

    return homeHTML;
  },
  after_render: async () => {},
};

export default Home;
