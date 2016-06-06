//exec.js
var exec = require('child_process');
exec.exec('ls -l', function(error, stdout, stderr){
    console.log('sdtout: '+ stdout);
    console.log('sdterr: ' + stderr);
    if (error !== null){
        console.log('exec error: ' + error);
    }
})