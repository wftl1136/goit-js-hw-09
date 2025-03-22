const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

loadLastInfo();

form.addEventListener('submit', submitOnForm);
form.addEventListener('input', saveUserInfo);

let formData = {
  email: '',
  message: '',
};

function submitOnForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    alert('Please, fill all fields');
    return;
  } else {
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}

function saveUserInfo(event) {
  formData.email = event.currentTarget.email.value;
  formData.message = event.currentTarget.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadLastInfo() {
  const lastInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (lastInfo === null) {
    return;
  }

  form.elements.email.value = lastInfo.email || '';
  form.elements.message.value = lastInfo.message || '';
}