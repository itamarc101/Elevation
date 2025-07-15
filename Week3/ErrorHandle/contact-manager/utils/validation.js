function isValidEmail(email) {
    return email.includes("@");
}

function isValidPhone(phone) {
    return phone.length() == 10 && phone.isInteger(phone(str));
}

function isNonEmptyString(str) {
    return typeof str === "string" && str.trim().length > 0;
}

module.export = {isValidEmail, isValidPhone, isNonEmptyString};