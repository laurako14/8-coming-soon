import { isValidName, isValidEmail, isValidText } from "./validationRules.js";

function formValidator(selector) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    const allElements = [...allInputDOMs, ...allTextareaDOMs];

    if (!submitBtnDOM) {
        console.error('ERROR: formoje nerasta submit mygtukas.');
        return false;
    }

    submitBtnDOM.addEventListener('click', () => {
        let errorCount = 0;
        console.clear();

        for (let input of allElements) {
            const validationRule = input.dataset.validation;
            const text = input.value;
            
            if (validationRule === 'Name') {
                const nameError = isValidName(text);
                if (nameError !== true) {
                    console.log(nameError);
                    errorCount++;
                }
            }

            if (validationRule === 'Email') {
                const emailError = isValidEmail(text);
                if (emailError !== true) {
                    console.log(emailError);
                    errorCount++;
                }
            }

            if (validationRule === 'text') {
                const textError = isValidText(text);
                if (textError !== true) {
                    console.log(textError);
                    errorCount++;
                }
            }
            
        }
        if (errorCount > 0) {

        }
    })
}

export { formValidator }