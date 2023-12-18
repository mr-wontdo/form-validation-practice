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
};

errorHandler();