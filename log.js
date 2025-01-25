document.querySelector('#togglePassword').addEventListener('change', (e) => {
    const passwordField = document.querySelector('.pass');
    passwordField.type = e.target.checked ? 'text' : 'password';
});
document.querySelector('.rad').addEventListener('click', () => {
    document.querySelector('.name').value = '';
    document.querySelector('.pass').value = '';
});
const emailInput = document.querySelector('.name');

// Save email to localStorage
emailInput.addEventListener('blur', () => {
    localStorage.setItem('savedEmail', emailInput.value);
});

// Pre-fill email from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
});
