const accordeon = () => {
  const accordeonElements = document.querySelectorAll('.accordeon .element');
  const contentElements = document.querySelectorAll('.accordeon .element-content');

  accordeonElements.forEach((element, index) => {
    const title = element.querySelector('.title');
    const content = contentElements[index];

    title.addEventListener('click', () => {
      const isActive = element.classList.contains('active');

      if (!isActive) {
        accordeonElements.forEach(el => {
          el.classList.remove('active');
        });
        contentElements.forEach(content => {
          content.style.display = 'none';
        });

        element.classList.add('active');
        content.style.display = 'block';
      } else {
        element.classList.remove('active');
        content.style.display = 'none';
      }
    });
  });
};

export default accordeon;
