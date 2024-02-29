window.addEventListener("load", () => {
  /* Form */
  let form = document.querySelector("form.edit_product");

  /* Inputs */
  let imgInput = document.getElementById("img");
  let nameInput = document.getElementById("name");
  let codeInput = document.getElementById("code");
  let stockInput = document.getElementById("stock");
  let descInput = document.getElementById("description");
  let elaborationDateInput = document.getElementById("elaborationDate");
  let expirationDateInput = document.getElementById("expirationDate");
  let priceInput = document.getElementById("price");

  /* Errors */
  let imgError = document.getElementById("img-err");
  let nameError = document.getElementById("name-err");
  let codeError = document.getElementById("code-err");
  let stockError = document.getElementById("stock-err");
  let descError = document.getElementById("description-err");
  let elaborationDateError = document.getElementById("elaborationDate-err");
  let expirationDateError = document.getElementById("expirationDate-err");
  let priceError = document.getElementById("price-err");

  imgInput.addEventListener("change", () => {
    if (
      !imgInput.value.toLowerCase().endsWith(".jpg") &&
      !imgInput.value.toLowerCase().endsWith(".jpeg") &&
      !imgInput.value.toLowerCase().endsWith(".png") &&
      !imgInput.value.toLowerCase().endsWith(".gif")
    ) {
      imgError.innerHTML =
        "El archivo debe ser de formato .jpg .jpeg .png o .gif";
    } else {
      imgError.innerHTML = "";
    }
  });

  nameInput.addEventListener("keyup", () => {
    if (nameInput.value.length < 5) {
      nameError.innerHTML =
        "El nombre del producto debe tener al menos 5 caracteres";
    } else {
      nameError.innerHTML = "";
    }
  });

  nameInput.addEventListener("blur", () => {
    if (nameInput.value.length == 0) {
      nameError.innerHTML = "El nombre del producto no debe estar vacio";
    } else {
      if (nameInput.value.length < 5) {
        nameError.innerHTML =
          "El nombre del producto debe tener al menos 5 caracteres";
      } else {
        nameError.innerHTML = "";
      }
    }
  });

  codeInput.addEventListener("keyup", () => {
    if (codeInput.value.length < 4) {
      codeError.innerHTML =
        "El codigo del producto debe tener al menos 4 caracteres";
    } else {
      codeError.innerHTML = "";
    }
  });

  codeInput.addEventListener("blur", () => {
    if (codeInput.value.length == 0) {
      codeError.innerHTML = "El codigo del producto no debe estar vacio";
    } else {
      if (codeInput.value.length < 4) {
        codeError.innerHTML =
          "El codigo del producto debe tener al menos 4 caracteres";
      } else {
        codeError.innerHTML = "";
      }
    }
  });

  stockInput.addEventListener("keyup", () => {
    if (stockInput.value < 0) {
      stockError.innerHTML = "El stock no puede ser negativo";
    } else {
      stockError.innerHTML = "";
    }
  });

  stockInput.addEventListener("blur", () => {
    if (stockInput.value.length == 0) {
      stockError.innerHTML = "El stock no puede estar vacio";
    } else {
      if (stockInput.value < 0) {
        stockError.innerHTML = "El stock no puede ser negativo";
      } else {
        stockError.innerHTML = "";
      }
    }
  });

  descInput.addEventListener("keyup", () => {
    if (descInput.value.length < 20) {
      descError.innerHTML =
        "La descripcion del producto debe tener al menos 20 caracteres";
    } else {
      descError.innerHTML = "";
    }
  });

  descInput.addEventListener("blur", () => {
    if (descInput.value.length == 0) {
      descError.innerHTML = "La descripcion del producto no puede estar vacia";
    } else {
      if (descInput.value.length < 20) {
        descError.innerHTML =
          "La descripcion del producto debe tener al menos 20 caracteres";
      } else {
        descError.innerHTML = "";
      }
    }
  });

  elaborationDateInput.addEventListener("change", () => {
    let elaborationDate = new Date(elaborationDateInput.value);
    let todayDate = new Date();

    if (Math.floor((todayDate - elaborationDate) / 1000 / 60 / 60 / 24) >= 0) {
      elaborationDateError.innerHTML = "";
    } else {
      elaborationDateError.innerHTML =
        "La fecha de elaboracion no puede ser una fecha futura XD";
    }
  });

  elaborationDateInput.addEventListener("blur", () => {
    if (elaborationDateInput.value.length == 0) {
      elaborationDateError.innerHTML =
        "La fecha de elaboracion no puede estar vacia";
    } else {
      let elaborationDate = new Date(elaborationDateInput.value);
      let todayDate = new Date();

      if (
        Math.floor((todayDate - elaborationDate) / 1000 / 60 / 60 / 24) >= 0
      ) {
        elaborationDateError.innerHTML = "";
      } else {
        elaborationDateError.innerHTML =
          "La fecha de elaboracion no puede ser una fecha futura XD";
      }
    }
  });

  expirationDateInput.addEventListener("change", () => {
    let expirationDate = new Date(expirationDateInput.value);
    let todayDate = new Date();

    if (Math.floor((expirationDate - todayDate) / 1000 / 60 / 60 / 24) >= 0) {
      expirationDateError.innerHTML = "";
    } else {
      expirationDateError.innerHTML =
        "La fecha de expiracion no puede ser una fecha pasada XD";
    }
  });

  expirationDateInput.addEventListener("blur", () => {
    if (expirationDateInput.value.length == 0) {
      expirationDateError.innerHTML =
        "La fecha de expiracion no puede estar vacia";
    } else {
      let expirationDate = new Date(expirationDateInput.value);
      let todayDate = new Date();

      if (Math.floor((expirationDate - todayDate) / 1000 / 60 / 60 / 24) >= 0) {
        expirationDateError.innerHTML = "";
      } else {
        expirationDateError.innerHTML =
          "La fecha de expiracion no puede ser una fecha pasada XD";
      }
    }
  });

  priceInput.addEventListener("keyup", () => {
    if (priceInput.value < 0) {
      priceError.innerHTML = "El precio no puede ser negativo";
    } else {
      priceError.innerHTML = "";
    }
  });

  priceInput.addEventListener("blur", () => {
    if (priceInput.value.length == 0) {
      priceError.innerHTML = "El precio no puede estar vacio";
    } else {
      if (priceInput.value < 0) {
        priceError.innerHTML = "El precio no puede ser negativo";
      } else {
        priceError.innerHTML = "";
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let errores = 0;

    if (imgInput.value == "") {
      imgError.innerHTML = "";
    } else {
      if (
        !imgInput.value.toLowerCase().endsWith(".jpg") &&
        !imgInput.value.toLowerCase().endsWith(".jpeg") &&
        !imgInput.value.toLowerCase().endsWith(".png") &&
        !imgInput.value.toLowerCase().endsWith(".gif")
      ) {
        imgError.innerHTML =
          "El archivo debe ser de formato .jpg .jpeg .png o .gif";
        errores++;
      } else {
        imgError.innerHTML = "";
      }
    }

    if (nameInput.value.length == 0) {
      nameError.innerHTML = "El nombre del producto no debe estar vacio";
      errores++;
    } else {
      if (nameInput.value.length < 5) {
        nameError.innerHTML =
          "El nombre del producto debe tener al menos 5 caracteres";
        errores++;
      } else {
        nameError.innerHTML = "";
      }
    }

    if (codeInput.value.length == 0) {
      codeError.innerHTML = "El codigo del producto no debe estar vacio";
      errores++;
    } else {
      if (codeInput.value.length < 4) {
        codeError.innerHTML =
          "El codigo del producto debe tener al menos 4 caracteres";
        errores++;
      } else {
        codeError.innerHTML = "";
      }
    }

    if (stockInput.value.length == 0) {
      stockError.innerHTML = "El stock no puede estar vacio";
      errores++;
    } else {
      if (stockInput.value < 0) {
        stockError.innerHTML = "El stock no puede ser negativo";
        errores++;
      } else {
        stockError.innerHTML = "";
      }
    }

    if (descInput.value.length == 0) {
      descError.innerHTML = "La descripcion del producto no puede estar vacia";
      errores++;
    } else {
      if (descInput.value.length < 20) {
        descError.innerHTML =
          "La descripcion del producto debe tener al menos 20 caracteres";
        errores++;
      } else {
        descError.innerHTML = "";
      }
    }

    if (elaborationDateInput.value.length == 0) {
      elaborationDateError.innerHTML =
        "La fecha de elaboracion no puede estar vacia";
    } else {
      let elaborationDate = new Date(elaborationDateInput.value);
      let todayDate = new Date();

      if (
        Math.floor((todayDate - elaborationDate) / 1000 / 60 / 60 / 24) >= 0
      ) {
        elaborationDateError.innerHTML = "";
      } else {
        elaborationDateError.innerHTML =
          "La fecha de elaboracion no puede ser una fecha futura XD";
      }
    }

    if (expirationDateInput.value.length == 0) {
      expirationDateError.innerHTML =
        "La fecha de expiracion no puede estar vacia";
    } else {
      let expirationDate = new Date(expirationDateInput.value);
      let todayDate = new Date();

      if (Math.floor((expirationDate - todayDate) / 1000 / 60 / 60 / 24) >= 0) {
        expirationDateError.innerHTML = "";
      } else {
        expirationDateError.innerHTML =
          "La fecha de expiracion no puede ser una fecha pasada XD";
      }
    }

    if (priceInput.value.length == 0) {
      priceError.innerHTML = "El precio no puede estar vacio";
      errores++;
    } else {
      if (priceInput.value < 0) {
        priceError.innerHTML = "El precio no puede ser negativo";
        errores++;
      } else {
        priceError.innerHTML = "";
      }
    }

    if (errores > 0) {
      alert("Hay campos erroneos");
    } else {
      alert("Producto Modificado con Exito :D");
      form.submit();
    }
  });
});
