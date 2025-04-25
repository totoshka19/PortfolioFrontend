// Функция плавного случайного перемещения сердца внутри контейнера
// Опции: heartSelector - селектор элемента сердца (container div), margin - минимальный отступ от краёв, interval - интервал между перемещениями в мс
export function startHeartAnimation({
                                      heartSelector = '.heart-anim',
                                      margin = 10,
                                      interval = 5000,
                                      offsetX = 0,
                                      offsetY = 0
                                    } = {}) {
  const heart = document.querySelector(heartSelector);
  if (!heart) return;

  const container = heart.parentElement;
  const img = container.querySelector('img');

  // helper for parsing margin: supports number, 'px', and '%' relative to total dimension
  function parseOffset(val, total) {
    if (typeof val === 'string' && val.trim().endsWith('%')) {
      return (parseFloat(val) / 100) * total;
    } else if (typeof val === 'string' && val.trim().endsWith('px')) {
      return parseFloat(val);
    }
    return Number(val);
  }

  // Функция для анимации перемещения сердца
  function animate(heartElement = heart) {
    const cw = container.offsetWidth;
    const ch = container.offsetHeight;
    const hw = heartElement.offsetWidth;
    const hh = heartElement.offsetHeight;
    let x, y;
    if (img) {
      const imgRect = img.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const imgOffsetX = imgRect.left - containerRect.left;
      const imgOffsetY = imgRect.top - containerRect.top;

      const iw = img.offsetWidth;
      const ih = img.offsetHeight;
      const mX = parseOffset(margin, iw);
      const mY = parseOffset(margin, ih);
      const maxX = iw - hw - mX;
      const maxY = ih - hh - mY;
      x = Math.random() * (maxX - mX) + mX + imgOffsetX;
      y = Math.random() * (maxY - mY) + mY + imgOffsetY;
    } else {
      const cw = container.offsetWidth;
      const ch = container.offsetHeight;
      const hw = heartElement.offsetWidth;
      const hh = heartElement.offsetHeight;
      const mX = parseOffset(margin, cw);
      const mY = parseOffset(margin, ch);
      const maxX = cw - hw - mX;
      const maxY = ch - hh - mY;
      x = Math.random() * (maxX - mX) + mX;
      y = Math.random() * (maxY - mY) + mY;
    }
    heartElement.style.left = `${x}px`;
    heartElement.style.top = `${y}px`;
    heartElement.style.transform = 'scale(1)';
    setTimeout(() => animate(heartElement), interval);
  }

  // Функция для создания нового сердца и запуска его анимации
  function spawnHeart(x, y) {
    const newHeart = heart.cloneNode(true);
    container.appendChild(newHeart);
    newHeart.style.position = 'absolute';
    newHeart.style.transition = 'none';
    newHeart.style.left = `${x}px`;
    newHeart.style.top = `${y}px`;
    newHeart.style.transform = 'scale(1)';
    newHeart.style.cursor = 'pointer';
    newHeart.offsetHeight;
    newHeart.style.transition = `left ${interval}ms ease, top ${interval}ms ease`;
    setTimeout(() => animate(newHeart), interval);
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

    // Смещаем initX/initY с учётом margin (число, 'px' или '%')
    const mXInit = parseOffset(margin, cw);
    const mYInit = parseOffset(margin, ch);
    initX -= mXInit;
    initY -= mYInit;
    // Применяем пользовательский offsetX и offsetY (число, 'px' или '%')
    const oX = parseOffset(offsetX, cw);
    const oY = parseOffset(offsetY, ch);
    initX += oX;
    initY += oY;

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
    setTimeout(() => animate(heart), interval);

    // Обработчик клика: спавним новое сердце в точке клика
    container.addEventListener('click', (e) => {
      const clickedHeart = e.target.closest('.heart-anim');
      if (!clickedHeart) return;
      const containerRect = container.getBoundingClientRect();
      const hw = clickedHeart.offsetWidth;
      const hh = clickedHeart.offsetHeight;
      const x = e.clientX - containerRect.left - hw / 2;
      const y = e.clientY - containerRect.top - hh / 2;
      spawnHeart(x, y);
    });
  }

  // Ждём загрузки картинки, если она есть
  if (img && !img.complete) {
    img.addEventListener('load', init);
  } else {
    init();
  }
}
