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
        const [dummyJsonApiResponse, fakeStoreApiResponse] = await Promise.all([
            fetch("https://dummyjson.com/products"),
            fetch("https://fakestoreapi.com/products/")
        ]);
        console.log(dummyJsonApiResponse);
        console.log(fakeStoreApiResponse);

        const dummyJsonData = await dummyJsonApiResponse.json();
        const fakeStoreData = await fakeStoreApiResponse.json();
        console.log(dummyJsonData);
        console.log(fakeStoreData);

        const allProducts = [...dummyJsonData.products, ...fakeStoreData];
        console.log(allProducts);
        displayProducts(allProducts);
    }
    catch(error) {
        console.log("Error fetching products:", error);
        productsListsContainer.innerHTML = `
            <div class="error-message">
                <i class="fa-solid fa-circle-exclamation"></i>
                Failed to load products
            </div>
        `;
        productsListsContainer.style.display = "flex";
        productsListsContainer.style.justifyContent = "center";
    }
}

fetchProducts();

function displayProducts(allProducts) {
    const exchangeRate = 95;
    
    productsListsContainer.innerHTML = "";
    allProducts.forEach(product => {
        const productThumbnail = product.thumbnail || product.image; 
        const productRatings = (product.rating?.rate || product.rating).toFixed(1); 

        productsListsContainer.innerHTML += `
            <div class = "product-item">
                <img src = "${productThumbnail}" alt = "${product.title}" height = 200>
                <p>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <h3>${product.title}</h3>
                <div class="rating">
                    <span class="fa fa-star star-checked"></span>
                    <span class="star-rate">${productRatings}</span>
                </div>
                <p>Rs.${Math.floor(product.price * exchangeRate)}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
}
