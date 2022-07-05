const getTitle = document.querySelectorAll(".item");
console.log("Numb of categories: ", getTitle.length);

getTitle[0].firstChild;
console.log(
  " getTitle[0].firstChild",
  getTitle[0].firstElementChild.textContent
);

getTitle.forEach((title) => {
  console.log("Category: ", title.firstElementChild.textContent);
  console.log(
    "Elements: ",
    title.querySelectorAll(`.${title.className} ul li`).length
  );
});
