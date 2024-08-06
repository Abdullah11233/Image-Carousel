const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const imageCount = images.length;
const imageWidth = images[0].clientWidth;

function showImage(index) {
    carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Auto-play functionality
let autoPlay = setInterval(nextImage, 3000);

carouselImages.addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
});

carouselImages.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextImage, 3000);
});
