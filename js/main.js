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

renderSocials('footer > .row', socialsData);
renderClock('.clock');

// if (!renderSocials()) {
//     console.error();
// }

// const h1DOM = document.querySelector('h1');
// const inputDOM = document.querySelectorAll('main .form > input');
// h1DOM.innerText = '';