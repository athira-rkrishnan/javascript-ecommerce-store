let allProductsData = [];
let currentModalProduct = null;
let modalQuantity = 1;

const productImages = {
    beauty: {
        1: [
            "assets/images/beauty/eyelash-mascara-1.webp",
            "assets/images/beauty/eyelash-mascara-2.webp",
            "assets/images/beauty/eyelash-mascara-3.webp"   
        ],
        2: [
            "assets/images/beauty/eyeshadow-palette-1.webp",
            "assets/images/beauty/eyeshadow-palette-2.webp",
            "assets/images/beauty/eyeshadow-palette-3.webp"
        ],
        3: [
            "assets/images/beauty/powder-canister-1.webp",
            "assets/images/beauty/powder-canister-2.webp",
            "assets/images/beauty/powder-canister-3.webp"
        ],
        4: [
            "assets/images/beauty/red-lipstick-1.webp",
            "assets/images/beauty/red-lipstick-2.webp",
            "assets/images/beauty/red-lipstick-3.webp"
        ],
        5: [
            "assets/images/beauty/red-nail-polish-1.webp",
            "assets/images/beauty/red-nail-polish-2.webp",
            "assets/images/beauty/red-nail-polish-3.webp"
        ]
    },
    fragrances: {
        6: [
            "assets/images/fragrances/Calvin Klein-1.webp",
            "assets/images/fragrances/Calvin Klein-2.webp",
            "assets/images/fragrances/Calvin Klein-3.webp"
        ],
        7: [
            "assets/images/fragrances/Chanel Coco Noir Eau De-1.webp",
            "assets/images/fragrances/Chanel Coco Noir Eau De-2.webp",
            "assets/images/fragrances/Chanel Coco Noir Eau De-3.webp"
        ],
        8: [
            "assets/images/fragrances/Dior J'adore-1.webp",
            "assets/images/fragrances/Dior J'adore-2.webp",
            "assets/images/fragrances/Dior J'adore-3.webp"
        ],
        9: [
            "assets/images/fragrances/Dolce & Gabbana-1.webp",
            "assets/images/fragrances/Dolce & Gabbana-2.webp",
            "assets/images/fragrances/Dolce & Gabbana-3.webp"
        ],
        10: [
            "assets/images/fragrances/Gucci Bloom-1.webp",
            "assets/images/fragrances/Gucci Bloom-2.webp",
            "assets/images/fragrances/Gucci Bloom-3.webp"
        ]
    },
    furniture: {
        11: [
            "assets/images/furniture/Annibale Colombo Bed-1.webp",
            "assets/images/furniture/Annibale Colombo Bed-2.webp",
            "assets/images/furniture/Annibale Colombo Bed-3.webp"
        ],
        12: [
            "assets/images/furniture/Annibale Colombo Sofa-1.webp",
            "assets/images/furniture/Annibale Colombo Sofa-2.webp",
            "assets/images/furniture/Annibale Colombo Sofa-3.webp"
        ],
        13: [
            "assets/images/furniture/Bedside Table-1.webp",
            "assets/images/furniture/Bedside Table-2.webp",
            "assets/images/furniture/Bedside Table-3.webp"
        ],
        14: [
            "assets/images/furniture/Knoll Executive Conference Chair-1.webp",
            "assets/images/furniture/Knoll Executive Conference Chair-2.webp",
            "assets/images/furniture/Knoll Executive Conference Chair-3.webp"
        ],
        15: [
            "assets/images/furniture/Bathroom Sink With Mirror-1.webp",
            "assets/images/furniture/Bathroom Sink With Mirror-2.webp",
            "assets/images/furniture/Bathroom Sink With Mirror-3.webp"
        ]
    },
    groceries: {
        16: [
            "assets/images/groceries/Apple-1.webp",
            "assets/images/groceries/Apple-2.webp",
            "assets/images/groceries/Apple-3.webp"
        ],
        17: [
            "assets/images/groceries/Beef Steak-1.webp",
            "assets/images/groceries/Beef Steak-2.webp",
            "assets/images/groceries/Beef Steak-3.webp"
        ],
        18: [
            "assets/images/groceries/Cat Food-1.webp",
            "assets/images/groceries/Cat Food-2.webp",
            "assets/images/groceries/Cat Food-3.webp"
        ],
        19: [
            "assets/images/groceries/Chicken Meat-1.webp",
            "assets/images/groceries/Chicken Meat-2.webp",
            "assets/images/groceries/Chicken Meat-3.webp"
        ],
        20: [
            "assets/images/groceries/Cooking Oil-1.webp",
            "assets/images/groceries/Cooking Oil-2.webp",
            "assets/images/groceries/Cooking Oil-3.webp"
        ],
        21: [
            "assets/images/groceries/Cucumber-1.webp",
            "assets/images/groceries/Cucumber-2.webp",
            "assets/images/groceries/Cucumber-3.webp"
        ],
        22: [
            "assets/images/groceries/Dog Food-1.webp",
            "assets/images/groceries/Dog Food-2.webp",
            "assets/images/groceries/Dog Food-3.webp"
        ],
        23: [
            "assets/images/groceries/Eggs-1.webp",
            "assets/images/groceries/Eggs-2.webp",
            "assets/images/groceries/Eggs-3.webp"
        ],
        24: [
            "assets/images/groceries/Fish Steak-1.webp",
            "assets/images/groceries/Fish Steak-2.webp",
            "assets/images/groceries/Fish Steak-3.webp"
        ],
        25: [
            "assets/images/groceries/Green Bell Pepper-1.webp",
            "assets/images/groceries/Green Bell Pepper-2.webp",
            "assets/images/groceries/Green Bell Pepper-3.webp"
        ],
        26: [
            "assets/images/groceries/Green Chili-1.webp",
            "assets/images/groceries/Green Chili-2.webp",
            "assets/images/groceries/Green Chili-3.webp"
        ],
        27: [
            "assets/images/groceries/Honey Jar-1.webp",
            "assets/images/groceries/Honey Jar-2.webp",
            "assets/images/groceries/Honey Jar-3.webp"
        ],
        28: [
            "assets/images/groceries/Ice Cream-1.webp",
            "assets/images/groceries/Ice Cream-2.webp",
            "assets/images/groceries/Ice Cream-3.webp"
        ],
        29: [
            "assets/images/groceries/Juice-1.webp",
            "assets/images/groceries/Juice-2.webp",
            "assets/images/groceries/Juice-3.webp"
        ],
        30: [
            "assets/images/groceries/Kiwi-1.webp",
            "assets/images/groceries/Kiwi-2.webp",
            "assets/images/groceries/Kiwi-3.webp"
        ]
    },
    "men's clothing": {
        1: [
            "assets/images/mens-clothing/Backpack-1.webp",
            "assets/images/mens-clothing/Backpack-2.webp",
            "assets/images/mens-clothing/Backpack-3.webp"
        ],
        2: [
            "assets/images/mens-clothing/Casual T-Shirts-1.webp",
            "assets/images/mens-clothing/Casual T-Shirts-2.webp",
            "assets/images/mens-clothing/Casual T-Shirts-3.webp"
        ],
        3: [
            "assets/images/mens-clothing/Cotton Jacket-1.webp",
            "assets/images/mens-clothing/Cotton Jacket-2.webp",
            "assets/images/mens-clothing/Cotton Jacket-3.webp"
        ],
        4: [
            "assets/images/mens-clothing/Tshirt-1.webp",
            "assets/images/mens-clothing/Tshirt-2.webp",
            "assets/images/mens-clothing/Tshirt-3.webp"
        ]
    },
    jewelery: {
        5: [
            "assets/images/jewelery/Silver-Bracelet-1.webp",
            "assets/images/jewelery/Silver-Bracelet-2.webp",
            "assets/images/jewelery/Silver-Bracelet-3.webp"
        ],
        6: [
            "assets/images/jewelery/Gold Petite-1.webp",
            "assets/images/jewelery/Gold Petite-2.webp",
            "assets/images/jewelery/Gold Petite-3.webp"
        ],
        7: [
            "assets/images/jewelery/Gold Plated Ring-1.webp",
            "assets/images/jewelery/Gold Plated Ring-2.webp",
            "assets/images/jewelery/Gold Plated Ring-3.webp"
        ],
        8: [
            "assets/images/jewelery/Rose Gold Plated-1.webp",
            "assets/images/jewelery/Rose Gold Plated-2.webp",
            "assets/images/jewelery/Rose Gold Plated-3.webp"
        ]
    },
    electronics: {
        9: [
            "assets/images/electronics/Hard Drive-1.webp",
            "assets/images/electronics/Hard Drive-2.webp",
            "assets/images/electronics/Hard Drive-3.webp"
        ],
        10: [
            "assets/images/electronics/SanDisk SSD-1.webp",
            "assets/images/electronics/SanDisk SSD-2.webp",
            "assets/images/electronics/SanDisk SSD-3.webp"
        ],
        11: [
            "assets/images/electronics/SSD 3D NAND-1.webp",
            "assets/images/electronics/SSD 3D NAND-2.webp",
            "assets/images/electronics/SSD 3D NAND-3.webp"
        ],
        12: [
            "assets/images/electronics/Gaming Hard Drive-1.webp",
            "assets/images/electronics/Gaming Hard Drive-2.webp",
            "assets/images/electronics/Gaming Hard Drive-3.webp"
        ],
        13: [
            "assets/images/electronics/Acer TV-1.webp",
            "assets/images/electronics/Acer TV-2.webp",
            "assets/images/electronics/Acer TV-3.webp"
        ],
        14: [
            "assets/images/electronics/Samsung TV-1.webp",
            "assets/images/electronics/Samsung TV-2.webp",
            "assets/images/electronics/Samsung TV-3.webp"
        ]
    },
    "women's clothing": {
        15: [
            "assets/images/womens-clothing/Winter Coats-1.webp",
            "assets/images/womens-clothing/Winter Coats-2.webp",
            "assets/images/womens-clothing/Winter Coats-3.webp"
        ],
        16: [
            "assets/images/womens-clothing/Moto Biker Jacket-1.webp",
            "assets/images/womens-clothing/Moto Biker Jacket-2.webp",
            "assets/images/womens-clothing/Moto Biker Jacket-3.webp"
        ],
        17: [
            "assets/images/womens-clothing/Climbing Raincoats-1.webp",
            "assets/images/womens-clothing/Climbing Raincoats-2.webp",
            "assets/images/womens-clothing/Climbing Raincoats-3.webp"
        ],
        18: [
            "assets/images/womens-clothing/Boat Neck-1.webp",
            "assets/images/womens-clothing/Boat Neck-2.webp",
            "assets/images/womens-clothing/Boat Neck-3.webp"
        ],
        19: [
            "assets/images/womens-clothing/Short Sleeve-1.webp",
            "assets/images/womens-clothing/Short Sleeve-2.webp",
            "assets/images/womens-clothing/Short Sleeve-3.webp"
        ],
        20: [
            "assets/images/womens-clothing/Cotton Shirt-1.webp",
            "assets/images/womens-clothing/Cotton Shirt-2.webp",
            "assets/images/womens-clothing/Cotton Shirt-3.webp"
        ]
    },
    shoes: {
        1: [
            "assets/images/shoes/nike-side.webp",
            "assets/images/shoes/nike-top.webp",
            "assets/images/shoes/nike-back.webp"
        ],
        2: [
            "assets/images/shoes/adidas-side.webp",
            "assets/images/shoes/adidas-top.webp",
            "assets/images/shoes/adidas-back.webp"
        ],
        3: [
            "assets/images/shoes/puma-side.webp",
            "assets/images/shoes/puma-top.webp",
            "assets/images/shoes/puma-back.webp"
        ],
        4: [
            "assets/images/shoes/loafers-side.webp",
            "assets/images/shoes/loafers-top.webp",
            "assets/images/shoes/loafers-back.webp"
        ],
        5: [
            "assets/images/shoes/sneaker-side.webp",
            "assets/images/shoes/sneaker-top.webp",
            "assets/images/shoes/sneaker-back.webp"
        ]
    }
};



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
const minRange = document.querySelector(".min-range");
const maxRange = document.querySelector(".max-range");
const minPriceText = document.getElementById("min-price");
const maxPriceText = document.getElementById("max-price");
const resetPrice = document.querySelector(".resetPrice");



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
 

