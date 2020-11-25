import { inputValidation } from "./inputValidation.js";

function renderSocials(data) {
    if (!inputValidation(data)) {
        return false;
    }
    
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== 'string' || item.link === '') {
            continue;
        }
        if (typeof item.icon !== 'string' || item.icon === '') {
            continue;
        }
        HTML += `<a href="${item.link}" target="blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }

    const socialsDOM = document.querySelector('footer > .row');

    if (HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu');
        return;
    }
   
    socialsDOM.innerHTML = HTML;
}

export { renderSocials }