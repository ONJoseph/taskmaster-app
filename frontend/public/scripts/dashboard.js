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

  document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const status = e.target.status.value;

    const newTask = { title, description, status };

    try {
      const success = await addTask(newTask);
      if (success) {
        alert('Task added successfully!');
        // Refresh tasks after adding new one
        fetchTasks().then((tasks) => {
          renderTasks(tasks);
          initializePagination(tasks);
        });
        closeTaskModal();
      } else {
        alert('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task');
    }
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

function closeTaskModal() {
  document.getElementById('task-modal').classList.add('hidden');
}

export const loadMoreTasks = async (page) => {
  try {
    const response = await fetch(`/api/tasks?page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    const data = await response.json();
    return data.tasks; // Assuming the response contains a `tasks` array
  } catch (error) {
    throw new Error(error.message);
  }
};
