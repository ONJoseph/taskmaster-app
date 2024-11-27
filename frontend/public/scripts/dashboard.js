import { fetchTasks, addTask } from './tasks.js';
import { CookieUtil } from './cookieUtil.js';
import { renderTasks } from './renderTasks.js';
import { initializePagination } from './pagination.js';

export function initializeDashboard() {
  const token = CookieUtil.getCookie('token');
  if (!token) {
    alert('You must be logged in to access the dashboard.');
    window.location.href = '/login.html';
    return;
  }

  document.getElementById('search').addEventListener('input', async (e) => {
    const query = e.target.value;
    const tasks = await fetchTasks({ search: query });
    renderTasks(tasks);
  });

  document.getElementById('new-task').addEventListener('click', () => {
    openTaskModal();
  });

  // Fetch tasks on load
  fetchTasks().then((tasks) => {
    renderTasks(tasks);
    initializePagination(tasks); // Initialize pagination if needed
  });
}

function openTaskModal() {
  document.getElementById('task-modal').classList.remove('hidden');
}
