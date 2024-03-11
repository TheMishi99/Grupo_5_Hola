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
  const nameValue = nameInput.value.trim();
  if (!nameValue) {
    errors.name = ["Por favor, ingresa tu nombre y apellido."];
  }
  if (nameValue.length < 2) {
    if (!errors.name) {
      errors.name = [];
    }
    errors.name.push("El nombre debe tener al menos 2 caracteres.");
  }

  const emailInput = document.getElementById("email");
  if (!emailInput.value.trim()) {
    errors.email = ["Por favor, ingresa tu correo electrónico."];
  } else if (!isValidEmail(emailInput.value)) {
    errors.email = ["Por favor, ingresa un correo electrónico válido."];
  }

  const passwordInput = document.getElementById("password");
  const passwordValue = passwordInput.value.trim();
  if (!passwordValue) {
    errors.password = errors.password || [];
    errors.password.push("Por favor, ingresa tu contraseña.");
  } else {
    if (passwordValue.length < 8) {
      errors.password = errors.password || [];
      errors.password.push("La contraseña debe tener al menos 8 caracteres.");
    }
    if (
      !containsUpperCase(passwordValue) ||
      !containsLowerCase(passwordValue) ||
      !containsNumber(passwordValue) ||
      !containsSpecialCharacter(passwordValue)
    ) {
      errors.password = errors.password || [];
      errors.password.push(
        "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial."
      );
    }
  }

  const confirmPasswordInput = document.getElementById("confirmpassword");
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  if (!confirmPasswordValue) {
    errors.confirmpassword = errors.confirmpassword || [];
    errors.confirmpassword.push("Por favor, confirma tu contraseña.");
  } else {
    if (passwordValue !== confirmPasswordValue) {
      errors.confirmpassword = errors.confirmpassword || [];
      errors.confirmpassword.push("Las contraseñas no coinciden.");
    }
    if (confirmPasswordValue.length < 8) {
      errors.confirmpassword = errors.confirmpassword || [];
      errors.confirmpassword.push(
        "La contraseña debe tener al menos 8 caracteres."
      );
    }
    if (
      !containsUpperCase(confirmPasswordValue) ||
      !containsLowerCase(confirmPasswordValue) ||
      !containsNumber(confirmPasswordValue) ||
      !containsSpecialCharacter(confirmPasswordValue)
    ) {
      errors.confirmpassword = errors.confirmpassword || [];
      errors.confirmpassword.push(
        "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial."
      );
    }
  }
  /******** FUNCIONES AUXILIARES DE CONTRASEÑA **********/
  function containsUpperCase(str) {
    return /[A-Z]/.test(str);
  }
  function containsLowerCase(str) {
    return /[a-z]/.test(str);
  }
  function containsNumber(str) {
    return /\d/.test(str);
  }
  function containsSpecialCharacter(str) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);
  }

  const phoneNumberInput = document.getElementById("phonenumber");
  if (!phoneNumberInput.value.trim()) {
    errors.phonenumber = ["Por favor, ingresa tu número de teléfono."];
  }

  const provinceInput = document.getElementById("province");
  if (!provinceInput.value.trim()) {
    errors.province = ["Por favor, ingresa tu provincia."];
  }

  const addressInput = document.getElementById("address");
  if (!addressInput.value.trim()) {
    errors.address = ["Por favor, ingresa tu dirección."];
  }

  const profilePictureInput = document.getElementById("profilePicture");
  const profilePictureValue = profilePictureInput.value.trim();
  if (!profilePictureValue) {
    errors.profilePicture = ["Por favor, selecciona una imagen de perfil."];
  } else {
    const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
    const fileExtension = profilePictureValue.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      errors.profilePicture = [
        "El archivo seleccionado no es una imagen válida (JPG, JPEG, PNG, GIF).",
      ];
    }
  }

  return errors;
}

function displayErrors(errors) {
  Object.entries(errors).forEach(([fieldName, errorMessages]) => {
    const errorSpan = document.getElementById(`${fieldName}-error`);
    if (errorSpan) {
      errorSpan.innerHTML = errorMessages
        .map((msg) => `<div>${msg}</div>`)
        .join("");
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
