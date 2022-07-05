const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const arrOfItems = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.className = "item";
  ingredientsEl.textContent = ingredient;
  return ingredientsEl;
});

listRef.append(...arrOfItems);
