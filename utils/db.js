// setup database connection
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "Sanks",
    password: "qwerty",
    database: "mydb"
});

module.exports = db;