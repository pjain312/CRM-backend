const mysql = require('mysql2');

const dbConfig = {
  host: 'crm-sql.cls4qkmyqyqw.ap-south-1.rds.amazonaws.com',
  user: 'root',
  password: 'crm-rds123',
  database: 'crm-db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
};

const pool = mysql.createPool(dbConfig);

module.exports.pool = pool