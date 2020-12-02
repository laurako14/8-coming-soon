import { isValidName } from "./isValidName.js";
import { isValidEmail } from "./isValidEmail.js";
import { isValidText } from "./isValidText.js";

const validation = {
    email: isValidEmail,
    name: isValidName,
    text: isValidText,
};

export { validation }

// export { isValidName, isValidEmail, isValidText }