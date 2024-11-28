const { query } = require('../config/db');

const User = {
  async createUser(name, email, password) {
    const text = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, password];
    const res = await query(text, values);
    return res.rows[0];
  },

  async findUserByEmail(email) {
    const text = `SELECT * FROM users WHERE email = $1;`;
    const res = await query(text, [email]);
    return res.rows[0];
  },

  async findUserById(id) {
    const text = `SELECT * FROM users WHERE id = $1;`;
    const res = await query(text, [id]);
    return res.rows[0];
  },
};

module.exports = User;
