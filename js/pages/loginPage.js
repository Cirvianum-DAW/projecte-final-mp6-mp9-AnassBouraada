import { login } from '../services/auth.js';

export function renderLoginPage() {
  console.log('renderLoginPage function called');
  const form = document.querySelector('#login-form');

  if (!form) {
    console.error('Login form not found');
    return;
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    try {
      console.log('Form submitted');
      const user = await login(username, password);

      if (user.isAdmin) {
        window.location.href = '/admin.html';
      } else {
        window.location.href = '/index.html';
      }
    } catch (error) {
      errorMessage.style.display = 'block';
      console.error(error);
    }
  });
}
