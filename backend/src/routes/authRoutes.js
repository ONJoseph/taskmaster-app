const express = require('express');
const { register, login } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

// Auth routes
router.post('/register', register); // User registration
router.post('/login', login);       // User login

// Protected dashboard route
router.get('/dashboard', authenticate, async (req, res) => {
  try {
    const user = req.user; // Get authenticated user
    const tasks = await user.getTasks(); // Assuming `getTasks` association is set up
    res.status(200).json({ user, tasks });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching dashboard data' });
  }
});

module.exports = router;
