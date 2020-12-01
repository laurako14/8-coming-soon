import { countTimeDiff } from "./countTimeDiff.js";
/**
 * Generuoja statini laikrodi, kuris rodo, kiek liko laiko iki artimiausiu Naujuju Metu. 
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys.
 * @returns {boolean} Jei funkcija sekmingai ivykdo savo funkcionaluma, grazinama `true`, priesingu atveju - `false`
 */
function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: Selektorius ne tekstinio tipo');
        return false;
    }
    if (selector === '') {
        console.error('ERROR: Selektorius negali buti tuscias tekstas');
        return false;
    }
    
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }

    const time = countTimeDiff();

    const HTML = `<div class="numbers days">${time.days}</div>
            <div class="numbers hours">${time.hours}</div>
            <div class="numbers minutes">${time.minutes}</div>
            <div class="numbers seconds">${time.seconds}</div>
            <div class="time ds">days</div>
            <div class="time hrs">hours</div>
            <div class="time min">minutes</div>
            <div class="time scs">seconds</div>`;

    DOM.innerHTML = HTML;

    const timesDOM = DOM.querySelectorAll('.numbers'); 
    
    let timePassed = 0;

    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerHTML = time.days;
        timesDOM[1].innerHTML = time.hours;
        timesDOM[2].innerHTML = time.minutes;
        timesDOM[3].innerHTML = time.seconds;
    }, 1000);

    return true;
}

export { renderClock }