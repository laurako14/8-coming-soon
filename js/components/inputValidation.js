function inputValidation(selector, data) {
    if (typeof selector !== 'string') {
     console.error('ERROR: selektorius turi buti tekstinio tipo.');
     return false;       
    }
    if (selector === '') {
        console.error('ERROR: selektorius negali buti tuscias.');
        return false;
    }
    if (Array.isArray(selector, data)) {
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