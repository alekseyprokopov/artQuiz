import './settings.scss';

//functions
import changeUrl from '../../modules/changeUrl';
import oldHashReturn from '../../modules/oldHashReturn';
import eventClicker from '../../modules/eventClicker';

//listeners
eventClicker(('button', 'settings-header'), oldHashReturn);


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
            <input type="range" name="volume-range" id="volume-range" />
            <div class="settings-volume-icons">
              <img src="../../assets/svg/speaker-off.svg" alt="speaker-off" />
              <img src="../../assets/svg/speaker-on.svg" alt="speaker-on" />
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
