import './style.scss';

import Home from './pages/1.home/home';
import Settings from './pages/2.settings/settings';
import Artist from './pages/3.artist/artist';
import ArtistResult from './pages/3.artist/artist_result';
import Picture from './pages/4.picture/picture';
import PictureResult from './pages/4.picture/picture_result';
import Error404 from './pages/Error404.js';
import Bottombar from './components/footer';
import Utils from './modules/Utils.js';
import animation from './modules/animation';

const routes = {
  '/': Home,
  '/settings': Settings,
  '/artist': Artist,
  '/artist-result': ArtistResult,
  '/picture': Picture,
  '/picture-result': PictureResult,
};

const router = async () => {
  // Lazy load view element:
  const content = null || document.getElementById('page_container');
  const footer = null || document.getElementById('footer_container');


  footer.appendChild(await Bottombar.render());
  await Bottombar.after_render();

  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? '/' + request.verb : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  // content.innerHTML = '';
  // content.appendChild(page);
  content.innerHTML = await page.render();
  //animation
  // content.classList.remove('run-animation');
  // void content.offsetWidth;
  // content.classList.add('run-animation');
  animation();

  await page.after_render();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
