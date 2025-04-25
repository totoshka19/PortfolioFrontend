import {
  langToggle,
  menuToggle,
  mobileMenu,
  burgerIcon,
  closeIcon,
  menuLinks
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

// Инициализация: Отображаем проекты на английском языке при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage("en"); // Устанавливаем английский язык по умолчанию
});

// Кнопка "Наверх"
const backToTopButton = document.getElementById("back-to-top");

// Показываем/скрываем кнопку при прокрутке
window.addEventListener("scroll", () => {
  if (window.pageYOffset <= 300) {
    backToTopButton.classList.add("hidden");
  } else {
    backToTopButton.classList.remove("hidden");
  }
});

// Плавный скролл вверх
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Инициализация AOS
AOS.init({
  once: true,
  duration: 800
});