function showLoadingSkeleton() {
    productsListsContainer.innerHTML = "";
    let skeletonCount;
    if(window.innerWidth <= 480) {
        skeletonCount = 4;
    }
    else if(window.innerWidth <= 768) {
        skeletonCount = 8;
    }
    else {
        skeletonCount = 12;
    }
    for(let i = 0; i < skeletonCount; i++) {
        productsListsContainer.innerHTML += `
            <div class="skeleton-product-card">
                <div class="skeleton-image"></div>
                <div class="skeleton-text skeleton-category"></div>
                <div class="skeleton-text skeleton-title"></div>
                <div class="skeleton-text skeleton-rating"></div>
                <div class="skeleton-text skeleton-price"></div>
                <div class="skeleton-button"></div>
            </div>
        `;
    }
}

async function fetchProducts() {
    showLoadingSkeleton();
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

        const allProducts = [...dummyJsonData.products, ...fakeStoreData, ...shoesData].map(product => {
            const exchangeRate = 95;
            const originalPrice = Math.floor(product.price * exchangeRate);
            const discountPercentage = Math.ceil(product.discountPercentage || (Math.random() * 20) + 5);
            const discountedPrice = Math.floor(originalPrice - (originalPrice * discountPercentage / 100));
            const stockValue = product.stock || Math.floor(Math.random() * 20) + 1;

            const productThumbnail = product.images?.[0] || product.image;
            const categoryImages = productImages[product.category]?.[product.id];
            const finalImages = categoryImages ? [productThumbnail, ...categoryImages] : [productThumbnail];

            return {
                ...product,
                uniqueId: `${product.category}-${product.id}`,
                originalPrice,
                discountPercentage,
                discountedPrice, 
                stock: stockValue,
                images: finalImages,
                variations: generateProductVariations(product.category)
            };
        });
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
        const productThumbnail = product.thumbnail || product.image; 
        const productRatings = (product.rating?.rate || product.rating).toFixed(1); 
              
        productsListsContainer.innerHTML += `
            <div class = "product-item" data-id="${product.uniqueId}">
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
                    ₹${product.discountedPrice}
                    <span class="original-price">₹${product.originalPrice}</span>
                    <span class="discount">${product.discountPercentage}% OFF</span>
                </p>
                <button class = "view-details">View Details</button>
            </div>
        `;
    });
}


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
    let selectedCategories = [];
    categoryFilters.forEach(category => {
        if(category.checked) {
            const categoryValue = category.value.toLowerCase();
            if(categoryValue === "fashion") {
                selectedCategories.push("men's clothing", "women's clothing", "shoes");
            }
            else if(categoryValue === "beauty & accessories") {
                selectedCategories.push("beauty", "fragrances", "jewelery");
            }
            else {
                selectedCategories.push(categoryValue);
            }
        }
    });
    console.log(selectedCategories);

    selectedCategories = [...new Set(selectedCategories)];

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


