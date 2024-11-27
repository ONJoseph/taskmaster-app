const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

// Define task routes
router.get('/', taskController.getPaginatedTasks); // Fetch tasks
router.post('/', taskController.createTask);       // Create a task
router.put('/:id', taskController.updateTask);     // Update a task
router.delete('/:id', taskController.deleteTask);  // Delete a task

module.exports = router;
