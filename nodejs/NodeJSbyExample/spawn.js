var spawn = require('child_process').spawn;
var command = spawn('git', ['push', 'origin', 'master']);

command.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

command.stderr.on('data', function (data) {
    console.log('sdterr: ' + data);
});

command.on('close', function (code) {
    console.log('child process exited with code ' + code)
})