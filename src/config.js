const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_DATABASE = process.env.DB_DATABASE || 'dinoapidb';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
    PORT,
    DB_HOST,
    DB_USER,
    DB_DATABASE,
    DB_PORT,
    DB_PASSWORD
};