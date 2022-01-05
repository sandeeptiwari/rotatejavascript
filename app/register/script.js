const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

form.addEventListener('submit', (e) => {
    e.preventDefault() // preventing to actually submit the form

    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});
