var http = require('http');
var dispatcher = require('httpdispatcher');
const PORT = 8788;

var mysql = require("mysql");

var pool = mysql.createPool({
	connectionLimit : 100,
	host: "cp.cam9.tv",
	user: "vp9",
	password: "vp9@vnc",
	database: "cp"
});

function handle_database(req,res) {
   
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }  

        console.log('connected as id ' + connection.threadId);
       
        connection.query("select * from servers",function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }          
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;    
        });
  });
}

var currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
console.log(currentTime);

function handleRequest(request, response) {
	//	response.end('It works!! Path Hit: ' + request.url);
	
	dispatcher.dispatch(request, response);
	
}

dispatcher.onGet("/page1", function (req, res) {
	handle_database(req,res);
	res.end('Page one');
});

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
	console.log("Server listening on: http://localhost:%s", PORT);
	
});