minRange.addEventListener("input", priceFilterProducts);
maxRange.addEventListener("input", priceFilterProducts);

function priceFilterProducts() {
    const minPrice = Number(minRange.value);
    const maxPrice = Number(maxRange.value);
    minPriceText.textContent = minPrice;
    maxPriceText.textContent = maxPrice;

    const priceFilteredProducts = allProductsData.filter(product => {
        return product.discountedPrice >= minPrice && product.discountedPrice <= maxPrice;
    });
    console.log(priceFilteredProducts);
    displayProducts(priceFilteredProducts);
}

minRange.addEventListener("input", () => {
    if(Number(minRange.value) > Number(maxRange.value)) {
        minRange.value = maxRange.value;
    }
    priceFilterProducts();
    updateSliderTrack();
});

maxRange.addEventListener("input", () => {
    if(Number(maxRange.value) < Number(minRange.value)) {
        maxRange.value = minRange.value;
    }
    priceFilterProducts();
    updateSliderTrack();
});

resetPrice.addEventListener("click", () => {
    minRange.value = 0;
    maxRange.value = 202000;
    minPriceText.textContent = 0;
    maxPriceText.textContent = 202000;
    displayProducts(allProductsData);
    updateSliderTrack();
});

function updateSliderTrack() {
    const min = minRange.min;
    const max = minRange.max;
    const left = ((minRange.value - min) / (max - min)) * 100;
    const right = ((maxRange.value - min) / (max - min)) * 100;

    document.querySelector(".slider-track").style.background =
        `linear-gradient(to right,
        #ddd ${left}%,
        #4B0082 ${left}%,
        #4B0082 ${right}%,
        #ddd ${right}%)`;
}

