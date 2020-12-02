// import { isValidName, isValidEmail, isValidText } from "./validationRules.js";
// import * as Validation from "./validationRules.js";
// veikia kvieciant validationRules.isValidName()
import { validation } from "./validationRules.js";
console.log(validation);

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
            console.log(validationRule);
            
            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if (error !== true) {
                console.log(error);
                errorCount++;
                }
           
        }
        if (errorCount === 0) {
            console.log('Siunciam info...');
        }
    })
}

export { formValidator }