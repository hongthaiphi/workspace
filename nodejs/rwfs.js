var fs = require('fs');
fs.writeFile('data.txt', 'Hello world', function (err){
    if (err){throw err;}
    console.log('it is saved');
})