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
        const products = await response.json();
        console.log(products);
    }
    catch(error) {
        console.log("Error fetching products:", error);
    }
}

fetchProducts();

