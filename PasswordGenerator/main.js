document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);
window.addEventListener('load', clearPassword); // Clear password on page load

function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.value !== "") {
        passwordField.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
        passwordField.value = ""; // Clear the password field after copying
    } else {
        alert('No password to copy!');
    }
}

function clearPassword() {
    document.getElementById('password').value = ""; // Clear password field on page load
}
