import settings from './index.html';
import './index.scss';

//functions
import htmlToElement from '../../modules/htmlToElement';
import toggleSettingsHide from '../../modules/toggleSettingsHide';

//components:
import settingsHeaderHTML from '../../components/settingsHeader';
import volumeRange from '../../components/settingsVolumeRange';
import timeGame from '../../components/settingsTimeGame';
import timeToAnswer from '../../components/settingsTimeToAnswer';
import button from '../../components/customButton/button';

const settingsHTML = htmlToElement(settings);

const settingsHeader = settingsHeaderHTML({
  onClick: toggleSettingsHide
});

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

buttonContainer.appendChild(defaultButton);
buttonContainer.appendChild(saveButton);

settingsHTML.firstElementChild.appendChild(settingsHeader);
settingsHTML.firstElementChild.appendChild(volumeRange);
settingsHTML.firstElementChild.appendChild(timeGame);
settingsHTML.firstElementChild.appendChild(timeToAnswer);
settingsHTML.firstElementChild.appendChild(buttonContainer);

export default settingsHTML;
