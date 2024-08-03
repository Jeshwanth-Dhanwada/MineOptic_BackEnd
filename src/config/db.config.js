// 'use strict';
// const mysql = require('mysql2');
// //mysql db connections

// const dbConn = mysql.createConnection({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : 'Mine@123',
//   database : 'Mineoptic',
//   protocol : '3306'
// });
// setInterval(function () {
//   dbConn.query('select * from tipperhistory');
// }, 5000);
// dbConn.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });

// module.exports = dbConn;
// // for database connection 
// //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

'use strict';
const mssql = require('mssql');
const Protocol = require('mysql/lib/protocol/Protocol');

const dbConn = new mssql.ConnectionPool({
  user: 'Nodejs1',
  password: 'Nodejs@1234',
  server: 'DELL-PC',
  database: 'Mineoptic',
  Protocol:1433,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
});

// setInterval(function () {
//   dbConn.query('SELECT * FROM tipperhistory', (err, results) => {
//     if (err) throw err;
//     console.log(results);
//   });
// }, 5000);

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;