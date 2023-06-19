/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Modules/accordeon.js":
/*!******************************!*\
  !*** ./Modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n\r\n  // Получаем все элементы аккордеона\r\nconst accordeonElements = document.querySelectorAll('.accordeon .element');\r\n\r\n// Добавляем обработчик события для каждого элемента\r\naccordeonElements.forEach(element => {\r\n  const title = element.querySelector('.title');\r\n  const content = element.querySelector('.element-content');\r\n\r\n  // При клике на заголовок элемента\r\n  title.addEventListener('click', () => {\r\n    // Проверяем, содержит ли элемент класс \"active\"\r\n    const isActive = element.classList.contains('active');\r\n\r\n    // Закрываем все элементы аккордеона\r\n    accordeonElements.forEach(el => {\r\n      el.classList.remove('active');\r\n    });\r\n\r\n    // Если элемент не был активным, открываем его\r\n    if (!isActive) {\r\n      element.classList.add('active');\r\n    }\r\n  });\r\n});\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);  \n\n//# sourceURL=webpack:///./Modules/accordeon.js?");

/***/ }),

/***/ "./Modules/ajaxForm.js":
/*!*****************************!*\
  !*** ./Modules/ajaxForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ajaxForm = () => {\r\n  const form = document.querySelector('.modal-callback form');\r\n  const fioInput = document.querySelector('.modal-callback input[name=\"fio\"]');\r\n  const telInput = document.querySelector('.modal-callback input[name=\"tel\"]');\r\n  const submitButton = document.querySelector('.modal-callback input[type=\"submit\"]');\r\n  const messageElement = document.createElement('span');\r\n\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n\r\n    // Получаем значения полей формы\r\n    const fioValue = fioInput.value;\r\n    const telValue = telInput.value;\r\n\r\n    // Проверяем, что оба поля заполнены\r\n    if (fioValue.trim() === '' || telValue.trim() === '') {\r\n      showMessage('Пожалуйста, заполните все обязательные поля');\r\n      return;\r\n    }\r\n\r\n    // Проверяем количество цифр в номере телефона\r\n    const phoneNumber = telValue.replace(/\\D+/g, '');\r\n    if (phoneNumber.length < 11) {\r\n      showMessage('Номер должен содержать не менее 11 цифр');\r\n      return;\r\n    }\r\n\r\n    // Создаем объект с данными для отправки\r\n    const data = {\r\n      fio: fioValue,\r\n      tel: telValue\r\n    };\r\n\r\n    // Оповещение пользователя о состоянии отправки\r\n    showMessage('Отправка данных...');\r\n\r\n    // Отправляем данные с использованием AJAX\r\n    sendData('https://jsonplaceholder.typicode.com/posts', data)\r\n      .then(() => {\r\n        showMessage('Данные успешно отправлены');\r\n      })\r\n      .catch((error) => {\r\n        showMessage('Ошибка отправки данных: ' + error.message);\r\n      });\r\n  });\r\n\r\n  const sendData = async (url, data) => {\r\n    try {\r\n      const response = await fetch(url, {\r\n        method: 'POST',\r\n        body: JSON.stringify(data),\r\n        headers: {\r\n          'Content-Type': 'application/json; charset=UTF-8',\r\n        },\r\n      });\r\n      const responseData = await response.json();\r\n      return responseData;\r\n    } catch (error) {\r\n      throw new Error(error);\r\n    }\r\n  };\r\n\r\n  const showMessage = (message) => {\r\n    messageElement.textContent = message;\r\n    messageElement.style.fontSize = '10px';\r\n    messageElement.style.marginLeft = '30px';\r\n    submitButton.insertAdjacentElement('afterend', messageElement);\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxForm);\r\n\n\n//# sourceURL=webpack:///./Modules/ajaxForm.js?");

/***/ }),

