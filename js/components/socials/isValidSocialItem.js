function isValidSocialItem(itemObject){

if (typeof itemObject !== 'object') {
    console.error('ERROR: social elementas turetu buti objektas.');
    return false;
}
if (typeof itemObject.link !== 'string' || item.link === '') {
    console.error('ERROR: social elemento nuoroda turi buti tekstine ir ne tuscia.');
    return false;
}
if (typeof itemObject.icon !== 'string' || item.icon === '') {
    console.error('ERROR: social elemento ikona turetu buti tekstine ir ne tuscia.');
    return false;
}
return true;
}

export { isValidSocialItem }