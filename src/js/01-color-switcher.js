import Notiflix from 'notiflix';
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
  }

  refs.start.addEventListener('click', clickStart);
refs.stop.addEventListener('click', clickStop);
const DELEY = 1000;
let id = null;
refs.stop.setAttribute('disabled', 'true');

function clickStart() {
    refs.start.setAttribute('disabled', 'true');
    refs.stop.removeAttribute('disabled');
  
    id = setInterval(() => {
      const color = getRandomHexColor();
      refs.body.style.backgroundColor = color;
      Notiflix.Notify.success(color, {
        timeout: DELEY - 1000,
      });
    }, DELEY);
  }
  
  function clickStop() {
    clearInterval(id);
    refs.stop.setAttribute('disabled', 'true');
    refs.start.removeAttribute('disabled');
    // refs.body.style.backgroundColor = originalColor;
  }
  console.log('object');
  