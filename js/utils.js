import { translations, mobileMenu, burgerIcon, closeIcon, typewriterColors } from "./const.js";
import { createProjectCard } from "./project-cards.js";

// Функция для обновления текста на странице
export function updateLanguage(lang) {
  // Обновляем текстовые элементы
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Обновляем проекты
  const projectsContainer = document.querySelector("#projects .grid");
  if (projectsContainer) {
    projectsContainer.innerHTML = ""; // Очищаем контейнер

    // Используем Object.values для получения массива проектов из объекта
    Object.values(translations[lang].project).forEach(async (project, i) => {
      // Создаем карточку проекта с помощью импортированной функции
      const projectCard = await createProjectCard(project, lang, i);
      // Добавляем карточку в контейнер проектов
      projectsContainer.appendChild(projectCard);
    });
    // Обновляем анимации AOS после добавления динамических карточек
    AOS.refresh();
  }
}

// Функция для закрытия мобильного меню
export function closeMobileMenu() {
  // Скрываем мобильное меню, сдвигая его влево
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
  document.body.style.overflow = "";
  burgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
}

// Функция печатающего эффекта (typewriter) с поддержкой отмены предыдущих запусков
export function typewriterEffect(el, text, speed = 100, pause = 2000) {
  // Генерируем уникальный ID для этого запуска, используя глобальный счётчик
  const thisId = ++window.typewriterCounter;
  // Сохраняем ID в data-атрибуте элемента
  el.dataset.twmId = thisId;
  let index = 0;
  let isDeleting = false;
  function tick() {
    // Если в элементе сменился ID, прерываем старый цикл
    if (el.dataset.twmId !== String(thisId)) return;
    // При начале нового цикла печати меняем цвет текста
    if (!isDeleting && index === 0) {
      el.style.color = typewriterColors[window.currentTypewriterColorIndex];
      window.currentTypewriterColorIndex = (window.currentTypewriterColorIndex + 1) % typewriterColors.length;
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
