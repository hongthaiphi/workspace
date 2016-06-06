var mysql = require("mysql");

var con = mysql.createConnection({
	host: "cp.cam9.tv",
	user: "vp9",
	password: "vp9@vnc",
	database: "cp"
});

con.connect(function(err){
  if (err){
	console.log('Error connecting to db');
	return;
  }
  console.log('Connection established');
});

var currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/,'');
console.log(currentTime);

con.query('UPDATE servers set lastupdatetime=? where server_format=?',
[currentTime, '04115572837'], function (err, result){
	if (err) throw err;
	console.log('Changed ' + result.changedRows + ' rows');
}
);


con.query('Select * from servers', function(err,rows){
  if (err) throw err;
  console.log('Data received from DB:\n');
});

con.end(function(err){
});
