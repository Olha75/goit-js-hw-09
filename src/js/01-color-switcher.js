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
const DELAY = 1000;
let id = null;
refs.stop.setAttribute('disabled', 'true');

function clickStart() {
    refs.start.setAttribute('disabled', 'true');
    refs.stop.removeAttribute('disabled');
  
    id = setInterval(() => {
      const color = getRandomHexColor();
      refs.body.style.backgroundColor = color;
      Notiflix.Notify.success(color, {
        timeout: DELAY - 1000,
      });
    }, DELAY);
  }
  
  function clickStop() {
    clearInterval(id);
    refs.stop.setAttribute('disabled', 'true');
    refs.start.removeAttribute('disabled');
    
  }
  const buttonsContainer = document.getElementById('buttons-container');

        function centerButtons() {
          const windowHeight = window.innerHeight;
          const buttonsContainerHeight = buttonsContainer.offsetHeight;

          const marginTop = (windowHeight - buttonsContainerHeight) / 2;

          buttonsContainer.style.marginTop = `${marginTop}px`;
        }
        centerButtons();
        window.addEventListener('resize', centerButtons);
  
  