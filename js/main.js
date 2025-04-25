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

// Счётчик для уникальных идентификаторов эффекта typewriter
let typewriterCounter = 0;
// Функция печатающего эффекта (typewriter) с поддержкой отмены предыдущих запусков
function typewriterEffect(el, text, speed = 100, pause = 2000) {
  // Генерируем уникальный ID для этого запуска
  const thisId = ++typewriterCounter;
  // Сохраняем ID в data-атрибуте элемента
  el.dataset.twmId = thisId;
  let index = 0;
  let isDeleting = false;
  function tick() {
    // Если в элементе сменился ID, прерываем старый цикл
    if (el.dataset.twmId !== String(thisId)) return;
    // Обновляем отображаемый текст
    el.textContent = text.substring(0, index);
    let delay = speed;
    if (!isDeleting) {
      if (index < text.length) {
        index++;
      } else {
        isDeleting = true;
        delay = pause;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        // Начинаем новый цикл печати
        isDeleting = false;
        delay = pause;
      }
    }
    setTimeout(tick, delay);
  }
  // Запускаем цикл
  tick();
}

langToggle.addEventListener("click", () => {
  if (currentLang === "en") {
    currentLang = "ru";
    langToggle.textContent = "RU";
  } else {
    currentLang = "en";
    langToggle.textContent = "EN";
  }
  updateLanguage(currentLang);
  // Перезапускаем typewriter для текста профессии после смены языка
  const professionEl = document.querySelector('[data-lang="profession"]');
  const professionText = professionEl.textContent;
  professionEl.textContent = "";
  typewriterEffect(professionEl, professionText, 100, 2000);
});

// Обработчик для кнопки бургер-меню
menuToggle.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.contains("-translate-x-full");
  if (isHidden) {
    // Открываем мобильное меню с анимацией
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
    burgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    // Закрываем мобильное меню через функцию со сдвигом
    closeMobileMenu();
  }
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
  // Запускаем typewriter для текста профессии при загрузке
  const professionEl = document.querySelector('[data-lang="profession"]');
  const professionText = professionEl.textContent;
  professionEl.textContent = "";
  typewriterEffect(professionEl, professionText, 100, 2000);
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

// Перезагрузка страницы при клике на логотип
const logo = document.getElementById("logo");
if (logo) {
  logo.addEventListener("click", () => {
    window.location.reload();
  });
}
