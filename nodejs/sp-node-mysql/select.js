var express = require("express");
var mysql = require('mysql');
var app = express();

var pool = mysql.createPool({
    connectionLimit: 2, //important
    host: 'cp.cam9.tv',
    user: 'vp9',
    password: 'vp9@vnc',
    database: 'cp',
    debug: false
});

function updateServer(req, res, connection) {
    var server_format = req.param('server_format');
    console.log('server_format: ' + server_format);

    var currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(currentTime);
    connection.query('UPDATE servers set lastupdatetime=? where server_format=?',
        [currentTime, server_format], function (err, result) {
            connection.release();
            if (err) {
                var json = JSON.stringify({
                    error: 1,
                    message: err
                });
                res.json(json);
                throw err;
            }
            console.log('Changed ' + result.changedRows + ' rows');
            if (result.changedRows > 0) {
                var json = JSON.stringify({
                    error: 0,
                    message: 'Cập nhật thành công ' + server_format
                });
            } else {
                var json = JSON.stringify({
                    'error': '1',
                    'message': 'Không tồn tại server: ' + server_format
                });
            }
            console.log(json);
            res.json(json);
        }
    );
}

function handle_database(req, res) {

    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        console.log('connected as id ' + connection.threadId);

        updateServer(req, res, connection);

        // connection.query("select * from servers", function (err, rows) {
        //     connection.release();
        //     if (!err) {
        //         res.json(rows);
        //     }
        // });

        connection.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
}

app.get("/lastupdatetime", function (req, res) {
    -
        handle_database(req, res);
});

app.listen(3000);
