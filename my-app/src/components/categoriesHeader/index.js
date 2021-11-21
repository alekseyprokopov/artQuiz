import settingsHeaderDiv from './index.html';
import './index.scss';
import htmlToElement from '../../modules/htmlToElement';

import logoFunc from '../logo';
import settingsButtonFunction from '../settingsButton';
import changeUrl from '../../modules/changeUrl';
const categoriesHeader = htmlToElement(settingsHeaderDiv);

const logo = logoFunc({
  onClick: () => console.log('hello'),
  className: 'categories-logo'
});


const settingsButton = settingsButtonFunction({
  onClick: () => changeUrl('settings'),
});


categoriesHeader.appendChild(settingsButton);


// const settingsButton = ({ onClick}) => {
//   const buttonElement = htmlToElement(settingsDiv);
//   buttonElement.addEventListener("click", onClick);
//   return buttonElement;
// };

export default categoriesHeader;
