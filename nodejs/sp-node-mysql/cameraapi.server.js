var express = require("express");
var mysql = require('mysql');
var randomstring = require("randomstring");
var app = express();

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'cp.cam9.tv',
    user: 'vp9',
    password: 'vp9@vnc',
    database: 'cp',
    debug: false
});

var getRanNumber = function (len) {
    var output = randomstring.generate({
        length: len,
        charset: 'numeric'
    });
    return output;
};

function updateServer(req, res, connection) {
    var server_format = req.param('device_id');
    console.log('device_id: ' + server_format);

    var currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(currentTime);

    if (server_format !== 'undefined' && server_format) {

        connection.query('UPDATE servers set lastupdatetime=? where device_id=?',
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

    } else {
        connection.release();
        var json = JSON.stringify({
            'error': '5',
            'message': 'Tham so khong dung'
        });
        console.log('lastupdatetime: ' + 'Tham so khong dung');
        res.json(json);
    }
}

function handle_database(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        console.log('connected as id ' + connection.threadId);
        var action = req.param('action');
        //put lastupdatetime to servers    
        updateServer(req, res, connection);
        connection.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
}



function insertCamera(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    var device_id_camera = req.query.device_id_camera;
    var IPcamera = req.query.IPcamera;
    console.log('Start insertCamera ' + device_id_server + ':' + device_id_camera + ':' + IPcamera);
    if (device_id_server !== 'undefined' && device_id_server && device_id_camera !== 'undefined' && device_id_camera && IPcamera !== 'undefined' && IPcamera) {

        connection.query('select * from servers where device_id=?',
            [device_id_server], function (err, result) {
                var json;
                if (err) {
                    connection.release();
                    json = JSON.stringify({
                        error: 1,
                        message: err
                    });
                    res.json(json);
                }
                console.log(result.length);
                if (result.length == 0) {
                    connection.release();
                    json = JSON.stringify({
                        'error': '6',
                        'message': 'Khong ton tai dinh danh may chu: ' + device_id_server
                    });
                    res.json(json);
                } else {
                    //ton tai server trong db
                    var site_id = result[0].site_id;
                    var server_id = result[0].id;

                    //check camera da ton tai hay chua
                    connection.query('select * from camera where device_id=?',
                        [device_id_camera], function (err, result) {
                            connection.release();
                            if (err) {
                                json = JSON.stringify({
                                    error: 1,
                                    message: err
                                });
                            } else {
                                console.log('select camera okie');
                                if (result.length > 0) {
                                    console.log('da ton tai camera');
                                    //da ton tai camera
                                    json = JSON.stringify({
                                        'error': '7',
                                        'message': 'Địa chỉ mac của camera đã tồn tại'
                                    });
                                    console.log(json);
                                } else {
                                    //chua ton tai camera 
                                    connection.query('insert into camera(site_id, device_id, server_id) values(?,?,?)', [site_id, device_id_camera, server_id],
                                        function (err, result) {
                                            // connection.release();
                                            if (err) {
                                                json = JSON.stringify({
                                                    error: 1,
                                                    message: err
                                                });
                                            }
                                            console.log('insert successfull');
                                        }
                                    )

                                    json = JSON.stringify({
                                        'error': '0',
                                        'message': 'Insert thành công'
                                    });
                                }
                            }
                            console.log('server_id ' + server_id);
                            console.log(json);
                            res.json(json);
                        }
                    );
                }

            }
        );

    } else {
        connection.release();
        console.log('Tham so khong dung');
        var json = JSON.stringify({
            'error': '5',
            'message': 'Tham so khong dung'
        });
        res.json(json);
    }
}

function loadTypeCamera(req, res, connection) {
    console.log('Start insertCamera' + getRanNumber(12));
    connection.query('select * from type_camera', function (err, result) {
        connection.release();
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {

            var listCam = '';
            for (cam in result) {
                listCam += result[cam].note + ':' + result[cam].name_type + ':' + result[cam].resolution + ';';
            }
            console.log("Get list cam ok");
            res.send(listCam);
        }
    }
    )
}

var getcamera = "SELECT ca.device_id,ca.ipcamera, tc.resolution, CASE  WHEN (ca.username IS NULL && ca.password IS NULL)||(ca.username='' && ca.password='') THEN"
    + " REPLACE(REPLACE(REPLACE(REPLACE(tc.template, '@ipaddress@', ca.ipcamera),'@user@',tc.username),'@pass@',tc.password),'@source@',tc.sub)"
    + " ELSE REPLACE(REPLACE(REPLACE(REPLACE(tc.template, '@ipaddress@', ca.ipcamera),'@user@',ca.username),'@pass@',ca.password),'@source@',tc.sub)"
    + " END rtsp_sub,"
    + " CASE"
    + " WHEN (ca.username IS NULL && ca.password IS NULL)|| (ca.username='' && ca.password='') THEN "
    + "	REPLACE(REPLACE(REPLACE(REPLACE(tc.template, '@ipaddress@', ca.ipcamera),'@user@',tc.username),'@pass@',tc.password),'@source@',tc.main)"
    + " ELSE"
    + "	REPLACE(REPLACE(REPLACE(REPLACE(tc.template, '@ipaddress@', ca.ipcamera),'@user@',ca.username),'@pass@',ca.password),'@source@',tc.main)"
    + " END rtsp_main"
    + " FROM camera ca INNER JOIN servers se on ca.server_id = se.id"
    + " INNER JOIN type_camera tc on ca.type_camere_id=tc.id "
    + " WHERE se.device_id= ? ";

function getAllCameraFromServer(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    connection.query(getcamera, [device_id_server], function (err, result) {
        connection.release();
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {
            var listCam = '';
            for (cam in result) {
                listCam += result[cam].device_id + ';' + result[cam].ipcamera + ';' + result[cam].rtsp_sub + ';' + result[cam].rtsp_main + ';' + result[cam].resolution + '\n';
            }
            console.log("Get list cam ok" + listCam);
            res.send(listCam);
        }
    }
    )
}

var async = require("async");

function updateIPCamera(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    var ipList = req.query.ip.split(';');
    var idCameraList = req.query.device_id_camera.split(';');
    if (ipList.length !== idCameraList.length) {
        res.json({ "code": 5, "status": "Tham so khong dung" });
    } else {

        //check camera in server
        var sqlSelect = "select a.* from servers a, camera b where a.site_id=b.site_id and"
            + " a.device_id=? and b.device_id=?";

        var json_log;
        var json_list = '{';
        // for (var i in idCameraList) {
        //     selectDB(res, connection, device_id_server, idCameraList[i], sqlSelect, ipList[i]);
        // }

        var db_log = '';
        var hasError = false;
        async.forEachOf(idCameraList, function (idCamera, key, callback) {

            // Perform operation on file here.
            console.log('Processing camera ' + idCamera);

            // selectDB(res, connection, device_id_server, idCamera, sqlSelect, ipList[key]);
            connection.query(sqlSelect, [device_id_server, idCamera], function (err, result) {

                if (err) {
                    res.json({ "code": 100, "status": "Error in connection database" });
                    console.log(err);
                    callback(err);
                } else {
                    console.log("Get list cam ok" + result);
                    console.log(idCamera + ' ip=' + ipList[key]);
                    // res.send(result);
                    if (result.length == 0) {
                        //khong ton tai camera o server, thong bao loi
                        // res.write('khong ton tai camera o server');
                        console.log("khong ton tai camera o server, thong bao loi");
                        db_log += "Tren server khong ton tai camera=" + idCamera + '\n';
                        hasError = true;
                        callback();
                    } else {
                        //ton tai camera tai server, insert du lieu 
                        console.log("insert du lieu ");
                        updateDB(res, connection, idCamera, ipList[key]);
                        db_log += "insert du lieu thanh cong cho camera:" + idCamera + '\n';
                        callback();
                    }

                }
            }
            )


        }, function (err) {
            // if any of the file processing produced an error, err would equal that error
            if (err) {
                // One of the iterations produced an error.
                // All processing will now stop.
                console.log('A file failed to process');
            } else {
                console.log('All files have been processed successfully');
                if (hasError) {
                    res.end(db_log);
                } else {
                    res.end('http://ipnet.cam9.tv/global-config.conf');
                }
                console.log(db_log);
                connection.release();
            }
        });




        // res.send(idCameraList);
    }
}

function selectDB(res, connection, device_id_server, device_id_camera, sqlSelect, ipcamera) {

    connection.query(sqlSelect, [device_id_server, device_id_camera], function (err, result) {

        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {
            console.log("Get list cam ok" + result);
            console.log(device_id_camera + ' ip=' + ipcamera);
            // res.send(result);
            if (result.length == 0) {
                //khong ton tai camera o server, thong bao loi
                // res.write('khong ton tai camera o server');
                console.log("khong ton tai camera o server, thong bao loi");
            } else {
                //ton tai camera tai server, insert du lieu 
                console.log("insert du lieu ");
                updateDB(res, connection, device_id_camera, ipcamera);
            }

        }
    }
    )
}

function updateDB(res, connection, device_id_camera, ipcamera) {
    var updateQuery = "update camera set ipcamera=? where device_id=?";
    connection.query(updateQuery, [ipcamera, device_id_camera], function (err, result) {
        if (err) {
            // res.send({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {
            // res.send('ok');
            console.log('update ip camera thanh cong');
        }
    }
    );
}


function getMaxCamera(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    var getmaxcameraQuery = "select maxcamera from servers where device_id = ?";
    connection.query(getmaxcameraQuery, [device_id_server], function (err, result) {
        connection.release();
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {
            if (result.length > 0) {
                console.log("Get max camera in server: " + result[0].maxcamera);
                res.send(result[0].maxcamera.toString());
            } else {
                res.send("not found server");
            }
        }
    }
    )
}

function handle_camera(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        console.log('connected as id ' + connection.threadId);
        var action = req.param('action');
        switch (action) {
            case 'load_type_camera':
                loadTypeCamera(req, res, connection);
                break;
            case 'insert':
                insertCamera(req, res, connection);
                break;
            case 'get_all_camera_from_server':
                getAllCameraFromServer(req, res, connection);
                break;
            case 'update_ip_camera':
                updateIPCamera(req, res, connection);
                break;
            case 'get_max_camera':
                getMaxCamera(req, res, connection);
                break;
            default:
                console.log('Do nothing');
                res.json({ "code": 101, "status": "do nothing" });
        }

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

app.get("/camera", function (req, res) {
    -
        handle_camera(req, res);
});

app.listen(3000);
