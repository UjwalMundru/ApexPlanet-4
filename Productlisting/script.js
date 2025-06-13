const products = [
  { name: "Cool T-shirt", price: 499, category: "tshirt", image: "images/tshirt1.jpg" },
  { name: "Cool T-shirt", price: 699, category: "tshirt", image: "images/tshirt2.jpg" },
  { name: "Slim Jeans", price: 899, category: "jeans", image: "images/jeans1.jpg" },
  { name: "Slim Jeans", price: 1199, category: "jeans", image: "images/jeans2.jpg" },
  { name: "Running Shoes", price: 1299, category: "shoes", image: "images/shoes1.jpg" },
  { name: "Running Shoes", price: 1499, category: "shoes", image: "images/shoes2.jpg" },
  { name: "Stylish Watch", price: 1999, category: "watch", image: "images/watch1.jpg" },
  { name: "Stylish Watch", price: 1599, category: "watch", image: "images/watch2.jpg" },
  { name: "Casual Bag", price: 799, category: "bag", image: "images/bag.jpg" },
  { name: "Comfy Hoodie", price: 1099, category: "hoodie", image: "images/hoodie.jpg" },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>Category: ${product.category}</p>
      </div>
    `;
    productList.appendChild(card);
  });
}

function applyFiltersAndSort() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  const sortOption = sortPrice.value;
  if (sortOption === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFiltersAndSort);
sortPrice.addEventListener("change", applyFiltersAndSort);

displayProducts(products);
