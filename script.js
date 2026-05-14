const toggleMenu = document.querySelector(".toggle-menu");
const navigationMenu = document.querySelector(".nav-section ul");

toggleMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
});


