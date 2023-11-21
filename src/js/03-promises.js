
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const { delay, step, amount } = form.elements;
form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
