function isValidName(name) {
    const maxNameLength = 50;
    if (typeof name !== 'string') {
        return 'Vardas turi buti teksto tipo.';
    }
    if (name === '') {
        return 'Vardas negali buti tuscias.';
    }
    if (name.length > maxNameLength) {
        return `Vardas negali virsyti ${maxNameLength} simboliu (virsyta ${email.length - maxNameLength} simboliu).`;
    }

// turi buti tik abeceles raides
    const abc = 'abcdefghijklmnoprstuvwxyz';
    for (let letter of name) {
        if (!abc.includes(letter.toLowerCase())) {
            return `Varde panaudotas neleistinas simbolis (${letter}).`;
        }
    }

// pirma raide didzioji, visos kitos mazosios
    if (name.toLowerCase === name) {
        return 'Pirmoji raide turi buti didzioji.';
    }

    if (name.toUpperCase === name) {
        return 'Visos vardo raides negali buti didziosios';
    }

    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase;
    if (realNameFormat !== name) {
        return 'Varda turi sudaryti pirma didzioji ir likusios mazosios';
    }

    return true;
}

export { isValidName }