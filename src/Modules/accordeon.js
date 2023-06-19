const accordeon = () => {

  // Получаем все элементы аккордеона
const accordeonElements = document.querySelectorAll('.accordeon .element');

// Добавляем обработчик события для каждого элемента
accordeonElements.forEach(element => {
  const title = element.querySelector('.title');
  const content = element.querySelector('.element-content');

  // При клике на заголовок элемента
  title.addEventListener('click', () => {
    // Проверяем, содержит ли элемент класс "active"
    const isActive = element.classList.contains('active');

    // Закрываем все элементы аккордеона
    accordeonElements.forEach(el => {
      el.classList.remove('active');
    });

    // Если элемент не был активным, открываем его
    if (!isActive) {
      element.classList.add('active');
    }
  });
});


}

export default accordeon  