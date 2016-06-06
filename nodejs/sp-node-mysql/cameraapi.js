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
    var cpu_temp = req.query.cpu_temp;
    var free_space = req.query.free_space;
    console.log('device_id: ' + server_format);

    var currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(currentTime);

    if (server_format !== 'undefined' && server_format) {

        connection.query('UPDATE servers set lastupdatetime=sysdate(), cpu_temp=?, free_space=? where device_id=?',
            [cpu_temp, free_space, server_format], function (err, result) {
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

var fs = require("fs");

function handle_telegram(req, res) {
    var msg = req.param('msg');
    var token = req.param('token');
    var toChatId = req.param('sendTo');
    if (toChatId !== 'undefined' && toChatId) {
    } else {
        console.log('thieu tham so');
        res.end('thieu tham so');
        return;
    }
    console.log(toChatId);
    var haveToken = false;
    var send_token = 'AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U UkcLqjmBJOY5 6x5CvEh6fGTY Km2RUT4reQuq 31hA5rgmuUhz';
    send_token += ' sd45KRzzylyE BJtZIDrpcljn cEJVoRQ2vV4R 77JF41TCwFd0 oIQsNh8ocDlc rjFqhgMr1QH5';
    var arr = send_token.split(" ");
    for (var i in arr)
        if (token == arr[i]) {
            console.log('Send to Telegram: ' + msg);
            var tg = require('telegram-node-bot')('196991041:AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U')
            var date = new Date();
            var currentTime = new Date().toString();
            // tg.sendMessage(-128035466, "I am Robot. Chao VP9 Team, bay gio la " + currentTime);
            tg.sendMessage(toChatId, msg);
            var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });
            logStream.write(msg + " " + req.connection.remoteAddress);
            console.log(req.connection.remoteAddress);
            logStream.end();
            haveToken = true;
            res.end('ok');
        }
    if (!haveToken) {
        res.end('wrong token');
    }
}

function updateLastUpdateModule(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    var module_id = req.query.module_id;
    if (device_id_server !== 'undefined' && device_id_server && module_id !== 'undefined' && module_id) {
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
                    console.log('server_id: ' + server_id);
                    connection.query('update server_module set status_last_update = sysdate() where server_id=? and module_id=?',
                        [server_id, module_id],
                        function (err, result) {
                            connection.release();
                            // connection.release();
                            if (err) {
                                console.log(err);
                                json = JSON.stringify({
                                    error: 1,
                                    message: err
                                });
                                res.json(json);
                            }

                            if (result.changedRows > 0) {
                                var json = JSON.stringify({
                                    error: 0,
                                    message: 'Cập nhật thành công '
                                });
                            } else {
                                var json = JSON.stringify({
                                    'error': '1',
                                    'message': 'Không tồn tại module_id: ' + module_id
                                });
                            }
                            console.log(json);
                            res.json(json);
                        }
                    )

                }
            });

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

