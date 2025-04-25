// Функция плавного случайного перемещения сердца внутри контейнера
// Опции: heartSelector - селектор элемента сердца (container div), margin - минимальный отступ от краёв, interval - интервал между перемещениями в мс
export function startHeartAnimation({
                                      heartSelector = '.heart-anim',
                                      margin = 10,
                                      interval = 5000
                                    } = {}) {
  const heart = document.querySelector(heartSelector);
  if (!heart) return;

  const container = heart.parentElement;
  const img = container.querySelector('img');

  // Функция для анимации перемещения сердца
  function animate() {
    const cw = container.offsetWidth;
    const ch = container.offsetHeight;
    const hw = heart.offsetWidth;
    const hh = heart.offsetHeight;
    let x, y;
    if (img) {
      const imgRect = img.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const imgOffsetX = imgRect.left - containerRect.left;
      const imgOffsetY = imgRect.top - containerRect.top;
      const iw = img.offsetWidth;
      const ih = img.offsetHeight;
      const maxX = iw - hw - margin;
      const maxY = ih - hh - margin;
      x = Math.random() * (maxX - margin) + margin + imgOffsetX;
      y = Math.random() * (maxY - margin) + margin + imgOffsetY;
    } else {
      const maxX = cw - hw - margin;
      const maxY = ch - hh - margin;
      x = Math.random() * (maxX - margin) + margin;
      y = Math.random() * (maxY - margin) + margin;
    }
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.transform = 'scale(1)';
    setTimeout(animate, interval);
  }

  // Функция инициализации начальной позиции сердца
  function init() {
    const cw = container.offsetWidth;
    const ch = container.offsetHeight;
    const hw = heart.offsetWidth;
    const hh = heart.offsetHeight;

    // Вычисляем начальную позицию сердца (по центру контейнера)
    let initX = (cw - hw) / 2;
    let initY = (ch - hh) / 2;

    // Если есть картинка, корректируем позицию относительно её координат
    if (img) {
      const imgRect = img.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const imgOffsetX = imgRect.left - containerRect.left;
      const imgOffsetY = imgRect.top - containerRect.top;

      // Корректируем позицию сердца относительно картинки
      initX += imgOffsetX;
      initY += imgOffsetY;
    }

    // Устанавливаем начальную позицию сердца
    heart.style.position = 'absolute';
    heart.style.transition = 'none';
    heart.style.left = `${initX}px`;
    heart.style.top = `${initY}px`;
    heart.style.transform = 'scale(1)';
    heart.style.cursor = 'pointer';
    heart.offsetHeight;
    heart.style.transition = `left ${interval}ms ease, top ${interval}ms ease`;

    // Запускаем анимацию
    setTimeout(animate, interval);
  }

  // Ждём загрузки картинки, если она есть
  if (img && !img.complete) {
    img.addEventListener('load', init);
  } else {
    init();
  }
}