/***/ "./Modules/carouselArrow.js":
/*!**********************************!*\
  !*** ./Modules/carouselArrow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carouselArrow = () => {\r\n\r\n// Получаем ссылки на стрелки и элементы карусели\r\nconst arrowLeft = document.querySelector('.arrow-left');\r\nconst arrowRight = document.querySelector('.arrow-right');\r\nconst carousel = document.querySelector('.services-carousel');\r\nconst slides = carousel.querySelectorAll('.col-sm-6');\r\n\r\n// Определяем количество видимых слайдов\r\nconst visibleSlides = 3;\r\nlet currentIndex = 0;\r\n\r\n// Обработчик клика по стрелке влево\r\narrowLeft.addEventListener('click', () => {\r\n  currentIndex = (currentIndex - 1 + slides.length) % slides.length;\r\n  updateSlidesVisibility();\r\n});\r\n\r\n// Обработчик клика по стрелке вправо\r\narrowRight.addEventListener('click', () => {\r\n  currentIndex = (currentIndex + 1) % slides.length;\r\n  updateSlidesVisibility();\r\n});\r\n\r\n// Показать первые видимые слайды\r\nupdateSlidesVisibility();\r\n\r\n// Обновление видимости слайдов\r\nfunction updateSlidesVisibility() {\r\n  for (let i = 0; i < slides.length; i++) {\r\n    if (isSlideVisible(i)) {\r\n      slides[i].style.display = 'block';\r\n    } else {\r\n      slides[i].style.display = 'none';\r\n    }\r\n  }\r\n}\r\n\r\n// Проверка, является ли слайд видимым\r\nfunction isSlideVisible(slideIndex) {\r\n  const endVisibleIndex = (currentIndex + visibleSlides - 1) % slides.length;\r\n  if (currentIndex <= endVisibleIndex) {\r\n    return slideIndex >= currentIndex && slideIndex <= endVisibleIndex;\r\n  } else {\r\n    return slideIndex >= currentIndex || slideIndex <= endVisibleIndex;\r\n  }\r\n}\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselArrow); \n\n//# sourceURL=webpack:///./Modules/carouselArrow.js?");

/***/ }),

/***/ "./Modules/effectsHref.js":
/*!********************************!*\
  !*** ./Modules/effectsHref.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst effectsHref = () => {\r\n  \r\nconst pricesLink = document.querySelector('a[href=\"#services\"]');\r\nconst faqLink = document.querySelector('a[href=\"#faq\"]');\r\nconst contactsLink = document.querySelector('a[href=\"#contacts\"]');\r\n\r\nconst pricesSection = document.getElementById('services');\r\nconst faqSection = document.getElementById('faq');\r\nconst contactsSection = document.getElementById('contacts');\r\n\r\npricesLink.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  smoothScroll(pricesSection);\r\n});\r\n\r\nfaqLink.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  smoothScroll(faqSection);\r\n});\r\n\r\ncontactsLink.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  smoothScroll(contactsSection);\r\n});\r\n\r\nfunction smoothScroll(targetElement) {\r\n  const targetPosition = targetElement.offsetTop;\r\n  const startPosition = window.pageYOffset;\r\n  const distance = targetPosition - startPosition;\r\n  const duration = 1000; // Продолжительность анимации в миллисекундах\r\n  const easing = function(t) {\r\n    return t * t * t; // Измените эту функцию, чтобы настроить эффект плавности\r\n  };\r\n  let startTime = null;\r\n\r\n  function animation(currentTime) {\r\n    if (startTime === null) startTime = currentTime;\r\n    const timeElapsed = currentTime - startTime;\r\n    const run = ease(timeElapsed / duration);\r\n    const currentPosition = run * distance + startPosition;\r\n    window.scrollTo(0, currentPosition);\r\n    if (timeElapsed < duration) requestAnimationFrame(animation);\r\n  }\r\n\r\n  function ease(t) {\r\n    return easing(t);\r\n  }\r\n\r\n  requestAnimationFrame(animation);\r\n}\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (effectsHref);\n\n//# sourceURL=webpack:///./Modules/effectsHref.js?");

/***/ }),

/***/ "./Modules/modal.js":
/*!**************************!*\
  !*** ./Modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modalPopup = document.querySelector(\".modal-callback\");\r\n  const buttons = document.querySelectorAll(\".hidden-xs\");\r\n  const closeBtn = document.querySelector(\".modal-close\");\r\n  const overlay = document.querySelector(\".modal-overlay\");\r\n\r\n  const isMobile = window.innerWidth < 768;\r\n\r\n  const showModal = () => {\r\n    modalPopup.style.display = \"block\";\r\n    overlay.style.display = \"block\";\r\n    if (!isMobile) {\r\n      animateModal(0, 1);\r\n    }\r\n  };\r\n\r\n  const hideModal = () => {\r\n    if (!isMobile) {\r\n      animateModal(1, 0, () => {\r\n        modalPopup.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n      });\r\n    } else {\r\n      modalPopup.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n    }\r\n  };\r\n\r\n  const animateModal = (start, end, callback) => {\r\n    const duration = 500;\r\n    const startTime = performance.now();\r\n\r\n    const animate = (currentTime) => {\r\n      const elapsedTime = currentTime - startTime;\r\n      const progress = Math.min(elapsedTime / duration, 1);\r\n      const opacity = start + (end - start) * progress;\r\n\r\n      modalPopup.style.opacity = opacity;\r\n\r\n      if (progress < 1) {\r\n        requestAnimationFrame(animate);\r\n      } else {\r\n        if (typeof callback === \"function\") {\r\n          callback();\r\n        }\r\n      }\r\n    };\r\n\r\n    requestAnimationFrame(animate);\r\n  };\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener(\"click\", showModal);\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", hideModal);\r\n  overlay.addEventListener(\"click\", hideModal);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./Modules/modal.js?");

/***/ }),

