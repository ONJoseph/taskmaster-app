import { CookieUtil } from './cookieUtil.js';

export async function fetchTasks(queryParams = {}) {
  const url = new URL('/api/tasks', window.location.origin);
  Object.keys(queryParams).forEach((key) => url.searchParams.append(key, queryParams[key]));

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${CookieUtil.getCookie('token')}` },
    });
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

export async function addTask(task) {
  try {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('token')}`,
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to add task');
    return true;
  } catch (error) {
    console.error('Error adding task:', error);
    return false;
  }
}
