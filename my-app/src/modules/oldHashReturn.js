import changeUrl from './changeUrl';

let oldHash = '';

window.addEventListener('load', () => {
  location.href = window.location.pathname + '#/';
});

window.addEventListener('hashchange', function (event) {
  oldHash = event.oldURL.replace(window.location.origin + '/#/', '');
});
window.addEventListener('hashchange', () => {
});

function oldHashReturn() {
  changeUrl(oldHash);
}

export default oldHashReturn;
