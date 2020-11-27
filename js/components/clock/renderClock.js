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

    const date = new Date();
    const currentYear = date.getFullYear(); 
    const newYear = currentYear + 1;
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();
    const currentTimeMiliseconds = date.getTime();
    let timeLeft = newYearMiliseconds - currentTimeMiliseconds;

    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    timeLeft -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60);
    timeLeft -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(timeLeft / 1000 / 60);
    timeLeft -= minutes * 1000 * 60
    const seconds = Math.floor(timeLeft / 1000);

    const HTML = `<div class="numbers days">${days}</div>
            <div class="numbers hours">${hours}</div>
            <div class="numbers minutes">${minutes}</div>
            <div class="numbers seconds">${seconds}</div>
            <div class="time ds">days</div>
            <div class="time hrs">hours</div>
            <div class="time min">minutes</div>
            <div class="time scs">seconds</div>`;

    DOM.innerHTML = HTML;
    return true;
}

export { renderClock }