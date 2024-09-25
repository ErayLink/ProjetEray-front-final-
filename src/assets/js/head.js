document.getElementById("openFormBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "flex";
});

document.getElementById("closeFormBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";
});

//Caroussel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0; // Retour à la première diapositive
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Retour à la dernière diapositive
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
