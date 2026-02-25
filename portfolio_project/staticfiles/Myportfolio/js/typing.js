const texts = [
    "Computer Science & Engg. Student",
    "Full Stack Developer",
    "Django Developer",
    "Python Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingStarted = false;

function typeEffect() {

    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return; // safety check

    const currentText = texts[textIndex];

    // typing
    if (!isDeleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    // deleting
    else {
        typingElement.textContent =
            currentText.substring(0, charIndex - 1);
        charIndex--;
    }

    let speed = isDeleting ? 50 : 100;

    // finished typing
    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000; // pause 2 sec
        isDeleting = true;
    }

    // finished deleting
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

// ✅ run only once (prevents reload-like behaviour)
document.addEventListener("DOMContentLoaded", function () {
    if (!typingStarted) {
        typingStarted = true;
        typeEffect();
    }
});

