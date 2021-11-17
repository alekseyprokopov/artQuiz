import settings from './index.html';
import './index.scss';

//functions
import htmlToElement from '../../modules/htmlToElement';
//components
import button from '../../components/customButton/button';
const settingsHTML = htmlToElement(settings);

let Settings = {
  render: async () => {
    const settingsHeader = button({
      onClick: () => {
        console.log('hello');
      },
      title: 'Settings',
      className: 'settings-header',
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

    settingsHTML.firstElementChild.appendChild(buttonContainer);
    settingsHTML.firstElementChild.insertBefore(
      settingsHeader,
      settingsHTML.firstElementChild.firstElementChild
    );
    let view = settingsHTML;
    return view;
  },
  after_render: async () => {},
};

export default Settings;
