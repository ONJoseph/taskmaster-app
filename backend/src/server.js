const express = require('express');
const { query } = require('./config/db');

const app = require('./app');
const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await query('SELECT 1'); // Test the database connection
    console.log('Database connection established.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();
