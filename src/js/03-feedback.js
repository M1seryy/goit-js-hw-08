import trottle from 'lodash.throttle';

const email = document.querySelector('.email');
const message = document.querySelector('.message');
const feedBackForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

email.addEventListener('input', () => {
  const userData = {
    email: email.value,
    message: message.value,
  };
  localStorage.removeItem(storageKey);
  localStorage.setItem(storageKey, JSON.stringify(userData));
});

message.addEventListener('input', () => {
  const userData = {
    email: email.value,
    message: message.value,
  };

  localStorage.removeItem(storageKey);
  localStorage.setItem(storageKey, JSON.stringify(userData));
});

if (localStorage.getItem(storageKey) !== null) {
  let dataUser = JSON.parse(localStorage.getItem(storageKey));

  email.value = dataUser.email;
  message.value = dataUser.message;
}

function formHandlerInput(event) {
  event.preventDefault();
  email.value = '';
  message.value = '';
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  localStorage.removeItem(storageKey);
}
feedBackForm.addEventListener('submit', trottle(formHandlerInput, 500));
