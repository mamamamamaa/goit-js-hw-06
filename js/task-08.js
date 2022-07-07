const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    event.currentTarget.email.value === "" ||
    event.currentTarget.password.value === ""
  ) {
    alert("У вас остались незаполненные поля!!!!");
  } else {
    const {
      elements: { email, password },
    } = event.currentTarget;

    console.log(`email: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
  }
});
