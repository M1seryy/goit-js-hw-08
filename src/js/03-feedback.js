import trottle from 'lodash.throttle';

const email = document.querySelector('.email');
const message = document.querySelector('.message');
const feedBackForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
let userData = {
  email: '',
  message: '',
};

email &&
  message.addEventListener('input', () => {
    userData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(userData));
  });

if (localStorage.getItem(storageKey) !== null) {
  let data = JSON.parse(localStorage.getItem(storageKey));
  email.value = data.email;
  message.value = data.message;
}

function formHandlerInput(event) {
  event.preventDefault();
  email.value = '';
  message.value = '';
  console.log(localStorage.getItem(storageKey));
  localStorage.clear();
}
feedBackForm.addEventListener('submit', trottle(formHandlerInput, 500));
