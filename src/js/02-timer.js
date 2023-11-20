import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

  const timerElements = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  };
  const datetimePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDate = new Date();
  
      if (selectedDate <= currentDate) {
        Notiflix.Notify.warning("Будь ласка, оберіть дату у майбутньому");
        document.querySelector('[data-start]').disabled = true;
      } else {
        document.querySelector('[data-start]').removeAttribute('disabled');
      }
    },
  });
  
let countdownInterval;
document.querySelector('[data-start]').addEventListener('click', clickStart);
function clickStart() {
  const selectedDate = datetimePicker.selectedDates[0];
  const currentDate = new Date();
  const timeDifference = selectedDate - currentDate;

  countdownInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    timerElements.days.textContent = addLeadingZero(days);
    timerElements.hours.textContent = addLeadingZero(hours);
    timerElements.minutes.textContent = addLeadingZero(minutes);
    timerElements.seconds.textContent = addLeadingZero(seconds);

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      Notiflix.Notify.success("Відлік завершено!");
      document.querySelector('[data-start]').disabled = true;
    }

    timeDifference -= 1000;
  }, 1000);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }