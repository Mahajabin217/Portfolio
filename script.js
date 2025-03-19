// For Toggle navbar:

function toggleMenu() {
    let menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}

// For Animating Hero section:
const words = ["Frontend Developer", "Aspiring Software Engineer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const textElement = document.getElementById("changing-text");

function typeEffect() {
    let currentWord = words[index];

    if (isDeleting) {
        textElement.innerText = currentWord.substring(0, charIndex--);
    } else {
        textElement.innerText = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
        setTimeout(typeEffect, 500); // Pause before next word
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();

