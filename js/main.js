// import {pvz sum} from './'; import {} from './'
// kitame faile export {pvz sum}
// treciame faile export {}

// Duomenys


// Logika

// function sum(a, b) {
//     return a + b;
// }


// // Apjungimas
// console.log(sum(4, 7));

import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from "./data/socialsData.js";
import { renderClock } from "./components/clock/renderClock.js";
import { progressBarData } from "./data/progressBarData.js";
import { renderAllProgressBars } from "./components/progress-bar/renderAllProgressBars.js";
import { formValidator } from "./components/form-validator/formValidator.js";
import { Toast } from "./components/toast/Toast.js";

renderSocials('footer > .row', socialsData);
renderClock('.clock');
renderAllProgressBars(progressBarData);

// renderProgressBar('.column.left', 'UX Design', 90);
// renderProgressBar('.column.left', 'Web Design', 80);
// renderProgressBar('.column.left', 'Web Development', 40);


// if (!renderSocials()) {
//     console.error();
// }

// const h1DOM = document.querySelector('h1');
// const inputDOM = document.querySelectorAll('main .form > input');
// h1DOM.innerText = '';

const toast = new Toast();
toast.render();
// toast.show('error', 'Cia yra klaida!!!');
toast.show('success', 'Buvo gera diena!!!')
// toast.hide();

formValidator('.hero .form');
formValidator('main .form');