function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  const refs = {
    start: document.querySelector('batton[data-start]');
    stop: document.querySelector('batton[data-stop]');
    body: document.querySelector('body');
  }

  refs.start.addEventListener('click', clickStart);
refs.stop.addEventListener('click', clickStop);
const DELEY = 1000;
let id = null;
refs.stop.setAttribute('disabled', 'true');
