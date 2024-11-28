const fs = require('fs');
const path = require('path');
const { query } = require('../config/db'); // Import the raw query function from db.js

const models = {};

// Dynamically load all model files
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    models[path.basename(file, '.js')] = model; // Use the filename (without .js) as the model name
  });

module.exports = {
  models,
  query, // Expose the query function for direct database interaction
};
