import { isValidSingleProgressBar } from "./isValidSingleProgressBar.js";

/**
 * Skirta progress-bar komponento generavimui
 * @param {string} selector Nurodo vieta, kur bus generuojamas HTML turinys
 * @param {string} title Progress-bar pavadinimas 
 * @param {number} value Progress-bar reiksme procentais
 * @returns {boolean} Funkcijai tinkamai suveikus grazinamas `true`, priesingu atveju - `false`
 */
function renderProgressBar(selector, title, value) {
    if (!isValidSingleProgressBar({ selector, title, value })) {
        return false;
    }
    const HTML = `<div class="progress-bar">
                    <div class="top">
                    <div class="label">${title}</div>
                    <div class="value">${value}%</div>
                    </div>
                    <div class="bottom">
                    <div class="bar" style="width: ${value}%;">
                    <div class="loader"></div>
                    </div>
                    </div>
                    </div>`

    const DOM = document.querySelector(selector);

    if (!DOM) {
        console.error('ERROR: nerasta vieta, kur turi buti generuotas turinys');
        return false;
    }

    DOM.insertAdjacentHTML('beforeend', HTML);

    return true;
}

export { renderProgressBar }