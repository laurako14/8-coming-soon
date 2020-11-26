/**
 * Skirta patikrinti, ar renderSocials funkcijai duoti duomenys yra teisingo tipo ir ne tusti
 * @param {string} selector Selektorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida, grazinamas `false`, o funkcijai suveikus teisingai - `true` 
 */
function inputValidation(selector, data) {
    if (typeof selector !== 'string') {
     console.error('ERROR: selektorius turi buti tekstinio tipo.');
     return false;       
    }
    if (selector === '') {
        console.error('ERROR: selektorius negali buti tuscias.');
        return false;
    }
    if (!Array.isArray(data)) {
    console.error('ERROR: socials ikonom generuoti reikia array tipo duomenu.');
    return;
}
    if (data.length === 0) {
        console.error('ERROR" socials ikonom generuoti reikia ne tuscio array tipo duomenu saraso.');
        return;
}
    return true;
}

export { inputValidation }