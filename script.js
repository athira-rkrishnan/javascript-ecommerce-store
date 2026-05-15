const toggleMenu = document.querySelector(".toggle-menu");
const navigationMenu = document.querySelector(".nav-section ul");
const filterToggle = document.querySelector(".filter-toggle");
const filterContainer = document.querySelector(".filter-container");
const closeFilter = document.querySelector(".close-filter");
const productsListsContainer = document.querySelector(".products-lists-container");


toggleMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
});

filterToggle.addEventListener("click", () => {
    filterContainer.classList.add("active");
});

closeFilter.addEventListener("click", () => {
    filterContainer.classList.remove("active");
});
 
async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        console.log(response);
        const productsData = await response.json();
        console.log(productsData);

        displayProducts(productsData);
    }
    catch(error) {
        console.log("Error fetching products:", error);
    }
}

fetchProducts();

function displayProducts(productsData) {
    const exchangeRate = 95;
    productsListsContainer.innerHTML = "";
    productsData.products.forEach(product => {
        productsListsContainer.innerHTML += `
            <div class = "product-item">
                <img src = "${product.thumbnail}" alt = "${product.title}" height = 200>
                <p>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <h3>${product.title}</h3>
                <div class="rating">
                    <span class="fa fa-star star-checked"></span>
                    <span class="star-rate">${product.rating}</span>
                </div>
                <p>Rs.${Math.floor(product.price * exchangeRate)}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
}
