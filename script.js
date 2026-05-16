const toggleMenu = document.querySelector(".toggle-menu");
const navigationMenu = document.querySelector(".navigation-menu");
const filterToggle = document.querySelector(".filter-toggle");
const filterContainer = document.querySelector(".filter-container");
const closeFilter = document.querySelector(".close-filter");
const toggleDownArrow = document.querySelector(".toggle-subcategories");
const subCategories = document.querySelector(".sub-categories");
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

toggleDownArrow.addEventListener("click", () => {
    subCategories.classList.toggle("active");
    toggleDownArrow.classList.toggle("rotate");
});
 
async function fetchProducts() {
    try {
        const [dummyJsonApiResponse, fakeStoreApiResponse, shoesResponse] = await Promise.all([
            fetch("https://dummyjson.com/products"),
            fetch("https://fakestoreapi.com/products/"),
            fetch("./shoes.json")
        ]);
        console.log(dummyJsonApiResponse);
        console.log(fakeStoreApiResponse);
        console.log(shoesResponse);

        const dummyJsonData = await dummyJsonApiResponse.json();
        const fakeStoreData = await fakeStoreApiResponse.json();
        const shoesData = await shoesResponse.json();
        console.log(dummyJsonData);
        console.log(fakeStoreData);
        console.log(shoesData);

        const allProducts = [...dummyJsonData.products, ...fakeStoreData, ...shoesData];
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
                <div class="wishlist-icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
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


document.addEventListener("click", (event) => {
    const wishlistBtn = event.target.closest(".wishlist-icon"); 
    if(wishlistBtn) {
        wishlistBtn.classList.toggle("active");
        const wishlistIcon = wishlistBtn.querySelector("i");
        if(wishlistBtn.classList.contains("active")) {
            wishlistIcon.classList.remove("fa-regular");
            wishlistIcon.classList.add("fa-solid");
        }
        else {
            wishlistIcon.classList.remove("fa-solid");
            wishlistIcon.classList.add("fa-regular");
        }
    }
});

