var io = require('socket.io');
var socket = io.listen(6666);
socket.sockets.on('connection', function (socket) {
    socket.on('message', function (expr) {
        console.log('Received expression from client ', expr);
        try {
            socket.send(eval(expr));
        } catch (err) {
            socket.emit("error", err.message);
        }
    });
    socket.on('disconnect', function () {
        console.log('Disconnected');
    });
});