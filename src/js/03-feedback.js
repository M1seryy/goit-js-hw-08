import trottle from 'lodash.throttle';

const email = document.querySelector('.email');
const message = document.querySelector('.message');
const feedBackForm = document.querySelector('.feedback-form');
const storageKeyEmail = 'feedback-form-state-email';
const storageKeyMessage = 'feedback-form-state-message';

message.addEventListener('input', () => {
  localStorage.setItem(storageKeyMessage, JSON.stringify(message.value));
});
email.addEventListener('input', () => {
  localStorage.setItem(storageKeyEmail, JSON.stringify(email.value));
});

if (
  localStorage.getItem(storageKeyEmail) &&
  localStorage.getItem(storageKeyMessage) !== null
) {
  let dataEmail = JSON.parse(localStorage.getItem(storageKeyEmail));
  let dataMessage = JSON.parse(localStorage.getItem(storageKeyMessage));
  email.value = dataEmail;
  message.value = dataMessage;
}

function formHandlerInput(event) {
  event.preventDefault();
  email.value = '';
  message.value = '';
  console.log({
    email: JSON.parse(localStorage.getItem(storageKeyEmail)),
    message: JSON.parse(localStorage.getItem(storageKeyMessage)),
  });
  localStorage.removeItem(storageKeyEmail);
  localStorage.removeItem(storageKeyMessage);
}
feedBackForm.addEventListener('submit', trottle(formHandlerInput, 500));
