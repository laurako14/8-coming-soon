function isValidEmail(email) {
    const maxEmailLength = 50;
    const neleistiniSimboliai = '!\%#$*';
    if (typeof email !== 'string') {
        return 'El. pastas turi buti teksto tipo.';
    }
    if (email === '') {
        return 'El. pastas negali buti tuscias.';
    }
    if (email.length > maxEmailLength) {
        return `El. pastas negali buti ilgesnis nei ${maxEmailLength} simboliu (virsyta ${email.length - maxEmailLength} simboliu). `;
    }

    if (!email.includes('@')) {
        return 'El. pasto adrese turi buti naudojamas @ simbolis.';
    }

    // if (!email.includes(neleistiniSimboliai)) {
    //     return `El. pasto adrese negali buti naudojami simboliai: ${neleistiniSimboliai}`;
    // }

    let etaSkaicius = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            etaSkaicius++;
        }
        if (etaSkaicius > 1) {
            return 'El. pasto adrese gali buti tik vienas @ simbolis';
        }
    }

    return true;
}

export { isValidEmail }