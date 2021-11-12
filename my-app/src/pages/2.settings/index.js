import settings from './index.html';
import './index.scss';
import htmlToElement from '../../modules/htmlToElement';
//components:

import volumeRange from '../../components/settingsVolumeRange';
import button from '../../components/customButton/button';
import footer from '../../components/footer';
console.log(volumeRange);

const settingsHTML = htmlToElement(settings);

const defaultButton = button({
  onClick: () => {
    console.log('hello');
  },
  title: 'Default',
  className: 'setting-button',
});

const saveButton = button({
  onClick: () => {
    console.log('hello');
  },
  title: 'Save',
  className: 'setting-button',
});

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('setting-button-container');

buttonContainer.appendChild(volumeRange);
buttonContainer.appendChild(defaultButton);
buttonContainer.appendChild(saveButton);




settingsHTML.firstElementChild.appendChild(buttonContainer);
settingsHTML.firstElementChild.appendChild(footer);

export default settingsHTML;
