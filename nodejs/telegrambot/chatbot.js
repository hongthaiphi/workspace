var express = require("express");
var app = express();
var tg = require('telegram-node-bot')('196991041:AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U');

function handle_telegram(req, res) {
    var msg = req.param('msg');
    var token = req.param('token');
    var toChatId = req.param('sendTo');
    var date = new Date();
    var currentTime = new Date().toString();
    if (toChatId !== 'undefined' && toChatId) {
    } else {
        console.log('thieu tham so');
        res.end('thieu tham so');
        return;
    }

    var send_token = 'AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U UkcLqjmBJOY5 6x5CvEh6fGTY Km2RUT4reQuq 31hA5rgmuUhz';
    send_token += ' sd45KRzzylyE BJtZIDrpcljn cEJVoRQ2vV4R 77JF41TCwFd0 oIQsNh8ocDlc rjFqhgMr1QH5';
    var arr = send_token.split(" ");
    var haveToken = false;
    for (var i in arr)
        if (token == arr[i]) {
            currentTime = new Date().toString();
            console.log(currentTime + ' :: Send to Telegram: ' + msg);
            // tg.sendMessage(-128035466, "I am Robot. Chao VP9 Team, bay gio la " + currentTime);
            tg.sendMessage(toChatId, msg);
            console.log(req.connection.remoteAddress);
            haveToken = true;
            res.end('ok');
            break;
        }

    if (!haveToken) {
        res.end('wrong token');
    }
}

app.get("/toTelegram", function (req, res) {
    -
        handle_telegram(req, res);
});


app.listen(3001);