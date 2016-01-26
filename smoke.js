var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user_name',
  password : 'password',
  database : 'tweets'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error connecting database");
}
});


exports.app = app.get("/",function(req,res){
connection.query('SELECT * from tweet LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err)
    res.status(200).send(rows);
  else
    console.log('Error while performing Query.');
  });
});

exports.app.listen(3000, function() {
  console.log('Express listening on port ', this.address().port);
});
