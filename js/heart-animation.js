// Функция плавного случайного перемещения сердца внутри контейнера
// Опции: heartSelector - селектор элемента сердца (container div), margin - минимальный отступ от краёв, interval - интервал между перемещениями в мс
export function startHeartAnimation({ heartSelector = '.heart-anim', margin = 10, interval = 5000 } = {}) {
  const heart = document.querySelector(heartSelector);
  if (!heart) return;
  const container = heart.parentElement;
  const img = container.querySelector('img');

  function animate() {
    const cw = container.offsetWidth;
    const ch = container.offsetHeight;
    const hw = heart.offsetWidth;
    const hh = heart.offsetHeight;
    const maxX = cw - hw - margin;
    const maxY = ch - hh - margin;
    const x = Math.random() * (maxX - margin) + margin;
    const y = Math.random() * (maxY - margin) + margin;
    heart.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    setTimeout(animate, interval);
  }

  function init() {
    const cw = container.offsetWidth;
    const ch = container.offsetHeight;
    const hw = heart.offsetWidth;
    const hh = heart.offsetHeight;
    const initX = (cw - hw) / 2;
    const initY = (ch - hh) / 2;
    heart.style.transform = `translate(${initX}px, ${initY}px) scale(1)`;
    heart.style.cursor = 'pointer';
    setTimeout(animate, interval);
  }

  if (img && !img.complete) {
    img.addEventListener('load', init);
  } else {
    init();
  }
} 