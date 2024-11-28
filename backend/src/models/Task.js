const { query } = require('../config/db');

const Task = {
  async createTask({ userId, title, description, status, priority, deadline }) {
    const text = `
      INSERT INTO tasks (user_id, title, description, status, priority, deadline)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [userId, title, description, status, priority, deadline];
    const res = await query(text, values);
    return res.rows[0];
  },

  async getTasks({ search = '', filter = '', page = 1, limit = 10 }) {
    const offset = (page - 1) * limit;
    const text = `
      SELECT *
      FROM tasks
      WHERE title ILIKE $1 AND (status = $2 OR $2 = '')
      LIMIT $3 OFFSET $4;
    `;
    const values = [`%${search}%`, filter, limit, offset];
    const res = await query(text, values);
    return res.rows;
  },
};

module.exports = Task;
