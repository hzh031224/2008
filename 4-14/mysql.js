var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456abc',
  database : '2008a'
});
 
connection.connect();
 
connection.query('select user_id,user_name from p_users', function (error, results, fields) {
console.log(results);
});
 
connection.end();