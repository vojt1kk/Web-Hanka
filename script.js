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
});

// Dropdown menu na klik
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdown && dropdownMenu) {
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('open');
        });

        document.addEventListener('click', function () {
            dropdownMenu.classList.remove('open');
        });
    }
});