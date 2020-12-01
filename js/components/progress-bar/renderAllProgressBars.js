import { renderProgressBar } from "./renderProgressBar.js";
import { isValidProgressBarsList } from "./isValidProgressBarsList.js";
import { isValidSingleProgressBar } from "./isValidSingleProgressBar.js";
/**
 * Sugeneruoja visus progress bars
 * @param {Object[]} data 
 * @param {string} data[]. selector Nurodo vieta, kur sugenetuori turini
 * @param {string} data[].title Progress bar pavadinimas
 * @param {number} data[].value Progress bar reiksme procentais
 * @returns {boolean} Funkcijai suveikus tinkamai grazins `true`, priesingu atveju - `false`
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarsList(data)) {
        return false;
    }
    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }

        renderProgressBar(bar.selector, bar.title, bar.value);
    }
    return true;
}

export { renderAllProgressBars }