document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
});
