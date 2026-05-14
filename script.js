const toggleMenu = document.querySelector(".toggle-menu");
const navigationMenu = document.querySelector(".nav-section ul");
const filterToggle = document.querySelector(".filter-toggle");
const filterContainer = document.querySelector(".filter-container");
const closeFilter = document.querySelector(".close-filter");

toggleMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
});

filterToggle.addEventListener("click", () => {
    filterContainer.classList.add("active");
});

closeFilter.addEventListener("click", () => {
    filterContainer.classList.remove("active");
});