/***/ "./Modules/scrollUp.js":
/*!*****************************!*\
  !*** ./Modules/scrollUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollUp = () => {\r\n  // Получаем ссылку на элемент стрелки \"Вверх\"\r\n  const upArrow = document.querySelector('.up');\r\n\r\n  // Функция для отображения или скрытия стрелки в зависимости от положения страницы\r\n  function toggleUpArrow() {\r\n    if (window.scrollY > 600) {\r\n      upArrow.style.display = 'block';\r\n    } else {\r\n      upArrow.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  // Функция для плавной прокрутки страницы к началу\r\n  function scrollToTop() {\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: 'smooth'\r\n    });\r\n  }\r\n\r\n  // Скрываем стрелку при загрузке страницы\r\n  upArrow.style.display = 'none';\r\n\r\n  // Добавляем обработчик события при прокрутке страницы\r\n  window.addEventListener('scroll', toggleUpArrow);\r\n\r\n  // Добавляем обработчик события при клике на стрелку \"Вверх\"\r\n  upArrow.addEventListener('click', scrollToTop);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\r\n\n\n//# sourceURL=webpack:///./Modules/scrollUp.js?");

/***/ }),

/***/ "./Modules/sliderTop.js":
/*!******************************!*\
  !*** ./Modules/sliderTop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderTop = () => {\r\n  const slider = document.querySelector('.top-slider');\r\n  const items = slider.querySelectorAll('.item');\r\n  const dotsContainer = document.createElement('ul');\r\n  dotsContainer.classList.add('slick-dots');\r\n  slider.appendChild(dotsContainer);\r\n\r\n  // Создаем точки переключения для каждого слайда\r\n  items.forEach((item, index) => {\r\n    const dot = document.createElement('li');\r\n    dot.addEventListener('click', () => {\r\n      setActiveSlide(index);\r\n    });\r\n    dotsContainer.appendChild(dot);\r\n  });\r\n\r\n  let activeIndex = 0;\r\n  const dots = dotsContainer.querySelectorAll('li');\r\n  let interval;\r\n\r\n  function setActiveSlide(index) {\r\n    items.forEach((item, i) => {\r\n      if (i === index) {\r\n        item.classList.add('active');\r\n        dots[i].classList.add('slick-active');\r\n      } else {\r\n        item.classList.remove('active');\r\n        dots[i].classList.remove('slick-active');\r\n      }\r\n    });\r\n\r\n    activeIndex = index;\r\n  }\r\n\r\n  function nextSlide() {\r\n    let nextIndex = activeIndex + 1;\r\n    if (nextIndex >= items.length) {\r\n      nextIndex = 0;\r\n    }\r\n    setActiveSlide(nextIndex);\r\n  }\r\n\r\n  function startInterval() {\r\n    interval = setInterval(nextSlide, 5000);\r\n  }\r\n\r\n  function stopInterval() {\r\n    clearInterval(interval);\r\n  }\r\n\r\n  slider.addEventListener('mouseover', () => {\r\n    stopInterval();\r\n  });\r\n\r\n  slider.addEventListener('mouseout', () => {\r\n    startInterval();\r\n  });\r\n\r\n  startInterval();\r\n  setActiveSlide(activeIndex);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderTop);\r\n\n\n//# sourceURL=webpack:///./Modules/sliderTop.js?");

/***/ }),

