function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timer = null;

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timer = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
});
