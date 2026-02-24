// validators.js

/**
 * Validate email format.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Validate password strength.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

module.exports = {
    validateEmail,
    validatePassword
};