const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let unique = false;
  return (seconds) => {
    unique = !unique;
    let rest = seconds;
    const intervalID = setInterval(() => {
      rest--;
      let hours = Math.floor(rest / 3600);
      hours = hours < 10 ? "0" + hours : hours;
      let mins = Math.floor((rest - hours * 3600) / 60);
      mins = mins < 10 ? "0" + mins : mins;
      let secs = rest - hours * 3600 - mins * 60;
      secs = secs < 10 ? "0" + secs : secs;
      timerEl.innerText = hours + ":" + mins + ":" + secs;
      if (rest === 0 || !unique) {
        unique = !unique;
        clearInterval(intervalID);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value
    .split("")
    .filter((x) => +x >= 0)
    .join("");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
