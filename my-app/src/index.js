import './style.scss'
import mainScreenHTML from "./pages/1.mainScreen/index.js";
import settingsHTML from "./pages/2.settings/index.js";

import htmlToElement from './modules/htmlToElement'


const root = document.querySelector(".root");

root.append(settingsHTML);


//раскоментируй меня:

// root.append(mainScreenHTML);
