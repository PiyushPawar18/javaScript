const form = document.getElementById('myForm');

// ✅ Event Delegation — one listener for all inputs
form.addEventListener('input', (event) => {
  const target = event.target;
  if (target.name === 'username') validateUsername(target);
  if (target.name === 'email') validateEmail(target);
  if (target.name === 'password') validatePassword(target);
  if (target.name === 'confirmPassword') validateConfirmPassword(target);
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop reload

  const data = new FormData(form);
  let isValid = true;

  // Validate all fields before submit
  for (let [key, value] of data.entries()) {
    const input = form.querySelector(`[name=${key}]`);
    if (!value.trim()) {
      showError(input, `${key} is required`);
      isValid = false;
    }
  }

  if (!validateUsername(form.username)) isValid = false;
  if (!validateEmail(form.email)) isValid = false;
  if (!validatePassword(form.password)) isValid = false;
  if (!validateConfirmPassword(form.confirmPassword)) isValid = false;

  // ✅ All Valid
  if (isValid) {
    alert("🎉 Registration Successful!");
    form.reset();
  }
});

// ✅ Validation Functions
function validateUsername(input) {
  const value = input.value.trim();
  if (value.length < 3) {
    showError(input, "Username must be at least 3 characters");
    return false;
  }
  showSuccess(input);
  return true;
}

function validateEmail(input) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(input.value.trim())) {
    showError(input, "Invalid email address");
    return false;
  }
  showSuccess(input);
  return true;
}

function validatePassword(input) {
  const value = input.value.trim();
  if (value.length < 6) {
    showError(input, "Password must be at least 6 characters");
    return false;
  }
  showSuccess(input);
  return true;
}

function validateConfirmPassword(input) {
  const pass = form.password.value.trim();
  const confirm = input.value.trim();
  if (confirm !== pass || confirm === "") {
    showError(input, "Passwords do not match");
    return false;
  }
  showSuccess(input);
  return true;
}

// ✅ Helper Functions
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
  input.style.borderColor = "red";
}

function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = "";
  small.style.visibility = 'hidden';
  input.style.borderColor = "green";
}