const sortSelect = document.getElementById("sort-select");
sortSelect.addEventListener("change", sortProducts);

function sortProducts() {
    const sortSelectValue = sortSelect.value;
    let sortedProducts = [...allProductsData];
    console.log(sortedProducts);

    if(sortSelectValue === "high-low") {
        sortedProducts.sort((a, b) => {
            return b.discountedPrice - a.discountedPrice;
        });
    }
    else if(sortSelectValue === "low-high") {
        sortedProducts.sort((a, b) => {
            return a.discountedPrice - b.discountedPrice;
        });
    }
    else if(sortSelectValue === "ratings") {
        sortedProducts.sort((a, b) => {
            const ratingA = a.rating?.rate || a.rating;
            const ratingB = b.rating?.rate || b.rating;
            return ratingB - ratingA;
        });
    }
    else if(sortSelectValue === "discount") {
        sortedProducts.sort((a, b) => {
            return b.discountPercentage - a.discountPercentage;
        });
    }
    else if(sortSelectValue === "newest") {
        sortedProducts.sort((a, b) => {
            return b.id - a.id;
        });
    }
    displayProducts(sortedProducts);
}


const productModalOverlay = document.querySelector(".product-modal-overlay");
document.addEventListener("click", (event) => {

    const viewDetailsBtn = event.target.closest(".view-details");
    console.log(viewDetailsBtn);
    if(viewDetailsBtn) {
        const productItem = viewDetailsBtn.closest(".product-item");
        console.log(productItem);
        const productId = productItem.dataset.id;
        console.log(productId);
        const selectedProduct = allProductsData.find(product => 
            product.uniqueId === productId
        );
        console.log(selectedProduct);
        openProductModal(selectedProduct);
    }

});


