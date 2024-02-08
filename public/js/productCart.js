const forms = document.querySelectorAll("form.cart-form");
const quantities = document.querySelectorAll(".quantity");

forms.forEach((form, index) => {
  form.addEventListener("submit", (event) => {
    const quantityValue = parseInt(quantities[index].textContent);
    if (quantityValue <= 1) {
      event.preventDefault();
      window.alert(
        "Para eliminar el item debes presionar la cruz en la esquina superior derecha."
      );
    }
  });
});
