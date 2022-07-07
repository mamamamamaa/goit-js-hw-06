const refs = {
  decBtn: document.querySelector('button[data-action="decrement"]'),
  incBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.incBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