function insertServer(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    var hostname = req.query.hostname;
    var site_id = req.query.siteId;
    if (device_id_server !== 'undefined' && device_id_server && site_id !== 'undefined' && site_id) {

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
                if (result.length > 0) {
                    connection.release();
                    json = JSON.stringify({
                        'error': '16',
                        'message': 'Đã tồn tại dinh danh may chu: ' + device_id_server
                    });
                    res.json(json);
                } else {
                    connection.query('insert into servers(site_id, device_id, position_setup, create_date, user_create, lastupdatetime) ' +
                        'values(?,?,?, sysdate(), "auto", sysdate())', [site_id, device_id_server, hostname],
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
                    res.json(json);
                }
            })
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
            case 'insertServer':
                insertServer(req, res, connection);
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

var getlastversion = "SELECT A1.name, A1.description, A1.version, unix_timestamp(A1.lastupdate) lastupdate,A1.path_file,A1.module_id FROM "
    + " (SELECT m.name, m.description, CONCAT(mv.version_x,'.',mv.version_y,'.',mv.version_z)version, mv.lastupdate, mv.path_file, mv.module_id"
    + " FROM servers s, server_module sm, module m, module_version mv"
    + " where s.id=sm.server_id and sm.module_id=m.id and mv.module_id = sm.module_id  and s.device_id=?)A1,"
    + " (SELECT A.module_id,MAX(A.version)version"
    + " FROM (SELECT module_id,id, concat(version_x,'.',version_y,'.',version_z) version FROM module_version)A"
    + " GROUP BY A.module_id)A2"
    + " WHERE A1.module_id = A2.module_id and A1.version = A2.version order by module_id";


function getLastVersion(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    connection.query(getlastversion, [device_id_server], function (err, result) {
        connection.release();
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {
            var listCam = '';
            for (cam in result) {
                listCam += result[cam].module_id + ';install;' + result[cam].name +';'+   result[cam].version + ';' + result[cam].lastupdate + ';' + result[cam].path_file + ';"' + result[cam].description + '";' + '\n';
            }
            console.log("Get last version successfully " + listCam);
            res.send(listCam);
        }
    }
    )
}

var getmodulesql = "SELECT A1.name,A1.version, unix_timestamp(A1.lastupdate) lastupdate,A1.path_file,A1.module_id FROM "
    + " (SELECT m.name, CONCAT(mv.version_x,'.',mv.version_y,'.',mv.version_z)version, mv.lastupdate, mv.path_file, mv.module_id"
    + " FROM servers s, server_module sm, module m, module_version mv"
    + " where s.id=sm.server_id and sm.module_id=m.id and mv.module_id = sm.module_id  and s.device_id=? and m.id=1)A1,"
    + " (SELECT A.module_id,MAX(A.version)version"
    + " FROM (SELECT module_id,id, concat(version_x,'.',version_y,'.',version_z) version FROM module_version)A"
    + " GROUP BY A.module_id)A2"
    + " WHERE A1.module_id = A2.module_id and A1.version = A2.version";
function getModule(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    connection.query(getmodulesql, [device_id_server], function (err, result) {
        connection.release();
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {
            var listCam = '';
            for (cam in result) {
                listCam += result[cam].version + ';' + result[cam].path_file + '\n';
            }
            console.log("Get last version successfully " + listCam);
            res.send(listCam);
        }
    }
    )
}


var comapare_version_sql = "select a.name, a.description, a.version, a.lastupdate, a.path_file, a.module_id from"
    + "(SELECT m.name, m.description, CONCAT(mv.version_x,'.',mv.version_y,'.',mv.version_z)version, unix_timestamp(mv.lastupdate) lastupdate,"
    + "mv.path_file, mv.module_id  FROM servers s, server_module sm, module m, module_version mv where s.id=sm.server_id and "
    + "sm.module_id=m.id and mv.module_id = sm.module_id and s.device_id=?) a where a.version > ? "
    + "and a.module_id=?";
function compareVersion(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    var current_version = req.query.current_version;
    var module_id = req.query.module_id;
    connection.query(comapare_version_sql, [device_id_server, current_version, module_id], function (err, result) {
        connection.release();
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            console.log(err);
        } else {
            var listCam = '';
            for (cam in result) {
                listCam += result[cam].module_id + ';"' + result[cam].name + ';"' + result[cam].description + '";' + result[cam].version + ';' + result[cam].lastupdate + ';' + result[cam].path_file + '\n';
            }
            console.log("Get newer version successfully " + listCam);
            res.send(listCam);
        }
    }
    )
}


