const { Pool } = require('pg');
require('dotenv').config(); 

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,  // Ensure DB_PASSWORD is correctly passed as a string
  database: process.env.DB_NAME,
});

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
};

module.exports = { query };
