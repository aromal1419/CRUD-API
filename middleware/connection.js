var mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()

let DB_HOST = '';
let DB_USER = '';
let DB_PASSWORD = '';
let DB_PORT = '';

if(process.env.NODE_ENV == 'local') {
  DB_HOST = process.env.DB_HOST;
  DB_USER = process.env.DB_USER;
  DB_PASSWORD = process.env.DB_PASSWORD;
  DB_PORT = process.env.DB_PORT;
} else if(process.env.NODE_ENV == 'development') {
  DB_HOST = process.env.DB_HOST_TEST;
  DB_USER = process.env.DB_USER_TEST;
  DB_PASSWORD = process.env.DB_PASSWORD_TEST;
  DB_PORT = process.env.DB_PORT_TEST;
} else if(process.env.NODE_ENV == 'production') {
  DB_HOST = process.env.DB_HOST_PROD;
  DB_USER = process.env.DB_USER_PROD;
  DB_PASSWORD = process.env.DB_PASSWORD_PROD;
  DB_PORT = process.env.DB_PORT_PROD;
}

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: process.env.DB_NAME,
  port: DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  rowsAsArray: false,
  timezone: 'Z'
});

module.exports = pool;