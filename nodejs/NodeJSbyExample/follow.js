var http = require('http');
var fs = require('fs');
http.createServer(function (req, res){
    var content = '';
    var type = '';
    if (req.url === '/'){
        content = fs.readFileSync('./page.html');
        type = 'text/html';
    }else if(req.url === '/style.css'){
        content = fs.readFileSync('./styles.css');
        type = 'text/css';
    }
    res.writeHead(200, {'Content-Type': type});
    res.end(content + '\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');