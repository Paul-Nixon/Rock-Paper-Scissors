const toggleButton = document.querySelector(".fa-bars");
const headerLinks = document.querySelector(".header-links");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active-bars");
    headerLinks.classList.toggle("active-header-menu");
})