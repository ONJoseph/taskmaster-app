require('dotenv').config();

console.log(process.env.DB_HOST);  // Ensure this prints the correct value

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: console.log,  // Enable logging
});


module.exports = sequelize;
