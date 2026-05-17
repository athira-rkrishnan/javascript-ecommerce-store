let allProductsData = [];

const toggleMenu = document.querySelector(".toggle-menu");
const navigationMenu = document.querySelector(".navigation-menu");
const filterToggle = document.querySelector(".filter-toggle");
const filterContainer = document.querySelector(".filter-container");
const closeFilter = document.querySelector(".close-filter");
const fashionToggleBtn = document.querySelector(".fashion-toggle-button");
const fashionSubCategories = document.querySelector(".fashion-sub-categories");
const beautyToggleBtn = document.querySelector(".beauty-toggle-button");
const beautySubCategories = document.querySelector(".beauty-sub-categories");
const productsListsContainer = document.querySelector(".products-lists-container");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const categoryFilters = document.querySelectorAll(".category-filter");


toggleMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
});

filterToggle.addEventListener("click", () => {
    filterContainer.classList.add("active");
});

closeFilter.addEventListener("click", () => {
    filterContainer.classList.remove("active");
});

fashionToggleBtn.addEventListener("click", () => {
    fashionSubCategories.classList.toggle("active");
    fashionToggleBtn.classList.toggle("rotate");
});

beautyToggleBtn.addEventListener("click", () => {
    beautySubCategories.classList.toggle("active");
    beautyToggleBtn.classList.toggle("rotate");
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
        allProductsData = allProducts;
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
    productsListsContainer.innerHTML = "";
    allProducts.forEach(product => {
        const exchangeRate = 95;
        const productThumbnail = product.thumbnail || product.image; 
        const productRatings = (product.rating?.rate || product.rating).toFixed(1); 
        const originalPrice = Math.floor(product.price * exchangeRate);
        const discountPercent = Math.ceil(product.discountPercentage || (Math.random() * 20) + 5);
        const discountedPrice = Math.floor(originalPrice - (originalPrice * discountPercent / 100));
        

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
                <p class="price">
                    ₹${discountedPrice}
                    <span class="original-price">₹${originalPrice}</span>
                    <span class="discount">${discountPercent}% OFF</span>
                </p>
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


function searchProducts() {
    console.log("Searching...");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = allProductsData.filter(product => 
        product.title.toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue)
    );
    console.log(filteredProducts);
    
    if(filteredProducts.length === 0) {
        productsListsContainer.innerHTML = `
            <div class="error-message">
                <i class="fa-solid fa-circle-exclamation"></i>
                No products found
            </div>
        `;
        productsListsContainer.style.display = "flex";
        productsListsContainer.style.justifyContent = "center";
        return;
    }
    displayProducts(filteredProducts);
    
}

searchInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        searchProducts();
    }
});
searchIcon.addEventListener("click", searchProducts);


let debounceTimer;
searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        searchProducts();
    }, 500);
});


categoryFilters.forEach(category => {
    category.addEventListener("change", categoryFilterProducts);
});

function categoryFilterProducts() {
    const selectedCategories = [];
    categoryFilters.forEach(category => {
        if(category.checked) {
            selectedCategories.push(category.value.toLowerCase());
        }
    });
    console.log(selectedCategories);

    if(selectedCategories.length === 0) {
        displayProducts(allProductsData);
        return;
    }
    const categoryFilteredProducts  = allProductsData.filter(product => {
        return selectedCategories.includes(product.category.toLowerCase());
    });
    console.log(categoryFilteredProducts);
    displayProducts(categoryFilteredProducts);
}