/***/ "./Modules/validForm.js":
/*!******************************!*\
  !*** ./Modules/validForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validForm = () => {\r\n  const messageInput = document.querySelector('.mess');\r\n\r\n  messageInput.addEventListener('input', validateInput);\r\n\r\n  function validateInput(event) {\r\n    const input = event.target;\r\n    const inputValue = input.value;\r\n\r\n    const regex = /^[а-яА-ЯёЁ\\s-]*$/u;\r\n\r\n    if (!regex.test(inputValue)) {\r\n      input.value = inputValue.replace(/[^а-яА-ЯёЁ\\s-]/g, '');\r\n    }\r\n\r\n    if (inputValue.length < 3) {\r\n      input.setCustomValidity('Имя должно содержать минимум 3 символа');\r\n    } else {\r\n      input.setCustomValidity('');\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validForm);\r\n\n\n//# sourceURL=webpack:///./Modules/validForm.js?");

/***/ }),

/***/ "./Modules/validPhone.js":
/*!*******************************!*\
  !*** ./Modules/validPhone.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = () => {\r\n  /* Создаем префикс +7, даже если вводят 8 или 9 */\r\n  const prefixNumber = (str) => {\r\n    /* если вводят семерку, добавляем ей скобку */\r\n    if (str === \"7\") {\r\n      return \"7 (\";\r\n    }\r\n    /* если вводят восьмерку, ставим вместо нее +7 ( */\r\n    if (str === \"8\") {\r\n      return \"+7 (\";\r\n    }\r\n    /* если пишут девятку, заменяем на +7 (9  */\r\n    if (str === \"9\") {\r\n      return \"7 (9\";\r\n    }\r\n    /* в других случаях просто 7 (  */\r\n    return \"7 (\";\r\n  }; /* профикс в любом раскладе будет +7 () */\r\n\r\n  /* Ловим события ввода в любом поле */\r\n  document.addEventListener(\"input\", (e) => {\r\n    /* Проверяем, что это поле имеет класс phone-mask */\r\n    if (e.target.classList.contains(\"phone-mask\")) {\r\n      /* поле с телефоном помещаем в переменную input */\r\n      const input = e.target;\r\n      /* вставляем плюс в начале номера */\r\n      const value = input.value.replace(/\\D+/g, \"\");\r\n      /* длинна номера 11 символов */\r\n      const numberLength = 11;\r\n\r\n      /* Создаем переменную, куда будем записывать номер */\r\n      let result;\r\n      /* Если пользователь ввел 8... */\r\n      if (input.value.includes(\"+8\") || input.value[0] === \"8\") {\r\n        /* Стираем восьмерку */\r\n        result = \"\";\r\n      } else {\r\n        /* Оставляем плюсик в поле */\r\n        result = \"+\";\r\n      }\r\n\r\n      /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */\r\n      for (let i = 0; i < value.length && i < numberLength; i++) {\r\n        switch (i) {\r\n          case 0:\r\n            /* в самом начале ставим префикс +7 ( */\r\n            result += prefixNumber(value[i]);\r\n            continue;\r\n          case 4:\r\n            /* добавляем после \"+7 (\" круглую скобку \")\" */\r\n            result += \") \";\r\n            break;\r\n          case 7:\r\n            /* дефис после 7 символа */\r\n            result += \"-\";\r\n            break;\r\n          case 9:\r\n            /* еще дефис  */\r\n            result += \"-\";\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n        /* на каждом шаге цикла добавляем новую цифру к номеру */\r\n        result += value[i];\r\n      }\r\n      /* итог: номер в формате +7 (999) 123-45-67 */\r\n      input.value = result;\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./Modules/validPhone.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/modal */ \"./Modules/modal.js\");\n/* harmony import */ var _Modules_effectsHref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/effectsHref */ \"./Modules/effectsHref.js\");\n/* harmony import */ var _Modules_sliderTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/sliderTop */ \"./Modules/sliderTop.js\");\n/* harmony import */ var _Modules_carouselArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/carouselArrow */ \"./Modules/carouselArrow.js\");\n/* harmony import */ var _Modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/accordeon */ \"./Modules/accordeon.js\");\n/* harmony import */ var _Modules_scrollUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/scrollUp */ \"./Modules/scrollUp.js\");\n/* harmony import */ var _Modules_validForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/validForm */ \"./Modules/validForm.js\");\n/* harmony import */ var _Modules_validPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/validPhone */ \"./Modules/validPhone.js\");\n/* harmony import */ var _Modules_ajaxForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/ajaxForm */ \"./Modules/ajaxForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_Modules_ajaxForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"]) ()\r\n;(0,_Modules_validPhone__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_Modules_validForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_Modules_scrollUp__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_Modules_accordeon__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_Modules_carouselArrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_Modules_sliderTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_Modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_Modules_effectsHref__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;