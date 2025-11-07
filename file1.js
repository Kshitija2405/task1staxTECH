function generatePassword() {
  const length = document.getElementById('length').value;
  const hasLower = document.getElementById('lowercase').checked;
  const hasUpper = document.getElementById('uppercase').checked;
  const hasNumber = document.getElementById('numbers').checked;
  const hasSymbol = document.getElementById('symbols').checked;

  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
  let chars = '';
  if (hasLower) chars += lower;
  if (hasUpper) chars += upper;
  if (hasNumber) chars += numbers;
  if (hasSymbol) chars += symbols;

  if (chars === '') {
    alert('Please select at least one character type!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const passwordField = document.getElementById('password');
  if (passwordField.value === '') {
    alert('No password to copy!');
    return;
  }
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}
