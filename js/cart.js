function cartApp() {
  return {
    quantity: 1,
    isCartOpen: false,

    increaseQty() {
      this.quantity++;
    },

    decreaseQty() {
      if (this.quantity > 1) this.quantity--;
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  };
}
document.querySelectorAll(".cart-item").forEach((item) => {
  const decreaseBtn = item.querySelector(".decrease");
  const increaseBtn = item.querySelector(".increase");
  const quantitySpan = item.querySelector(".quantity-value");
  const priceEl = item.querySelector(".item-price");
  const totalEl = item.querySelector(".item-total");

  function getQuantity() {
    return parseInt(quantitySpan.textContent);
  }

  const price = parseFloat(priceEl.textContent);

  function updateTotal(quantity) {
    totalEl.textContent = (quantity * price).toFixed(2);
  }

  decreaseBtn.addEventListener("click", () => {
    let quantity = getQuantity();
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
      updateTotal(quantity);
    }
  });

  increaseBtn.addEventListener("click", () => {
    let quantity = getQuantity();
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotal(quantity);
  });
});