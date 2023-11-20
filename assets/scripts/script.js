// Mobile only nav toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('#navbar ul');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});

// Typed text
document.addEventListener('DOMContentLoaded', function () {
    const typedText = document.getElementById('typed-text');
    const itemsToType = ["Welcome to My Portfolio", "Explore my projects", "Contact me for collaborations", "\"The best way to predict the future is to invent it.\"-Alan Kay"];
    let itemIndex = 0;
    let charIndex = 0;
    let displayLength = 0;

    function typeText() {
        typedText.textContent = itemsToType[itemIndex].substring(0, displayLength);
        displayLength++;

        if (displayLength <= itemsToType[itemIndex].length) {
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1250);
        }
    }

    function eraseText() {
        if (displayLength >= 0) {
            typedText.textContent = itemsToType[itemIndex].substring(0, displayLength);
            displayLength--;
            setTimeout(eraseText, 50);
        } else {
            itemIndex = (itemIndex + 1) % itemsToType.length;
            setTimeout(() => {
                displayLength = 0;
                typeText();
            }, 500);
        }
    }

    setTimeout(typeText, 1000);
});

// Dynamic Scrolling
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
