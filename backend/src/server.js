const express = require('express');
const { query } = require('./config/db'); // Make sure query is properly imported from db.js
const app = require('./app');
const PORT = process.env.PORT || 5000;

(async () => {
  try {
    // Test the database connection with a simple query
    await query('SELECT 1'); // Ensure the query function is asynchronous and returns a Promise
    console.log('Database connection established successfully!');

    // Start the server if the database connection is successful
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit process with failure code if DB connection fails
  }
})();
