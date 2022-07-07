const refs = {
  input: document.querySelector("#name-input"),
  textSpan: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (element) => {
  if (element.currentTarget.value !== "") {
    refs.textSpan.textContent = element.currentTarget.value;
  } else {
    refs.textSpan.textContent = "Anonymus";
  }
});
