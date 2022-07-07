function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorBtn: document.querySelector(".change-color"),
  textEl: document.querySelector(".color"),
};

refs.colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.textEl.textContent = document.body.style.backgroundColor;
});
