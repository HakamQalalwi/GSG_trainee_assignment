const products = [
  { name: "Smartphone", category: "Electronics", price: 499 },
  { name: "Laptop", category: "Electronics", price: 899 },
  { name: "Headphones", category: "Electronics", price: 199 },
  { name: "T-shirt", category: "Clothing", price: 29 },
  { name: "Jeans", category: "Clothing", price: 59 },
  { name: "Jacket", category: "Clothing", price: 99 },
];

function displayProducts(filteredProducts) {
  const productDisplay = document.getElementById("productDisplay");
  productDisplay.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p class="price">$${product.price}</p>
      `;

    productDisplay.appendChild(productCard);
  });
}

function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    filterProducts(category);
  });
});

displayProducts(products);
