var async = require("async");
var mysql = require('mysql');
var output = '';

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'cp.cam9.tv',
    user: 'vp9',
    password: 'vp9@vnc',
    database: 'cp',
    debug: false
});


var module_id = '3-1.1.1;4-1.1.2';
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

async.parallel([
    function (callback) {
        getModuleNeedInstall(module_id_list, 31, callback);
    },
    function (callback) {
        getModuleNeedUpdate(module_id_list, module_version_list, 31, callback);
        // getModuleNeedRemove([2,3], callback);
    },
    function (callback) {
        getModuleNeedRemove(module_id_list, callback);
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
    });

//module which has in cms, not has in client
function getModuleNeedInstall(module_id_list, server_id, callback) {
    pool.getConnection(function (err, connection) {
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

                var listModuleNeedInstall = '';
                for (cam in result) {
                    listModuleNeedInstall += result[cam].module_id + ';install;' + result[cam].name
                        + ';' + result[cam].version + ';' + result[cam].lastupdate
                        + ';' + result[cam].path_file + ';' + result[cam].description + '\n';
                }
                console.log('getModuleNeedInstall: ' + listModuleNeedInstall);
                callback(null, listModuleNeedInstall);
            });
    });

}

//module which has in client, not has in cms
function getModuleNeedRemove(module_id_list, callback) {
    pool.getConnection(function (err, connection) {
        var db_log = '';
        async.forEachOf(module_id_list, function (moduleId, key, callback) {
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

    });
}

var checkVersionSql = "select * from module_view where module_id=? and server_id=? order by version";

//module which has in client, has in cms, and version in cms is newer 
function getModuleNeedUpdate(module_id_list, version_list, server_id, callback) {
    pool.getConnection(function (err, connection) {
        var db_log = '';
        var listModuleNeedInstall = '';
        async.forEachOf(module_id_list, function (moduleId, key, callback) {
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
                                    + ';' + result[cam].path_file + ';' + result[cam].description + '\n';
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
    });
}