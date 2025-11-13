// Buscador de camisetas
const input = document.getElementById("buscador");
const items = document.querySelectorAll("#Camisetas .item");

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();

  items.forEach((item) => {
    const nombre = item.querySelector(".producto").textContent.toLowerCase();
    item.style.display = nombre.includes(texto) ? "" : "none";
  });
});





const btnCart = document.querySelector(".container-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});


