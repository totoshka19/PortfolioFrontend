import {
  langToggle,
  menuToggle,
  mobileMenu,
  burgerIcon,
  closeIcon,
  menuLinks,
  contactForm
} from "./const.js";
import { updateLanguage, closeMobileMenu } from "./utils.js";

// Переключение языка
let currentLang = "en"; // Текущий язык

langToggle.addEventListener("click", () => {
  if (currentLang === "en") {
    currentLang = "ru";
    langToggle.textContent = "RU";
  } else {
    currentLang = "en";
    langToggle.textContent = "EN";
  }
  updateLanguage(currentLang);
});

// Обработчик для кнопки бургер-меню
menuToggle.addEventListener("click", () => {
  // Переключаем видимость мобильного меню
  mobileMenu.classList.toggle("hidden");

  // Запрещаем или разрешаем прокрутку страницы
  if (mobileMenu.classList.contains("hidden")) {
    document.body.style.overflow = ""; // Разрешаем прокрутку
  } else {
    document.body.style.overflow = "hidden"; // Запрещаем прокрутку
  }

  // Переключаем видимость иконок
  burgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Обработчики для ссылок в мобильном меню
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu(); // Закрываем меню при нажатии на ссылку
  });
});

// Обработчик отправки формы
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Инициализация: Отображаем проекты на английском языке при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage("en"); // Устанавливаем английский язык по умолчанию
});