const modalMainImage = document.querySelector(".modal-main-image");
const modalThumbnailsContainer = document.querySelector(".modal-product-thumbnails");
const modalProductTitle = document.querySelector(".modal-product-title");
const modalRatingStars = document.querySelector(".modal-rating-stars");
const modalRatingText = document.querySelector(".modal-rating-text");
const modalDiscountedPrice = document.querySelector(".modal-discounted-price");
const modalOriginalPrice = document.querySelector(".modal-original-price");
const modalDiscountPercent = document.querySelector(".modal-discount-percent");
const modalDescription = document.querySelector(".modalDescription");
const modalMinusBtn = document.querySelector(".modal-minus-btn");
const modalPlusBtn = document.querySelector(".modal-plus-btn");
const modalQuantityValue = document.querySelector(".modal-quantity-value");
const modalStockValue = document.querySelector(".modal-stockValue");
const modalAddCartBtn = document.querySelector(".modal-add-cart-btn");

const modalProductColors = document.querySelector(".modal-product-colors");
const modalColorsList = document.querySelector(".modal-colors-list");
const modalProductSizes = document.querySelector(".modal-product-sizes");
const modalSizesList = document.querySelector(".modal-sizes-list");

function openProductModal(product) {
    modalQuantity = 1;
    currentModalProduct = product;
    productModalOverlay.style.display = "flex";
    const productRating = (product.rating?.rate || product.rating);

    modalMainImage.src = product.images?.[0];
    modalThumbnailsContainer.innerHTML = "";
    modalProductTitle.textContent = product.title;
    modalRatingText.textContent = `${productRating.toFixed(1)} Ratings`;
    modalDiscountedPrice.textContent =  `Rs.${product.discountedPrice}`;
    modalOriginalPrice.textContent = `Rs.${product.originalPrice}`;
    modalDiscountPercent.textContent = `${product.discountPercentage}% OFF`;
    modalDescription.textContent = product.description;
    modalQuantityValue.textContent = modalQuantity;

    generateRatingStars(productRating);

    product.images.forEach((image, index) => {
        modalThumbnailsContainer.innerHTML += `
            <div class="modal-thumbnail ${index === 0 ? "modal-active-thumbnail" : ""}">
                <img src="${image}">
            </div>
        `;
    });

 
    const modalThumbnails = document.querySelectorAll(".modal-thumbnail");
    modalThumbnailsContainer.addEventListener("click", (event) => {
        const thumbnail = event.target.closest(".modal-thumbnail");
        if(!thumbnail) return;
        const thumbnailImage = thumbnail.querySelector("img").src;
        modalMainImage.src = thumbnailImage;
        modalThumbnails.forEach(item => {
            item.classList.remove("modal-active-thumbnail");
        });
        thumbnail.classList.add("modal-active-thumbnail");
    });


    if(product.stock === 0) {
        modalStockValue.textContent = "Out of Stock";
        modalStockValue.style.color = "#ff0000";
        modalAddCartBtn.disabled = true;
        modalAddCartBtn.style.opacity = "0.6";
        modalAddCartBtn.style.cursor = "not-allowed";
    }
    else if(product.stock <= 5) {
        modalStockValue.textContent = `Only ${product.stock} items left!`;
        modalStockValue.style.color = "#ff9800";
        modalAddCartBtn.disabled = false;
        modalAddCartBtn.style.opacity = "1";
        modalAddCartBtn.style.cursor = "pointer";
    }
    else {
        modalStockValue.textContent = `${product.stock} items available`;
        modalStockValue.style.color = "#00a63e";
        modalAddCartBtn.disabled = false;
        modalAddCartBtn.style.opacity = "1";
        modalAddCartBtn.style.cursor = "pointer";
    }   

    updateQuantityButtons();
    renderProductVariations(product);
}

