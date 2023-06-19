const carouselArrow = () => {

// Получаем ссылки на стрелки и элементы карусели
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const carousel = document.querySelector('.services-carousel');
const slides = carousel.querySelectorAll('.col-sm-6');

// Определяем количество видимых слайдов
const visibleSlides = 3;
let currentIndex = 0;

// Обработчик клика по стрелке влево
arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidesVisibility();
});

// Обработчик клика по стрелке вправо
arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidesVisibility();
});

// Показать первые видимые слайды
updateSlidesVisibility();

// Обновление видимости слайдов
function updateSlidesVisibility() {
  for (let i = 0; i < slides.length; i++) {
    if (isSlideVisible(i)) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}

// Проверка, является ли слайд видимым
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