function updateInstallRemoveModule(req, res, connection) {
    var device_id_server = req.query.device_id_server;
    var module_id = req.query.module_id;
    var module_array = module_id.split(';');
    var module_id_list = [];
    var module_version_list = [];
    var module_id_list_string = '';
    for (var i in module_array) {
        var per_array = module_array[i].split('-');
        if (per_array.length == 2) {
            module_id_list.push(per_array[0]);
            module_version_list.push(per_array[1]);
        }
    }
    console.log('module_id_list: ' + module_id_list);
    console.log('module_version_list: ' + module_version_list);

    if (device_id_server !== 'undefined' && device_id_server && module_id !== 'undefined' && module_id) {
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

                if (result.length == 0) {
                    connection.release();
                    json = JSON.stringify({
                        'error': '6',
                        'message': 'Khong ton tai dinh danh may chu: ' + device_id_server
                    });
                    res.json(json);
                } else {
                    var server_id = result[0].server_id;
                    //chinh thuc xu li
                    async.parallel([
                        function (callback) {
                            getModuleNeedInstall(module_id_list, 31, callback, connection);
                        },
                        function (callback) {
                            getModuleNeedUpdate(module_id_list, module_version_list, 31, callback, connection);
                            // getModuleNeedRemove([2,3], callback);
                        },
                        function (callback) {
                            getModuleNeedRemove(module_id_list, callback, connection);
                        }
                    ],
                        // optional callback

                        function (err, results) {
                            // the results array will equal ['one','two'] even though
                            // the second function had a shorter timeout.
                            var finalResult = '';
                            for (resultItem in results) {
                                finalResult += results[resultItem];
                            }
                            console.log('final: ' + finalResult);
                            res.send(finalResult);
                        });
                }
            })
    }
}


    //module which has in cms, not has in client
    function getModuleNeedInstall(module_id_list, server_id, callback, connection) {
            connection.query('select * from module_view where server_id=? and module_id not in (?)',
                [server_id, module_id_list],
                function (err, result) {
                    var json;
                    if (err) {
                        console.log(err);
                        connection.release();
                        json = JSON.stringify({
                            error: 1,
                            message: err
                        });
                    }
                    connection.release();
                    var listModuleNeedInstall = '';
                    for (cam in result) {
                        listModuleNeedInstall += result[cam].module_id + ';install;' + result[cam].name
                            + ';' + result[cam].version + ';' + result[cam].lastupdate
                            + ';' + result[cam].path_file + ';"' + result[cam].description + '"\n';
                    }
                    console.log('getModuleNeedInstall: ' + listModuleNeedInstall);
                    callback(null, listModuleNeedInstall);
                });
    }

    //module which has in client, not has in cms
    function getModuleNeedRemove(module_id_list, callback, connection) {
            var db_log = '';
            async.forEachOf(module_id_list, function (moduleId, key, callback) {

                // Perform operation on file here.
                console.log('Processing camera ' + moduleId);

                // selectDB(res, connection, device_id_server, idCamera, sqlSelect, ipList[key]);
                connection.query("select * from module_view where module_id=? ", [moduleId], function (err, result) {
                    
                    if (err) {
                        console.log(err);
                        callback(err);
                    } else {
                        // res.send(result);
                        if (result.length == 0) {
                            //khong ton tai camera o server, thong bao loi
                            // res.write('khong ton tai camera o server');
                            db_log += moduleId + ";remove\n";
                            callback(null, db_log);
                        } else {
                            callback(null);
                        }
                    }
                }
                )


            }, function (err) {
                console.log('getModuleNeedRemove:' + db_log);
                callback(null, db_log);
            });

    }

    var checkVersionSql = "select * from module_view where module_id=? and server_id=? order by version";

    //module which has in client, has in cms, and version in cms is newer 
    function getModuleNeedUpdate(module_id_list, version_list, server_id, callback, connection) {
            var db_log = '';
            var listModuleNeedInstall = '';
            async.forEachOf(module_id_list, function (moduleId, key, callback) {

                // Perform operation on file here.
                console.log('Processing camera ' + moduleId);

                // selectDB(res, connection, device_id_server, idCamera, sqlSelect, ipList[key]);
                connection.query(checkVersionSql, [moduleId, server_id], function (err, result) {
                    
                    if (err) {
                        console.log(err);
                        callback(err);
                    } else {
                        // res.send(result);
                        if (result.length == 1) {
                            if (result[0].version !== version_list[key]) {
                                console.log("Co sự thay đổi phiên bản: " + moduleId);


                                for (cam in result) {
                                    listModuleNeedInstall += result[cam].module_id + ';update;' + result[cam].name
                                        + ';' + result[cam].version + ';' + result[cam].lastupdate
                                        + ';' + result[cam].path_file + ';"' + result[cam].description + '"\n';
                                }

                                callback(null, listModuleNeedInstall);
                            }
                        } else {
                            console.log("Khong tim thay ban ghi");
                            callback(null);
                        }
                    }
                }
                )
            }, function (err) {
                console.log('getModuleNeedUpdate: ' + listModuleNeedInstall);
                callback(null, listModuleNeedInstall);
            });
    }

    function handle_module(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                res.json({ "code": 100, "status": "Error in connection database" });
                return;
            }
            console.log('connected as id ' + connection.threadId);
            var action = req.param('action');
            switch (action) {
                case 'get_latest_version':
                    getLastVersion(req, res, connection);
                    break;
                case 'get_module':
                    getModule(req, res, connection);
                    break;
                case 'compare_version':
                    compareVersion(req, res, connection);
                    break;
                case 'updateModuleStatus':
                    updateInstallRemoveModule(req, res, connection);
                    break;
                case 'updateLastUpdateModule':
                    updateLastUpdateModule(req, res, connection);
                    break;
                default:
                    console.log('Do nothing');
                    connection.release();
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

    app.get("/module", function (req, res) {
        -
            handle_module(req, res);
    });


    app.listen(3000);
