import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timerElements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
let countdownInterval;

// Notiflix.Notify.init({
//   width: '300px',
//   position: 'center-top',
//   closeButton: false,
// });

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      inputDate.disabled = true;
    }
  },
});

btnStart.addEventListener('click', onClickStart);

function onClickStart() {
  const selectedDate = new Date(inputDate.value);
  const currentDate = new Date();
  const timeDifference = selectedDate - currentDate;

  clearInterval(countdownInterval); // Очищаємо попередній інтервал перед встановленням нового

  countdownInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    timerElements.days.textContent = addLeadingZero(days);
    timerElements.hours.textContent = addLeadingZero(hours);
    timerElements.minutes.textContent = addLeadingZero(minutes);
    timerElements.seconds.textContent = addLeadingZero(seconds);

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      Notiflix.Notify.success('Countdown has finished!');
      btnStart.disabled = true;
    }

    timeDifference -= 1000;
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// const timerElements = {
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// const inputDate = document.querySelector('#datetime-picker');
// const btnStart = document.querySelector('[data-start]');
// let countdownInterval;

// Notiflix.Notify.init({
//   width: '300px',
//   position: 'center-top',
//   closeButton: false,
// });

// flatpickr('#datetime-picker', {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] <= Date.now()) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       btnStart.disabled = true;
//     } else {
//       btnStart.disabled = false;
//       inputDate.disabled = true;
//     }
//   },
// });

// btnStart.addEventListener('click', onClickStart);

// function onClickStart() {
//   const selectedDate = new Date(inputDate.value);
//   const currentDate = new Date();
//   const timeDifference = selectedDate - currentDate;

//   // Перевірка, чи таймер вже працює
//   if (!countdownInterval) {
//     countdownInterval = setInterval(() => {
//       const { days, hours, minutes, seconds } = convertMs(timeDifference);

//       timerElements.days.textContent = addLeadingZero(days);
//       timerElements.hours.textContent = addLeadingZero(hours);
//       timerElements.minutes.textContent = addLeadingZero(minutes);
//       timerElements.seconds.textContent = addLeadingZero(seconds);

//       if (timeDifference <= 0) {
//         clearInterval(countdownInterval);
//         Notiflix.Notify.success('Countdown has finished!');
//         btnStart.disabled = true;
//       }

//       timeDifference -= 1000;
//     }, 1000);
//   }
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }