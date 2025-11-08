const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: 'Abhi@123', // your MySQL password
  database: 'userdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL connected successfully.');
});

module.exports = db;
