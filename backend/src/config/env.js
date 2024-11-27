require('dotenv').config(); // Loads variables from .env file

module.exports = {
    db: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    },
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET,
};
