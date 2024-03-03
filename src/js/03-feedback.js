import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
  }

  const saveFormData = throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

  form.addEventListener('input', saveFormData);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';

    console.log('Submitted Data:');
    console.log({ email: emailInput.value, message: messageInput.value });
  });
});
