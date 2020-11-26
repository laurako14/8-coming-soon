/**
 * Skirta patikrinti, ar input duomenys ir ji sudarantys elementai teisingo tipo ir ne tusti
 * @param {Array} itemObject Duomeny masyvas, savyje turintis social elemento nuoroda ir ikona
 * @returns {boolean} Logikos vykdymo metu nustacius klaida, grazinamas `false`, o suveikus teisingai - `true`
 */
function isValidSocialItem(itemObject){

if (typeof itemObject !== 'object') {
    console.error('ERROR: social elementas turetu buti objektas.');
    return false;
}
if (typeof itemObject.link !== 'string' || itemObject.link === '') {
    console.error('ERROR: social elemento nuoroda turi buti tekstine ir ne tuscia.');
    return false;
}
if (typeof itemObject.icon !== 'string' || itemObject.icon === '') {
    console.error('ERROR: social elemento ikona turetu buti tekstine ir ne tuscia.');
    return false;
}
return true;
}

export { isValidSocialItem }