// app.js
import { registerUser, loginUser } from './auth.js';
import { sendMessage } from './contact.js';
import { initializeDashboard } from './dashboard.js';

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('register.html')) {
    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      await registerUser(name, email, password);
    });
  } else if (window.location.pathname.includes('login.html')) {
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      await loginUser(email, password);
    });
  } else if (window.location.pathname.includes('dashboard.html')) {
    initializeDashboard();
  } else if (window.location.pathname.includes('contact.html')) {
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;
      await sendMessage(name, email, message);
    });
  }
});
