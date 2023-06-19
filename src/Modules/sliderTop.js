const sliderTop = () => {
  const slider = document.querySelector('.top-slider');
  const items = slider.querySelectorAll('.item');
  const dotsContainer = document.createElement('ul');
  dotsContainer.classList.add('slick-dots');
  slider.appendChild(dotsContainer);

  items.forEach((item, index) => {
    const dot = document.createElement('li');
    dot.addEventListener('click', () => {
      setActiveSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  let activeIndex = 0;
  const dots = dotsContainer.querySelectorAll('li');
  let interval;

  function setActiveSlide(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
        dots[i].classList.add('slick-active');
      } else {
        item.classList.remove('active');
        dots[i].classList.remove('slick-active');
      }
    });

    activeIndex = index;
  }

  function nextSlide() {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= items.length) {
      nextIndex = 0;
    }
    setActiveSlide(nextIndex);
  }

  function startInterval() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopInterval() {
    clearInterval(interval);
  }

  slider.addEventListener('mouseover', () => {
    stopInterval();
  });

  slider.addEventListener('mouseout', () => {
    startInterval();
  });

  startInterval();
  setActiveSlide(activeIndex);
};

export default sliderTop;
