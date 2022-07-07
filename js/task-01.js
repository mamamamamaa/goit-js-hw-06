const getTitle = document.querySelectorAll(".item");
console.log("Numb of categories: ", getTitle.length);

getTitle.forEach((title) => {
  console.log("Category: ", title.firstElementChild.textContent);
  console.log(
    "Elements: ",
    title.querySelectorAll(`.${title.className} ul li`).length
  );
});