modalPlusBtn.addEventListener("click", () => {
    if(modalQuantity < currentModalProduct.stock) {
        modalQuantity++;
        modalQuantityValue.textContent = modalQuantity;
        updateQuantityButtons();
    }
});

modalMinusBtn.addEventListener("click", () => {
    if(modalQuantity > 1) {
        modalQuantity--;
        modalQuantityValue.textContent = modalQuantity;
        updateQuantityButtons();
    }
});

function updateQuantityButtons() {
    if(modalQuantity >= currentModalProduct.stock) {
        modalPlusBtn.disabled = true;
    }
    else {
        modalPlusBtn.disabled = false;
    }

    if(modalQuantity <= 1) {
        modalMinusBtn.disabled = true;
    }
    else {
        modalMinusBtn.disabled = false;
    }
}

let cartProducts = [];
modalAddCartBtn.addEventListener("click", () => {
    if(!currentModalProduct) return;
    const selectedColor = document.querySelector(".modal-active-color")?.dataset.color || "";
    const selectedSize = document.querySelector(".modal-active-size")?.dataset.size || "";

    const existingProduct = cartProducts.find(product =>
        product.uniqueId === currentModalProduct.uniqueId &&
        product.selectedColor === selectedColor &&
        product.selectedSize === selectedSize
    );

    if(existingProduct) {
        existingProduct.quantity += modalQuantity;
    }
    else {
        cartProducts.push({
            ...currentModalProduct,
            quantity: modalQuantity,
            selectedColor,
            selectedSize
        });
    }
    console.log(cartProducts);
    updateCartCount();
});

