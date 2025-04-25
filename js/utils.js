import { translations, mobileMenu, burgerIcon, closeIcon } from "./const.js";

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
    Object.values(translations[lang].project).forEach((project, i) => {
      // Создаем карточку проекта
      const projectCard = document.createElement("div");
      projectCard.className = "bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full";
      // Добавляем атрибуты AOS для анимации
      projectCard.setAttribute("data-aos", "zoom-in");
      projectCard.setAttribute("data-aos-duration", "800");
      projectCard.setAttribute("data-aos-delay", `${i * 100}`);

      // Создаем изображение
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.name;
      img.className = "w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105";
      // Оборачиваем изображение в ссылку на проект
      const imgLink = document.createElement("a");
      imgLink.href = project.url;
      imgLink.target = "_blank";
      imgLink.rel = "noopener noreferrer";
      imgLink.appendChild(img);
      projectCard.appendChild(imgLink);

      // Создаем контейнер для текстового содержимого
      const contentDiv = document.createElement("div");
      contentDiv.className = "p-4 flex flex-col justify-between flex-1";

      // Создаем заголовок
      const title = document.createElement("h3");
      title.className = "text-xl font-bold mb-2";
      title.textContent = project.name;
      contentDiv.appendChild(title);

      // Создаем описание
      const description = document.createElement("p");
      description.className = "text-gray-400";
      description.textContent = project.description;
      contentDiv.appendChild(description);

      // Создаем ссылку
      const link = document.createElement("a");
      link.href = project.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "text-blue-400 hover:underline mt-2 inline-block";
      link.textContent = translations[lang]["view-project"];
      contentDiv.appendChild(link);

      // Добавляем контейнер с текстом в карточку
      projectCard.appendChild(contentDiv);

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
