document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const isValid = validateLoginForm();
    if (isValid) {
      form.submit();
    }
  });
});

function validateLoginForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;

  // Resetear mensajes de error
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  // Resetear estilos de error
  emailInput.classList.remove("error");
  passwordInput.classList.remove("error");

  // Validar correo electrónico
  if (!email) {
    displayErrorMessage("email", "El correo electrónico es obligatorio.");
    isValid = false;
  } else if (!isValidEmail(email)) {
    displayErrorMessage(
      "email",
      "Por favor, ingresa un correo electrónico válido."
    );
    isValid = false;
  }

  // Validar contraseña
  if (!password) {
    displayErrorMessage("password", "La contraseña es obligatoria.");
    isValid = false;
  }

  return isValid;
}

function displayErrorMessage(fieldName, message) {
  const errorSpan = document.getElementById(`${fieldName}-error`);
  if (errorSpan) {
    errorSpan.textContent = message;
    const inputField = document.getElementById(fieldName);
    if (inputField) {
      inputField.classList.add("error");
    }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
