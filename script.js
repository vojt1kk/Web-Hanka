// Unified dropdown and scrollable header logic

document.addEventListener("DOMContentLoaded", function() {
    // Dropdown menu logic
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");

    if (dropdown && menu) {
        dropdown.addEventListener("click", (e) => {
            e.stopPropagation();
            menu.classList.toggle("open");
        });
        document.addEventListener("click", () => {
            menu.classList.remove("open");
        });
    }

    // Scrollable header shrink effect for all .header elements
    const headers = document.querySelectorAll('.header');
    if (headers.length > 0) {
        let ticking = false;
        function handleScroll() {
            headers.forEach(header => {
                if (window.scrollY > 50) {
                    header.classList.add('shrink');
                } else {
                    header.classList.remove('shrink');
                }
            });
            ticking = false;
        }
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        });
    }
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

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});
