const effectsHref = () => {
  
const pricesLink = document.querySelector('a[href="#services"]');
const faqLink = document.querySelector('a[href="#faq"]');
const contactsLink = document.querySelector('a[href="#contacts"]');

const pricesSection = document.getElementById('services');
const faqSection = document.getElementById('faq');
const contactsSection = document.getElementById('contacts');

pricesLink.addEventListener('click', (event) => {
  event.preventDefault();
  smoothScroll(pricesSection);
});

faqLink.addEventListener('click', (event) => {
  event.preventDefault();
  smoothScroll(faqSection);
});

contactsLink.addEventListener('click', (event) => {
  event.preventDefault();
  smoothScroll(contactsSection);
});

function smoothScroll(targetElement) {
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Продолжительность анимации в миллисекундах
  const easing = function(t) {
    return t * t * t; // Измените эту функцию, чтобы настроить эффект плавности
  };
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed / duration);
    const currentPosition = run * distance + startPosition;
    window.scrollTo(0, currentPosition);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t) {
    return easing(t);
  }

  requestAnimationFrame(animation);
}


}

export default effectsHref;