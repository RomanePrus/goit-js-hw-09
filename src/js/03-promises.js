import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  fomrEl: document.querySelector('.form'),
  inputDelayEl: document.querySelector('input[name="delay"]'),
  inputStepEl: document.querySelector('input[name="step"]'),
  inputAmountEl: document.querySelector('input[name="amount"]'),
};

refs.fomrEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();
  if (!e.target.tagName === 'BUTTON') return;

  let firstDelay = Number(refs.inputDelayEl.value);
  let delayStep = Number(refs.inputStepEl.value);
  let amount = Number(refs.inputAmountEl.value);

  for (let i = 1; i <= amount; i += 1, i > 0) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    firstDelay += delayStep;
  }
  e.currentTarget.reset();
}
