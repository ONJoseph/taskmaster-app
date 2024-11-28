import { registerUser, loginUser } from './auth.js';
import { sendMessage } from './contact.js';
import { initializeDashboard, loadMoreTasks } from './dashboard.js';

const loadingIndicator = document.getElementById('loading-indicator');
const errorMessage = document.getElementById('error-message');

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('register.html')) {
    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      showLoading();
      try {
        await registerUser(name, email, password);
      } catch (error) {
        showError(error.message);
      } finally {
        hideLoading();
      }
    });
  } else if (window.location.pathname.includes('login.html')) {
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      showLoading();
      try {
        await loginUser(email, password);
      } catch (error) {
        showError(error.message);
      } finally {
        hideLoading();
      }
    });
  } else if (window.location.pathname.includes('dashboard.html')) {
    initializeDashboard();
    implementLazyLoading(); // Enable lazy loading for tasks table on dashboard
  } else if (window.location.pathname.includes('contact.html')) {
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;
      showLoading();
      try {
        await sendMessage(name, email, message);
      } catch (error) {
        showError(error.message);
      } finally {
        hideLoading();
      }
    });
  }
});

// Show loading indicator
function showLoading() {
  loadingIndicator.classList.remove('hidden');
}

// Hide loading indicator
function hideLoading() {
  loadingIndicator.classList.add('hidden');
}

// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
}

// Hide error message
function hideError() {
  errorMessage.classList.add('hidden');
}

// Lazy loading function for dashboard tasks
function implementLazyLoading() {
  const taskContainer = document.getElementById('task-container');
  let currentPage = 1;
  let isLoading = false;

  const loadTasks = async () => {
    if (isLoading) return;
    isLoading = true;
    showLoading();
    
    try {
      const tasks = await loadMoreTasks(currentPage);
      taskContainer.innerHTML += tasks.map(task => `
        <div class="task">
          <h3>${task.title}</h3>
          <p>Status: ${task.status}</p>
          <p>Assigned To: ${task.assignedTo}</p>
        </div>
      `).join('');
      currentPage++;
    } catch (error) {
      showError('Failed to load tasks.');
    } finally {
      hideLoading();
      isLoading = false;
    }
  };

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadTasks();
    }
  });

  loadTasks(); // Load tasks when page loads
}
