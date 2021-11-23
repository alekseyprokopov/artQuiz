import './settings.scss';

//functions
import changeUrl from '../../modules/changeUrl';
import oldHashReturn from '../../modules/oldHashReturn';
import eventClicker from '../../modules/eventClicker';
import play from '../../modules/playAudio';

let click_audio = document.querySelector('.click_audio');
let correctAnswer_audio = document.querySelector('.correctAnswer_audio');
let wrongAnswer_audio = document.querySelector('.wrongAnswer_audio');
let endround_audio = document.querySelector('.wrongAnswer_audio');

let audios = document.querySelectorAll('audio');

let settings = {
  volumeValue: 0,
  TimerSwitcher: false,
  TimerTime: 5,
};

audios.forEach((item) => (item.volume = settings.volumeValue));

function correctAnswer_audio_play() {
  play(correctAnswer_audio);
}

let Settings = {
  render: async () => {
    let view = /*html*/ `
    <section class="section settings">
      <div class="container settings-container">
        <a href="#/" class="settings-header">Settings</a>
        <!-- volume range -->
        <div class="settingsVolumeRange">
          <p class="settings-volume-title">Volume</p>
          <div class="settings-volume-params">
            <input class="input-volume-range" type="range" name="volume-range" id="volume-range" min="0" max="1" value="${settings.volumeValue}" step="0.05"/>
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
              <input type="checkbox" name="timeGame" id="timeGame" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <!-- time game -->
        <!--  -->
        <!-- time to answer -->
        <div class="settingsTimeToAnswer">
          <p class="settings-TimeToAnswer-title">Time to answer</p>
          <div class="settings-TimeToAnswer-params">
            <button class="TimeToAnswer-button-minus" type="button" onclick="this.nextElementSibling.stepDown()">-</button>
            <input class="TimeToAnswer-value" type="number" min="0" max="20" value="0" readonly/>
            <button class="TimeToAnswer-button-plus" type="button" onclick="this.previousElementSibling.stepUp()">+</button>
          </div>
        </div>
        <!-- time to answer -->
        <div class="setting-button-container">
          <button class="button setting-button">Default</button>
          <button class="button setting-button">Save</button>
        </div>
      </div>
    </section>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Settings;

//listeners
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
