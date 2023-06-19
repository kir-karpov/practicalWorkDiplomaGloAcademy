const scrollUp = () => {
  const upArrow = document.querySelector('.up');

  function toggleUpArrow() {
    if (window.scrollY > 600) {
      upArrow.style.display = 'block';
    } else {
      upArrow.style.display = 'none';
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  upArrow.style.display = 'none';

  window.addEventListener('scroll', toggleUpArrow);

  upArrow.addEventListener('click', scrollToTop);
};

export default scrollUp;
