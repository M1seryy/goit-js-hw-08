import trottle from "lodash.throttle";

const email = document.querySelector(".email");
const message = document.querySelector(".message");
const feedBackForm = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

if (localStorage.getItem(storageKey) !== null) {
  let data = JSON.parse(localStorage.getItem(storageKey));
  email.value = data.email;
  message.value = data.message;
}

function formHandlerInput(event) {
  event.preventDefault();
  let userData = {
    email: email.value,
    message: message.value,
  };
  email.value = "";
  message.value = "";
  localStorage.clear();
  localStorage.setItem(storageKey, JSON.stringify(userData));
}
feedBackForm.addEventListener("submit", trottle(formHandlerInput, 500));
