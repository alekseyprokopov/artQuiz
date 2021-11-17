import footer from './index.html';
import './index.scss';
import htmlToElement from '../../modules/htmlToElement';

let Bottombar = {
  render: async () => {
    let view = htmlToElement(footer);
    return view;
  },
  after_render: async () => {},
};

export default Bottombar;
