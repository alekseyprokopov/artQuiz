import './settings.scss';

//functions
import oldHashReturn from '../../modules/oldHashReturn';
import eventClicker from '../../modules/eventClicker';
import play from '../../modules/playAudio';
import getLocalStorage from '../../modules/localStorageGet';
import setLocalStorage from '../../modules/localStorageSet';

let click_audio = document.querySelector('.click_audio');
let audios = document.querySelectorAll('audio');

let settings = {
  volumeValue: 0,
  TimerSwitcher: false,
  TimerTime: 5,
  name: 'settings',
};
let settingsDefault = {
  volumeValue: 0,
  TimerSwitcher: false,
  TimerTime: 5,
  name: 'settings',
};

let Settings = {
  render: async () => {
    let view = /*html*/ `
    <section class="section settings">
      <div class="container settings-container">
        <a  class="settings-header">Settings</a>
        <!-- volume range -->
        <div class="settingsVolumeRange">
          <p class="settings-volume-title">Volume</p>
          <div class="settings-volume-params">
            <input class="input-volume-range" type="range" name="volume-range" id="volume-range" min="0" max="1" value="${
              settings.volumeValue
            }" step="0.05"/>
            <div class="settings-volume-icons">
              <img class="speaker-off" src="../../assets/svg/speaker-off.svg" alt="speaker-off" />
              <img class="speaker-on" src="../../assets/svg/speaker-on.svg" alt="speaker-on" />
            </div>
          </div>
        </div>
        <!-- volume range -->
        <!--  -->
        <!-- time game -->
        <div class="settingsTimeGame">
          <p class="settings-timeGame-title">Time Game</p>
          <div class="settings-timeGame-params">
            <span>On</span>
            <label class="switch">
              <input type="checkbox" name="timeGame" id="timeGame" ${
                settings.TimerSwitcher ? 'checked' : ''
              }/>
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <!-- time game -->
        <!--  -->
        <!-- time to answer -->
        <div class="settingsTimeToAnswer ${
          settings.TimerSwitcher ? '' : 'no-active'
        }" >
          <p class="settings-TimeToAnswer-title">Time to answer</p>
          <div class="settings-TimeToAnswer-params">
            <button class="TimeToAnswer-button-minus" type="button" onclick="this.nextElementSibling.stepDown()">-</button>
            <input class="TimeToAnswer-value" type="number" min="5" max="30" value="${
              settings.TimerTime
            }" step = "5" readonly/>
            <button class="TimeToAnswer-button-plus" type="button" onclick="this.previousElementSibling.stepUp()">+</button>
          </div>
        </div>
        <!-- time to answer -->
        <div class="setting-button-container">
          <button class="button setting-button setting-button-default">Default</button>
          <button class="button setting-button setting-button-save">Save</button>
        </div>
      </div>
    </section>
    `;
    return view;
  },
  after_render: async () => {},
};

//listeners
eventClicker('settings-header', () => oldHashReturn());

//звук клика
document.addEventListener('click', (e) => {
  if (
    e.target.tagName == 'BUTTON' ||
    e.target.tagName == 'A' ||
    e.target.tagName == 'INPUT'
  ) {
    play(click_audio);
  }
});

//изменение громскости
document.addEventListener('change', (e) => {
  if (e.target.classList.contains('input-volume-range')) {
    settings.volumeValue = e.target.value;
    audios.forEach((item) => {
      item.volume = e.target.value;
      play(click_audio);
    });
  }
});

eventClicker('speaker-off', () => {
  let volumeRange = document.querySelector('.input-volume-range');
  volumeRange.value = 0;
  settings.volumeValue = 0;
  audios.forEach((item) => (item.volume = 0));
});

eventClicker('speaker-on', () => {
  let volumeRange = document.querySelector('.input-volume-range');
  volumeRange.value = 0.5;
  settings.volumeValue = 0.5;
  audios.forEach((item) => (item.volume = 0.5));
  play(click_audio);
});

eventClicker('slider', () => {
  let slider = document.getElementById('timeGame');
  let timeToAnswer = document.querySelector('.settingsTimeToAnswer');
  timeToAnswer.classList.toggle('no-active');
  settings.TimerSwitcher = !slider.checked;
});

document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('TimeToAnswer-button-minus') ||
    e.target.classList.contains('TimeToAnswer-button-plus')
  ) {
    let input = document.querySelector('.TimeToAnswer-value');
    settings.TimerTime = input.value;
  }
});

eventClicker('setting-button-save', () => oldHashReturn());
eventClicker('setting-button-default', () => {
  Object.assign(settings, settingsDefault);
  oldHashReturn();
  audios.forEach((item) => (item.volume = settings.volumeValue));
});

window.addEventListener('beforeunload', () => setLocalStorage(settings));
window.addEventListener('hashchange', () => setLocalStorage(settings));
window.addEventListener('load', () => getLocalStorage(settings));
window.addEventListener('load', () => {
  audios.forEach((item) => (item.volume = settings.volumeValue));
});

export default Settings;
