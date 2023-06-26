const mysql = require('mysql2/promise');
const config = require('../config');

const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    port: config.DB_PORT,
    database: config.DB_DATABASE,
    password: config.DB_PASSWORD,
});

module.exports = pool;