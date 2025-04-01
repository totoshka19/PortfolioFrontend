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
    Object.values(translations[lang].project).forEach((project) => {
      // Создаем карточку проекта
      const projectCard = document.createElement("div");
      projectCard.className = "bg-gray-800 rounded-lg overflow-hidden shadow-lg";

      // Создаем изображение
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.name;
      img.className = "w-full h-48 object-cover object-top";
      projectCard.appendChild(img);

      // Создаем контейнер для текстового содержимого
      const contentDiv = document.createElement("div");
      contentDiv.className = "p-4";

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
      link.className = "text-blue-400 hover:underline mt-2 block";
      link.textContent = translations[lang]["view-project"];
      contentDiv.appendChild(link);

      // Добавляем контейнер с текстом в карточку
      projectCard.appendChild(contentDiv);

      // Добавляем карточку в контейнер проектов
      projectsContainer.appendChild(projectCard);
    });
  }
}

// Функция для закрытия мобильного меню
export function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "";
  burgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
}
