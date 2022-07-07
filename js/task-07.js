const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", (el) => {
  refs.textEl.style.fontSize = `${el.currentTarget.value}px`;
});