const closeModal =  document.querySelector(".close-modal");
closeModal.addEventListener("click", () => {
    productModalOverlay.style.display = "none";
});

productModalOverlay.addEventListener("click", (event) => {
    if(event.target === productModalOverlay) {
        productModalOverlay.style.display = "none";
    }
});


function generateRatingStars(rating) {
    modalRatingStars.innerHTML = "";

    const roundedRating = Math.round(rating * 10) / 10;
    const fullStars = Math.floor(roundedRating);
    const decimalPart = roundedRating - fullStars;
    const halfStar = decimalPart >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for(let i = 0; i < fullStars; i++) {
        modalRatingStars.innerHTML += `
            <i class="fa-solid fa-star"></i>
        `;
    }
    if(halfStar) {
        modalRatingStars.innerHTML += `
            <i class="fa-solid fa-star-half-stroke"></i>
        `;
    }
    for(let i = 0; i < emptyStars; i++) {
        modalRatingStars.innerHTML += `
            <i class="fa-regular fa-star"></i>
        `;
    }
}


function generateProductVariations(category) {
    switch(category.toLowerCase()) {
        case "shoes":
            return {
                colors: ["red", "black", "blue", "white"],
                sizes: [6, 7, 8, 9, 10]
            };
        case "men's clothing":
        case "women's clothing":
            return {
                colors: ["black", "gray", "blue", "green"],
                sizes: ["S", "M", "L", "XL", "XXL"]
            };
        case "beauty":
            return {
                colors: ["pink", "red", "brown", "nude"],
                sizes: []
            };
        case "fragrances":
            return {
                colors: [],
                sizes: ["50ml", "100ml", "150ml", "250ml"]
            };
        case "furniture":
            return {
                colors: ["brown", "black", "white"],
                sizes: []
            };
        case "electronics":
            return {
                colors: ["black", "silver", "gray"],
                sizes: ["128GB", "256GB", "512GB"]
            };
        case "groceries":
            return {
                colors: [],
                sizes: ["500g", "1kg", "2kg"]
            };
        case "jewelery":
            return {
                colors: ["gold", "silver", "rose-gold"],
                sizes: [6, 7, 8]
            };
        default:
            return {
                colors: [],
                sizes: []
            };
    }
}

function renderProductVariations(product) {
    const {colors, sizes} = product.variations;
    modalColorsList.innerHTML = "";
    modalSizesList.innerHTML = "";

    if(colors.length > 0) {
        modalProductColors.style.display = "block";
        colors.forEach((color, index) => {
            modalColorsList.innerHTML += `
                <span class="modal-color ${color} ${index === 0 ? "modal-active-color" : ""}" data-color="${color}"></span>
            `;
        });
    }
    else {
        modalProductColors.style.display = "none";
    }

    if(sizes.length > 0) {
        modalProductSizes.style.display = "block";
        sizes.forEach((size, index) => {
            modalSizesList.innerHTML += `
                <button class="modal-size-btn ${index === 0 ? "modal-active-size" : ""}" data-size="${size}">
                    ${size}
                </button>
            `;
        });
    }
    else {
        modalProductSizes.style.display = "none";
    }
}


modalColorsList.addEventListener("click", (event) => {
    const selectedColor = event.target.closest(".modal-color");
    if(!selectedColor) return;
    document.querySelectorAll(".modal-color").forEach(color => {
        color.classList.remove("modal-active-color");
    });
    selectedColor.classList.add("modal-active-color");
});


