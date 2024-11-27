export function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasks.map(
      (task) => `<tr><td>${task.id}</td><td>${task.title}</td><td>${task.description}</td><td>${task.status}</td><td><button onclick="editTask(${task.id})">Edit</button><button onclick="deleteTask(${task.id})">Delete</button></td></tr>`
    ).join('');
  }
  