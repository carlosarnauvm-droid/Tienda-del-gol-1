const btnCart = document.querySelector(".container-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

const informacion = document.querySelector(".item");
const item = document.querySelector(".container-info");

informacion.addEventListener("click", () => {
  item.classList.toggle("hidden-info");
});
const informacio = document.querySelector(".container-info");
const ite = document.querySelector(".container-info");

informacio.addEventListener("click", () => {
  ite.classList.toggle("hidden-info");
});

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
