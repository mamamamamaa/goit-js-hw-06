function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  input: document.querySelector("#controls input"),
  boxForBoxes: document.querySelector("#boxes"),
};
let variable;

function createBoxes(amount) {
  const arr = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.classList = "box";
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    arr.push(box);
  }
  refs.boxForBoxes.append(...arr);
}

function destroyBoxes() {
  for (let i = 0; i < variable; i += 1) {
    document.querySelector(".box").remove();
  }
}

refs.input.addEventListener("input", (event) => {
  variable = Number(event.currentTarget.value);
});

refs.createBtn.addEventListener("click", () => {
  if (refs.boxForBoxes.querySelector(".box") === null) {
    createBoxes(variable);
  } else {
    alert("Очистите предыдущие контейнеры");
  }
});

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  refs.input.value = "";
});
