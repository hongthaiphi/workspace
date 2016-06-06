var async = require("async");
var abc = 'thaimeo;info';
var openFiles = abc.split(';');

var a = 1;
var b = 2;

function add(a, b, callback) {
    callback(a + b);
}

function teoteo(){
    console.log('hei');
}
function addAsync(a, b, callback) {
    setTimeout(function () {
        callback(a + b);
        callback(a,b);
        teoteo(a,b);
    }, 0);
}


console.log('before');
addAsync(1, 2, function (result, def) {
    console.log('Result: ' + result);
    console.log('def = ' + def);
});
console.log('after');


async.forEachOf(openFiles, function (file, key, callback) {

    // Perform operation on file here.
    console.log('Processing file ' + key + ' ' + file);

    if (file.length > 32) {
        console.log('This file name is too long');
        callback('File name too long');
    } else {
        // Do work to process file here
        console.log('File processed');
        callback();
    }
}, function (err) {
    // if any of the file processing produced an error, err would equal that error
    if (err) {
        // One of the iterations produced an error.
        // All processing will now stop.
        console.log('A file failed to process');
    } else {
        console.log('All files have been processed successfully');
    }
});

