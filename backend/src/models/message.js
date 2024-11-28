const { query } = require('../config/db');

const Message = {
  async createMessage({ name, email, message }) {
    const text = `
      INSERT INTO messages (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, message];
    const res = await query(text, values);
    return res.rows[0];
  },
};

module.exports = Message;
