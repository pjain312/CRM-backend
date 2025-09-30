const mysql = require('mysql2');

const dbConfig = {
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT) ,
  queueLimit: parseInt(process.env.DB_QUEUE_LIMIT),
  dateStrings: true,
};

const pool = mysql.createPool(dbConfig);

module.exports.pool = pool