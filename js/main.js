import {
  langToggle,
  menuToggle,
  mobileMenu,
  burgerIcon,
  closeIcon,
  menuLinks,
  musicToggle,
  bgMusic,
  logo,
  backToTopButton, professionEl
} from "./const.js";
import { updateLanguage, closeMobileMenu, typewriterEffect } from "./utils.js";
import { startHeartAnimation } from "./heart-animation.js";

// Переключение языка
let currentLang = "en"; // Текущий язык

// Глобальные счётчики для функции typewriterEffect
let typewriterCounter = 0;
let currentTypewriterColorIndex = 0;
window.typewriterCounter = typewriterCounter;
window.currentTypewriterColorIndex = currentTypewriterColorIndex;

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
  const professionText = professionEl.textContent;
  // Фиксируем высоту контейнера, чтобы он не схлопывался при удалении текста
  professionEl.style.minHeight = `${professionEl.getBoundingClientRect().height}px`;
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
  const professionEl = document.querySelector('[data-lang="profession"]');
  const professionText = professionEl.textContent;
  professionEl.style.minHeight = `${professionEl.getBoundingClientRect().height}px`;
  professionEl.textContent = "";
  typewriterEffect(professionEl, professionText, 100, 2000);
  // Запускаем внешнюю функцию анимации сердца
  startHeartAnimation({ heartSelector: '.heart-anim', margin: 10, interval: 5000 });
});

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
if (logo) {
  logo.addEventListener("click", () => {
    window.location.reload();
  });
}

// Управление фоновой музыкой по кнопке
let isMusicPlaying = false;
if (musicToggle && bgMusic) {
  musicToggle.addEventListener("click", () => {
    if (isMusicPlaying) {
      bgMusic.pause();
      musicToggle.textContent = "🔇";
    } else {
      bgMusic.play();
      musicToggle.textContent = "🔈";
    }
    isMusicPlaying = !isMusicPlaying;
  });
}

// Синхронизируем ширину кнопки музыки с кнопкой переключения языка
if (musicToggle && langToggle) {
  const adjustMusicBtnWidth = () => {
    const width = langToggle.offsetWidth;
    musicToggle.style.width = `${width}px`;
  };
  // Устанавливаем начальную ширину
  adjustMusicBtnWidth();
  // Обновляем при изменении размера окна
  window.addEventListener("resize", adjustMusicBtnWidth);
}
