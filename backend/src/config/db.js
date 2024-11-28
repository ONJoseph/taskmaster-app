const { Pool } = require('pg');
require('dotenv').config(); 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Necessary for connecting to Render-hosted databases
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
