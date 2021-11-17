import settingsHeaderDiv from './index.html';
import './index.scss';
import htmlToElement from '../../modules/htmlToElement';

import logoFunc from '../logo';
import settingsButtonFunction from '../settingsButton';

const categoriesHeader = htmlToElement(settingsHeaderDiv);

const logo = logoFunc({
  onClick: () => console.log('hello'),
  className: 'categories-logo'
});


const settingsButton = settingsButtonFunction({
  onClick: () => console.log('hello'),
});

categoriesHeader.appendChild(logo);
categoriesHeader.appendChild(settingsButton);


// const settingsButton = ({ onClick}) => {
//   const buttonElement = htmlToElement(settingsDiv);
//   buttonElement.addEventListener("click", onClick);
//   return buttonElement;
// };

export default categoriesHeader;
