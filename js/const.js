// Переводы
export const translations = {
  en: {
    greeting: "Hi, I'm Anna Kapitanova",
    profession: "HTML layout designer | Frontend Developer | Passionate about building modern web applications",
    about: "About Me",
    "about-text": `I am a frontend developer with\u00A0experience in\u00A0creating responsive websites and\u00A0user-friendly web\u00A0applications.\n` +
      `I work with\u00A0modern HTML, CSS, JavaScript technologies and\u00A0the React framework.\n\n` +
      `In my work, I actively use tools such as Redux for\u00A0managing the global state of\u00A0the application, SCSS for\u00A0writing structured and\u00A0scalable styles, and\u00A0Tailwind CSS for\u00A0fast and\u00A0flexible layout.\n\n` +
      `To create projects, I prefer to\u00A0use Vite — a\u00A0modern build tool that ensures high development speed and\u00A0ease of\u00A0customization.\n\n` +
      `My goal is to\u00A0create smooth and\u00A0intuitive interfaces for\u00A0users.`,
    skills: "My Skills",
    "Expert": "Expert",
    "Advanced": "Advanced",
    "Intermediate": "Intermediate",
    education: "Education",
    "edu-html-academy": "HTML Academy",
    "edu-html-academy-desc": "JavaScript developer",
    "edu-codecademy": "Codecademy",
    "edu-codecademy-desc": "Frontend Engineer",
    "edu-training-center": `Training center "Professional"`,
    "edu-training-center-desc": "Frontend developer",
    "edu-synergy": "Synergy University",
    "edu-synergy-desc": "Digital designer. Basics of working in Figma",
    projects: "My Projects",
    project: {
      "e-shop": {
        name: "E-shop",
        description: "Online store project on React and TypeScript.",
        image: "assets/projects/e-shop.jpg",
        url: "https://totoshka19.github.io/e-shop/"
      },
      "flooring-calculator": {
        name: "Flooring Cost Calculator",
        description: "Calculator written in native JavaScript.",
        image: "assets/projects/calculator.jpg",
        url: "https://totoshka19.github.io/Russflooring/"
      },
      "btb-service": {
        name: "BTB-service",
        description: "Multi-page website in HTML and SCSS with adaptability for mobile devices.",
        image: "assets/projects/BTB.jpg",
        url: "https://btbs24.ru/"
      },
      "aismo": {
        name: "Aismo",
        description: "Multi-page website in HTML and SCSS with adaptability for mobile devices.",
        image: "assets/projects/aismo.jpg",
        url: "https://aismo.ru/"
      },
      "leadconveer": {
        name: "Lead Conveer",
        description: "Adaptive landing page on HTML, CSS. Swiper.js is used for the slider. Video insertion using iframe. Accordion is made on JavaScript.",
        image: "assets/projects/leadconveer.jpg",
        url: "https://totoshka19.github.io/leadconveer/"
      }
    },
    "view-project": "View Project",
    contact: "Contact Me",
  },
  ru: {
    greeting: "Привет, я Анна Капитанова",
    profession: "HTML-верстальщик | Frontend-разработчик | Создаю современные веб-приложения",
    about: "Обо мне",
    "about-text": `Я фронтенд-разработчик с\u00A0опытом создания адаптивных сайтов и\u00A0удобных веб-приложений.\n` +
      `Я работаю с\u00A0современными технологиями HTML, CSS, JavaScript и\u00A0фреймворком React.\n\n` +
      `В своей работе я активно использую такие инструменты, как Redux для\u00A0управления глобальным состоянием приложения, SCSS для\u00A0написания структурированных и\u00A0масштабируемых стилей, а\u00A0также Tailwind CSS для\u00A0быстрой и\u00A0гибкой вёрстки.\n\n` +
      `Для создания проектов я предпочитаю использовать Vite — современный инструмент сборки, который обеспечивает высокую скорость разработки и\u00A0удобство настройки.\n\n` +
      `Моя цель — создавать плавные и\u00A0интуитивно понятные интерфейсы для\u00A0пользователей.`,
    skills: "Мои навыки",
    "Expert": "Эксперт",
    "Advanced": "Опытный",
    "Intermediate": "Средний уровень",
    education: "Образование",
    "edu-html-academy": "HTML Академия",
    "edu-html-academy-desc": "Разработчик JavaScript",
    "edu-codecademy": "Codecademy",
    "edu-codecademy-desc": "Frontend-инженер",
    "edu-training-center": `Учебный центр "Профессионал"`,
    "edu-training-center-desc": "Frontend-разработчик",
    "edu-synergy": "Университет Синергия",
    "edu-synergy-desc": "Дизайнер интерфейсов. Основы работы в Figma",
    projects: "Мои проекты",
    project: {
      "e-shop": {
        name: "Интернет-магазин",
        description: "Проект на React и TypeScript.",
        image: "assets/projects/e-shop.jpg",
        url: "https://totoshka19.github.io/e-shop/"
      },
      "flooring-calculator": {
        name: "Калькулятор стоимости напольного покрытия",
        description: "Калькулятор написан на чистом JavaScript.",
        image: "assets/projects/calculator.jpg",
        url: "https://totoshka19.github.io/Russflooring/"
      },
      "btb-service": {
        name: "BTB-сервис",
        description: "Многостраничный сайт на HTML и SCSS с адаптивом под мобильные устройства.",
        image: "assets/projects/BTB.jpg",
        url: "https://btbs24.ru/"
      },
      "aismo": {
        name: "Аисмо",
        description: "Многостраничный сайт на HTML и SCSS с адаптивом под мобильные устройства.",
        image: "assets/projects/aismo.jpg",
        url: "https://aismo.ru/"
      },
      "leadconveer": {
        name: "Lead Conveer",
        description: "Адаптивный лендинг на HTML, CSS. Для слайдера используется Swiper.js. Вставка видео с помощью iframe. Аккордеон сделан на JavaScript.",
        image: "assets/projects/leadconveer.jpg",
        url: "https://totoshka19.github.io/leadconveer/"
      }
    },
    "view-project": "Посмотреть проект",
    contact: "Свяжитесь со мной",
  }
};

// Элементы DOM
export const langToggle = document.getElementById("lang-toggle");
export const menuToggle = document.getElementById("menu-toggle");
export const mobileMenu = document.getElementById("mobile-menu");
export const burgerIcon = document.getElementById("burger-icon");
export const closeIcon = document.getElementById("close-icon");
export const menuLinks = document.querySelectorAll("#mobile-menu a");
