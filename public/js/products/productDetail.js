const quantityInput = document.getElementById("quantity");

quantityInput.addEventListener("input", () => {
  let quantityValue = parseInt(quantityInput.value);
  switch (true) {
    case isNaN(quantityValue):
      quantityInput.value = 1;
      break;
    case quantityValue < 1:
      quantityInput.value = 1;
      break;
    case quantityValue > 99:
      quantityInput.value = 99;
      break;
  }
});