modalSizesList.addEventListener("click", (event) => {
    const selectedSize = event.target.closest(".modal-size-btn");
    if(!selectedSize) return;
    document.querySelectorAll(".modal-size-btn").forEach(size => {
        size.classList.remove("modal-active-size");
    });
    selectedSize.classList.add("modal-active-size");
});

let wishlistProducts = [];
const wishlistCount = document.querySelector(".wishlist-count");

document.addEventListener("click", (event) => {
    const wishlistBtn = event.target.closest(".wishlist-icon"); 
    if(wishlistBtn) {
        const productItem = wishlistBtn.closest(".product-item");
        const productId = productItem.dataset.id;
        const selectedProduct = allProductsData.find(product =>
                product.uniqueId === productId
        );
        wishlistBtn.classList.toggle("active");
        const wishlistIcon = wishlistBtn.querySelector("i");
        if(wishlistBtn.classList.contains("active")) {
            wishlistIcon.classList.remove("fa-regular");
            wishlistIcon.classList.add("fa-solid");
            wishlistProducts.push(selectedProduct);
        }
        else {
            wishlistIcon.classList.remove("fa-solid");
            wishlistIcon.classList.add("fa-regular");
            wishlistProducts = wishlistProducts.filter(product =>
                product.uniqueId !== selectedProduct.uniqueId
            );
        }
        updateWishlistCount();
    }
});

function updateWishlistCount() {
    wishlistCount.textContent = wishlistProducts.length;
}

const wishlistNavbar = document.querySelector(".wishlist-navbar");
const wishlistPage = document.querySelector(".wishlist-page");
const closeWishlist = document.querySelector(".close-wishlist");
const wishlistProductsContainer = document.querySelector(".wishlist-products-container");
const wishlistTotalItems = document.querySelector(".wishlist-total-items");

wishlistNavbar.addEventListener("click", () => {
    wishlistPage.classList.add("active");
    renderWishlistProducts();
});

closeWishlist.addEventListener("click", () => {
    wishlistPage.classList.remove("active");
});

function renderWishlistProducts() {
    wishlistProductsContainer.innerHTML = "";
    wishlistTotalItems.textContent = `${wishlistProducts.length} Items`;
    if(wishlistProducts.length === 0) {
        wishlistProductsContainer.innerHTML = `
            <p class="empty-wishlist">
                Wishlist is empty
            </p>
        `;
        return;
    }
    wishlistProducts.forEach(product => {
        const productImage = product.images?.[0] || product.image;
        wishlistProductsContainer.innerHTML += `
            <div class="wishlist-product">
                <img src="${productImage}">
                <div class="wishlist-product-details">
                    <h4>${product.title}</h4>
                    <p class="wishlist-product-price">
                        ₹${product.discountedPrice}
                    </p>
                    <button class="remove-wishlist-btn" data-id="${product.uniqueId}">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });
}

document.addEventListener("click", (event) => {
    const removeBtn = event.target.closest(".remove-wishlist-btn");
    if(removeBtn) {
        const productId = removeBtn.dataset.id;
        wishlistProducts = wishlistProducts.filter(product =>
                product.uniqueId !== productId
            );
        updateWishlistCount();
        renderWishlistProducts();
        updateWishlistIcons(productId);
    }
});


function updateWishlistIcons(productId) {
    const productCard = document.querySelector(`.product-item[data-id="${productId}"]`);
    if(productCard) {
        const wishlistBtn = productCard.querySelector(".wishlist-icon");
        wishlistBtn.classList.remove("active");
        const icon = wishlistBtn.querySelector("i");
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    }
}


const shoppingCart = document.querySelector(".shoppg-cart");
const cartPage = document.querySelector(".cart-page");
const closeCart = document.querySelector(".close-cart");

const cartCount = document.querySelector(".cart-count");
function updateCartCount() {
    const totalItems = cartProducts.reduce((total, product) => {
        return total + product.quantity;
    }, 0);
    cartCount.textContent = totalItems;
}




shoppingCart.addEventListener("click", () => {
    cartPage.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartPage.classList.remove("active");
});



