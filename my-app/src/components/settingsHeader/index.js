import settingsHeader from './index.html';
import './index.scss';
import htmlToElement from '../../modules/htmlToElement';

const settingsHeaderHTML = ({ onClick }) => {
  const settingsHeaderElement = htmlToElement(settingsHeader);
  settingsHeaderElement.addEventListener('click', onClick);
  return settingsHeaderElement;
};

export default settingsHeaderHTML;
