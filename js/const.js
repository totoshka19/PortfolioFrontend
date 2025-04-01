// Переводы
export const translations = {
  en: {
    greeting: "Hi, I'm Anna Kapitanova",
    profession: "Frontend Developer | Passionate about building modern web applications",
    about: "About Me",
    "about-text": "I am a frontend developer with experience in building responsive and user-friendly web applications. I love working with modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Vue. My goal is to create seamless and intuitive experiences for users.",
    skills: "My Skills",
    education: "Education",
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
        description: "Calculator written in plain JavaScript.",
        image: "assets/projects/calculator.jpg",
        url: "https://totoshka19.github.io/Russflooring/"
      },
      "btb-service": {
        name: "BTB-service",
        description: "Corporate service platform.",
        image: "assets/projects/BTB.jpg",
        url: "https://btbs24.ru/"
      },
      "aismo": {
        name: "Aismo",
        description: "Project description goes here.",
        image: "assets/projects/aismo.jpg",
        url: "https://aismo.ru/"
      }
    },
    "view-project": "View Project",
    contact: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    "send-message": "Send Message"
  },
  ru: {
    greeting: "Привет, я Анна Капитанова",
    profession: "Frontend-разработчик | Создаю современные веб-приложения",
    about: "Обо мне",
    "about-text": "Я фронтенд разработчик с опытом создания адаптивных и удобных веб-приложений. Я люблю работать с современными технологиями, такими как HTML, CSS, JavaScript, и фреймворками, такими как React и Vue. Моя цель — создавать плавные и интуитивно понятные интерфейсы для пользователей.",
    skills: "Мои навыки",
    education: "Образование",
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
        description: "Корпоративная платформа.",
        image: "assets/projects/BTB.jpg",
        url: "https://btbs24.ru/"
      },
      "aismo": {
        name: "Аисмо",
        description: "Описание проекта.",
        image: "assets/projects/aismo.jpg",
        url: "https://aismo.ru/"
      }
    },
    "view-project": "Посмотреть проект",
    contact: "Свяжитесь со мной",
    name: "Имя",
    email: "Электронная почта",
    message: "Сообщение",
    "send-message": "Отправить Сообщение"
  }
};

// Элементы DOM
export const langToggle = document.getElementById("lang-toggle");
export const menuToggle = document.getElementById("menu-toggle");
export const mobileMenu = document.getElementById("mobile-menu");
export const burgerIcon = document.getElementById("burger-icon");
export const closeIcon = document.getElementById("close-icon");
export const menuLinks = document.querySelectorAll("#mobile-menu a");
export const contactForm = document.getElementById("contactForm");
