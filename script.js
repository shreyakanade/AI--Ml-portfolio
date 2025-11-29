// Typing Text Animation
const text = ["AI/ML Intern", "Data Science Enthusiast", "Python Developer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const typing = document.getElementById("typing");
    if (charIndex < text[index].length) {
        typing.innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(deleteEffect, 1000);
    }
}

function deleteEffect() {
    const typing = document.getElementById("typing");
    if (charIndex > 0) {
        typing.innerHTML = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();
