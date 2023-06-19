const ajaxForm = () => {
  const form = document.querySelector('.modal-callback form');
  const fioInput = document.querySelector('.modal-callback input[name="fio"]');
  const telInput = document.querySelector('.modal-callback input[name="tel"]');
  const submitButton = document.querySelector('.modal-callback input[type="submit"]');
  const messageElement = document.createElement('span');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fioValue = fioInput.value;
    const telValue = telInput.value;

    if (fioValue.trim() === '' || telValue.trim() === '') {
      showMessage('Пожалуйста, заполните все обязательные поля');
      return;
    }

    const phoneNumber = telValue.replace(/\D+/g, '');
    if (phoneNumber.length < 11) {
      showMessage('Номер должен содержать не менее 11 цифр');
      return;
    }

    const data = {
      fio: fioValue,
      tel: telValue
    };

    showMessage('Отправка данных...');

    sendData('https://jsonplaceholder.typicode.com/posts', data)
      .then(() => {
        showMessage('Данные успешно отправлены');
      })
      .catch((error) => {
        showMessage('Ошибка отправки данных: ' + error.message);
      });
  });

  const sendData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error(error);
    }
  };

  const showMessage = (message) => {
    messageElement.textContent = message;
    messageElement.style.fontSize = '10px';
    messageElement.style.marginLeft = '30px';
    submitButton.insertAdjacentElement('afterend', messageElement);
  };
};

export default ajaxForm;
