const carouselArrow = () => {
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const carousel = document.querySelector('.services-carousel');
  const slides = carousel.querySelectorAll('.col-sm-6');
  const visibleSlides = {
    desktop: 3,
    tablet: 2,
    mobile: 1
  };
  let currentIndex = 0;

  arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidesVisibility();
  });

  arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidesVisibility();
  });

  window.addEventListener('resize', updateSlidesVisibility);

  updateSlidesVisibility();

  function updateSlidesVisibility() {
    const viewportWidth = window.innerWidth;
    let currentVisibleSlides = visibleSlides.desktop;

    if (viewportWidth < 992 && viewportWidth >= 768) {
      currentVisibleSlides = visibleSlides.tablet;
    } else if (viewportWidth < 768) {
      currentVisibleSlides = visibleSlides.mobile;
    }

    for (let i = 0; i < slides.length; i++) {
      if (i >= currentIndex && i < currentIndex + currentVisibleSlides) {
        slides[i].style.display = 'block';
      } else {
        slides[i].style.display = 'none';
      }
    }
  }
};

export default carouselArrow;
