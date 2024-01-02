const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mypham', 
    connectionLimit: 10,
});

module.exports = db;