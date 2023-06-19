const scrollUp = () => {
  // Получаем ссылку на элемент стрелки "Вверх"
  const upArrow = document.querySelector('.up');

  // Функция для отображения или скрытия стрелки в зависимости от положения страницы
  function toggleUpArrow() {
    if (window.scrollY > 600) {
      upArrow.style.display = 'block';
    } else {
      upArrow.style.display = 'none';
    }
  }

  // Функция для плавной прокрутки страницы к началу
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Скрываем стрелку при загрузке страницы
  upArrow.style.display = 'none';

  // Добавляем обработчик события при прокрутке страницы
  window.addEventListener('scroll', toggleUpArrow);

  // Добавляем обработчик события при клике на стрелку "Вверх"
  upArrow.addEventListener('click', scrollToTop);
};

export default scrollUp;
