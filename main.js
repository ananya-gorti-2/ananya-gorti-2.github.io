document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#bar");
    let nav = document.querySelector(".navbar");
    let currentPage = window.location.pathname.split("/").pop(); // Get the current page filename

    menu.onclick = () => {
        menu.classList.toggle("fa-times");
        nav.classList.toggle("active");
    }

    // Highlight the active item based on the current page
    let navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        let linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage && linkPage !== "main.html") {
            link.classList.add("active");
        }
    });
});