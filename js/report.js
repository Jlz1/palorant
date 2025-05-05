document.addEventListener('DOMContentLoaded', function () {
    const report = document.getElementById('report');

    report.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        document.querySelectorAll('input, select, textarea').forEach(el => {
            el.classList.remove('invalid', 'valid');
        });

        const username = document.getElementById("inputUsername").value.trim();
        const email = document.getElementById('inputEmail').value.trim();
        const phone = document.getElementById('inputPhone').value.trim();
        const server = document.getElementById('selectServer').value.trim();
        const bugDesc = document.getElementById('inputBugDesc').value.trim();

        if (username === "") {
            showError('usernameError', 'Username is required!', 'inputUsername');
            isValid = false;
        } else if (username.length < 3) {
            showError('usernameError', 'Username must be at least 3 characters!', 'inputUsername');
            isValid = false;
        } else {
            markValid('inputUsername');
        }

        if (email === "") {
            showError('emailError', 'Email is required!', 'inputEmail');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('emailError', 'Email must end with @gmail.com!', 'inputEmail');
            isValid = false;
        } else {
            markValid('inputEmail');
        }

        if (phone === "") {
            showError('phoneError', 'Phone number is required!', 'inputPhone');
            isValid = false;
        } else if (!checkPhone(phone)) {
            showError('phoneError', 'Phone number must contain only digits!', 'inputPhone');
            isValid = false;
        } else {
            markValid('inputPhone');
        }

        if (server === "") {
            showError('serverError', 'Please select a server!', 'selectServer');
            isValid = false;
        } else {
            markValid('selectServer');
        }

        if (bugDesc === "") {
            showError('bugError', 'Bug description is required!', 'inputBugDesc');
            isValid = false;
        } else if (bugDesc.length < 16) {
            showError('bugError', 'Bug description must be at least 16 characters!', 'inputBugDesc');
            isValid = false;
        } else {
            markValid('inputBugDesc');
        }

        if (isValid) {
            report.reset();
            window.location.href = 'report-success.html';
        }
    });

    function showError(errorElementId, message, inputElementId) {
        document.getElementById(errorElementId).textContent = message;
        document.getElementById(inputElementId).classList.add('invalid');
    }

    function markValid(elementId) {
        document.getElementById(elementId).classList.add('valid');
    }

    function checkPhone(phone) {
        for (let i = 0; i < phone.length; i++){
            if (phone[i] < '0' || phone[i] > '9'){
                return false;
            }
        }
    
        return true;
    }

    function validateEmail(email) {
        return email.endsWith('@gmail.com');
    }
});
