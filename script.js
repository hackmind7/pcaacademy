// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const href = event.target.getAttribute("href");
            document.querySelector(href).scrollIntoView({ behavior: "smooth" });
        }
    });
});