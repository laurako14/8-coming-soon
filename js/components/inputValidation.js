function inputValidation(data) {
    if (Array.isArray(data)) {
    console.error('ERROR: socials ikonom generuoti reikia array tipo duomeny=u.');
    return;
}
if (data.length === 0) {
    console.error('ERROR" socials ikonom generuoti reikia ne tuscio array tipo duomenu saraso.');
    return;
}
}

export { inputValidation }