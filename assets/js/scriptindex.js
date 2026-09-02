const textElement = document.getElementById('typing-text');
const textArray = ["Welcome to Sancharam", "Welcome to சஞ்சாரம"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 150;
let erasingSpeed = 100;
let delayBetween = 1500;

function type() {
    if (charIndex < textArray[textIndex].length) {
        textElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingSpeed);
});

// ✅ Automatic Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = "0";
    });
    slides[slideIndex].style.opacity = "1";

    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 5000); // Change every 5 seconds
}

showSlides();

const images = [
    'chettinad.jpg',
    'chennai.jpg',
    'tranquebar_fort.jpg',
    'ooty.jpg',
    'hogenakkal.jpg',
    'velankanni.jpg'
];

let currentIndex = 0;
const body = document.body;

function changeBackground() {
    body.style.background = `url('${images[currentIndex]}') no-repeat center center/cover`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 4000); // Change background every 4 seconds
changeBackground(); // Initialize first image
