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

// Массив цветов для печатающего эффекта
const typewriterColors = ["#F8C15C", "#60A5FA", "#9CA3AF"];
let currentTypewriterColorIndex = 0;

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
    // При начале нового цикла печати меняем цвет текста
    if (!isDeleting && index === 0) {
      el.style.color = typewriterColors[currentTypewriterColorIndex];
      currentTypewriterColorIndex = (currentTypewriterColorIndex + 1) % typewriterColors.length;
    }
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
  // Запускаем typewriter для текста профессии при загрузке
  const professionEl = document.querySelector('[data-lang="profession"]');
  const professionText = professionEl.textContent;
  // Фиксируем высоту контейнера, чтобы он не схлопывался при удалении текста
  professionEl.style.minHeight = `${professionEl.getBoundingClientRect().height}px`;
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

// Управление фоновой музыкой по кнопке
const musicToggle = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
let isMusicPlaying = false;
if (musicToggle && bgMusic) {
  musicToggle.addEventListener("click", () => {
    if (isMusicPlaying) {
      bgMusic.pause();
      musicToggle.textContent = "🔈";
    } else {
      bgMusic.play();
      musicToggle.textContent = "🔇";
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
