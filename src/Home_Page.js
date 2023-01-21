// example of a simple form validation
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
}
