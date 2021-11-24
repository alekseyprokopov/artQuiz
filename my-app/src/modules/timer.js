import eventClicker from './eventClicker';

let seconds = 5;
let aha = document.querySelector('.timer-text');

export default function timerFunc(seconds, nextFunc) {
  let max = seconds;
  let text = document.querySelector('.timer-text');
  let timerLine = document.querySelector('.timer-line');
  let timer = setInterval(function () {
    console.log(seconds);
    if (seconds <= 0) {
      clearInterval(timer);
      nextFunc();
    } else {
      let value = (seconds / max) * 100;
      text.innerHTML = seconds;
      timerLine.style.background =
        'linear-gradient(to left, #ffbca2 0%, #ffbca2 ' +
        value +
        '%, #fff ' +
        value +
        '%, white 100%)';
    }
    --seconds;
  }, 1000);
}

eventClicker('timer-text', () => timerFunc(seconds));
