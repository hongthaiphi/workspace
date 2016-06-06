var http = require('http');

http.request({ hostname: 'sachluoc.com' }, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}).end();
