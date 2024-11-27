const { Task } = require('../models');

// Fetch tasks with pagination, search, and filter
exports.getPaginatedTasks = async (req, res) => {
  try {
    const { page = 1, search = '', filter = '', limit = 10 } = req.query;

    // Use `getTasks` method for fetching tasks
    const tasks = await Task.getTasks(search, filter, parseInt(page), parseInt(limit));
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, status, priority, deadline } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const task = await Task.create({ title, description, status, priority, deadline, userId: req.user.id });
    res.status(201).json({ message: 'Task created successfully!', task });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority, deadline } = req.body;

    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.update({ title, description, status, priority, deadline });
    res.status(200).json({ message: 'Task updated successfully!', task });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully!' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
