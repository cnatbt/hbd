let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Function to go to next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Function to manually select a slide
function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
    resetTimer(); // Reset the auto-play timer when user interacts
}

// Auto-play functionality
function startTimer() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

// Initialize the slideshow
showSlide(slideIndex);
startTimer();