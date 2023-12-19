const errorHandler = () => {
    const form = document.querySelector('form');
    const email = document.querySelector('input#user_email');
    const country = document.querySelector('input#country');
    const zipCode = document.querySelector('input#zip_code');
    const password = document.querySelector('input#user_password');
    const confirmPassword = document.querySelector('input#confirm_user_password');

    const checkFormValidity = () => {
        if (!email.validity.valid) return true;
        else if (!country.validity.valid) return true;
        else if (!zipCode.validity.valid) return true;
        else if (!password.validity.valid) return true;
        else if (!confirmPassword.validity.valid) return true;
        else if (!(password.value === confirmPassword.value)) return true;
        else return false;
    };

    const showErrors = () => {
        showEmailError();
        showCountryError();
        showZipCodeError();
        showPasswordError();
        showConfirmPasswordError();
    };

    // DOM changes
    const showEmailError = () => {
        const emailError = document.querySelector('span.error.user_email');
        if (email.validity.valueMissing) {
            email.classList.add('invalid');
            emailError.textContent = 'Please enter an email address!';
        } else if (email.validity.typeMismatch) {
            email.classList.add('invalid');
            emailError.textContent = 'This is not a valid email address!';
        } else {
            email.classList.remove('invalid');
            emailError.textContent = '';
        }
    };

    const showCountryError = () => {
        const countryError = document.querySelector('span.error.country');
        if (country.validity.valueMissing) {
            country.classList.add('invalid');
            countryError.textContent = 'Please enter a country!';
        } else {
            country.classList.remove('invalid'); 
            countryError.textContent = '';
        }
    };

    const showZipCodeError = () => {
        const zipCodeError = document.querySelector('span.error.zip_code');
        if (zipCode.validity.valueMissing) {
            zipCode.classList.add('invalid');
            zipCodeError.textContent = 'Please enter a zip code!';
        } else {
            zipCode.classList.remove('invalid');
            zipCodeError.textContent = '';
        }
    };

    const showPasswordError = () => {
        const passwordError = document.querySelector('span.error.user_password');
        if (password.validity.valueMissing) {
            password.classList.add('invalid');
            passwordError.textContent = 'Please enter a password!';
        } else {
            password.classList.remove('invalid');
            passwordError.textContent = '';
        }
    };

    const showConfirmPasswordError = () => {
        const confirmPasswordError = document.querySelector('span.error.confirm_user_password');
        if (password.validity.valueMissing) {
            confirmPassword.classList.remove('invalid');
            confirmPasswordError.textContent = '';
        } else if (confirmPassword.validity.valueMissing && !password.validity.valueMissing) {
            confirmPassword.classList.add('invalid');
            confirmPasswordError.textContent = 'Please confirm your password!';
        } else if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('invalid');
            confirmPasswordError.textContent = 'Those passwords did not match! Try again.';
            confirmPassword.value = '';
        } else {
            confirmPassword.classList.remove('invalid');
            confirmPasswordError.textContent = '';
        }
    };

    return { checkFormValidity, showErrors };
};

const error = errorHandler();