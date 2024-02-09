const form = document.querySelector("form.register-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const errors = checkFormForErrors();
  if (Object.keys(errors).length === 0) {
    form.submit();
  } else {
    displayErrors(errors);
  }
});

const inputs = form.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const fieldName = this.id;
    const errorSpan = document.getElementById(`${fieldName}-error`);
    if (errorSpan && errorSpan.textContent) {
      errorSpan.textContent = "";
    }
  });
});

function checkFormForErrors() {
  const errors = {};

  const nameInput = document.getElementById("name");
  if (!nameInput.value.trim()) {
    errors.name = "Por favor, ingresa tu nombre y apellido.";
  }

  const emailInput = document.getElementById("email");
  if (!emailInput.value.trim()) {
    errors.email = "Por favor, ingresa tu correo electrónico.";
  } else if (!isValidEmail(emailInput.value)) {
    errors.email = "Por favor, ingresa un correo electrónico válido.";
  }

  const passwordInput = document.getElementById("password");
  if (!passwordInput.value.trim()) {
    errors.password = "Por favor, ingresa tu contraseña.";
  }

  const confirmPasswordInput = document.getElementById("confirmpassword");
  if (!confirmPasswordInput.value.trim()) {
    errors.confirmpassword = "Por favor, confirma tu contraseña.";
  } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    errors.confirmpassword = "Las contraseñas no coinciden.";
  }

  const phoneNumberInput = document.getElementById("phonenumber");
  if (!phoneNumberInput.value.trim()) {
    errors.phonenumber = "Por favor, ingresa tu número de teléfono.";
  }

  const provinceInput = document.getElementById("province");
  if (!provinceInput.value.trim()) {
    errors.province = "Por favor, ingresa tu provincia.";
  }

  const addressInput = document.getElementById("address");
  if (!addressInput.value.trim()) {
    errors.address = "Por favor, ingresa tu dirección.";
  }

  return errors;
}

function displayErrors(errors) {
  Object.entries(errors).forEach(([fieldName, errorMsg]) => {
    const errorSpan = document.getElementById(`${fieldName}-error`);
    if (errorSpan) {
      errorSpan.textContent = errorMsg;
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
