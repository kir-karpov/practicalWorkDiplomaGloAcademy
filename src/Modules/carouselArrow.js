const carouselArrow = () => {

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const carousel = document.querySelector('.services-carousel');
const slides = carousel.querySelectorAll('.col-sm-6');

const visibleSlides = 3;
let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidesVisibility();
});

arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidesVisibility();
});

updateSlidesVisibility();

function updateSlidesVisibility() {
  for (let i = 0; i < slides.length; i++) {
    if (isSlideVisible(i)) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}

function isSlideVisible(slideIndex) {
  const endVisibleIndex = (currentIndex + visibleSlides - 1) % slides.length;
  if (currentIndex <= endVisibleIndex) {
    return slideIndex >= currentIndex && slideIndex <= endVisibleIndex;
  } else {
    return slideIndex >= currentIndex || slideIndex <= endVisibleIndex;
  }
}

}
export default carouselArrow 