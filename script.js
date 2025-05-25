// Pro mobilní zobrazení
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");

    // Proklik (pouze pro mobil)
    dropdown.addEventListener("click", (e) => {
        // Zabráníme, aby kliknutí hned zmizelo
        e.stopPropagation();
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Kliknutí mimo zavře menu
    document.addEventListener("click", () => {
        menu.style.display = "none";
    });
});

//shrink---------------------------
let lastScrollY = 0;
let ticking = false;

function handleScroll() {
    const header = document.querySelector('header');
    if (lastScrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
    ticking = false;
}

window.addEventListener('scroll', function () {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
    }
});

// Dropdown menu na klik
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('open');
    });

    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('open');
    });
});
