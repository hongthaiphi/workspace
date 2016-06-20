var express = require("express");
var mysql = require('mysql');
var app = express();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
app.set('superSecret', 'vp9vietnamgoglobal'); // secret variable

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'cp.cam9.tv',
    user: 'vp9',
    password: 'vp9@vnc',
    database: 'cp',
    debug: false
});


function doLogin(req, res, connection) {
    var username = req.query.username;
    var phone = req.query.phone;
    var email = req.query.email;
    var password = req.query.password;
    var selectQuery = 'select * from users where password=? and ';
    var identifier = '';
    var error = 0;
    if (!password || password == 'undefined') {
        console.log('no has password');
        error++;
    } else {
        if (username && username !== 'undefined') {
            console.log('username');
            selectQuery += ' username = ? ';
            identifier = username;
        } else if (phone && phone !== 'undefined') {
            console.log('phone');
            selectQuery += ' phone_number = ? ';
            identifier = phone;
        } else if (email && email !== 'undefined') {
            console.log('email');
            selectQuery += ' email = ? ';
            identifier = email;
        } else {
            console.log('no enough parameter');
            error++;
        }
    }

    if (error == 0) {
        connection.query(selectQuery, [password, identifier], function (err, result) {

                if (err) {
                    res.json({"code": 100, "status": "Error in connection database"});
                    connection.release();
                    console.log(err);
                } else {
                    if (result.length == 1) {
                        loginSuccessfull(result, res, connection);
                    } else {
                        console.log("Login unsuccessful");
                        res.json({"code": 100, "status": "Invalid username or password"});
                        connection.release();
                    }

                }

            }
        )
    } else {
        connection.release();
        res.json({"code": 100, "status": "API Paramaters are not enough"});
    }
}

function getSiteList(result, current_site_id) {
    var site_name = '';
    var site_address = '';
    var children = [];
    for (var key in result) {
        if (result[key].id == current_site_id) {
            site_name = result[key].owner;
            site_address = result[key].address;
        } else {
            children.push({site_id: result[key].id, site_name: result[key].owner, site_address: result[key].address});
        }
    }
    var result_site_json = {
        site_id: current_site_id,
        site_name: site_name,
        site_address: site_address,
        children: children
    }
    console.log(result_site_json);
    return result_site_json;
}

function loginSuccessfull(result, res, connection) {
    console.log("Login successful");
    var user = result[0];
    var site_id = result[0].id_sites;

    //now I will get current site and child site 
    var sqlQuery = 'select * from sites where id=? or parent_id=?';
    connection.query(sqlQuery, [site_id, site_id], function (err, result) {
        if (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            connection.release();
            console.log(err);
        } else {
            // if user is found and password is right
            // create a token
            connection.release();
            var siteList = getSiteList(result, site_id);
            var token = jwt.sign(user, app.get('superSecret'), {
                expiresIn: 86400 // expires in 24 hours
            });

            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                site: siteList
            });
        }
    })
}

function getListSiteFromCurrent(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        var site_id = req.param('site_id');
        console.log("site_id: " + site_id);
        if (site_id == null) {
            connection.release();
            res.json({"code": 1030, "status": "Missing site_id"});
            return;
        }

        // res.json({ "code": 10000, "status": "Here is your list" });
        var sqlQuery = 'select * from sites where id=? or parent_id=?';
        connection.query(sqlQuery, [site_id, site_id], function (err, result) {
            connection.release();
            if (err) {
                res.json({"code": 100, "status": "Error in connection database"});
                console.log(err);
            } else {
                // if user is found and password is right
                // create a token
                var siteList = getSiteList(result, site_id);
                console.log('now now');
                res.json({
                    site: siteList
                });
            }
        })


        console.log('connected as id ' + connection.threadId);


        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        });
    });
}

function getListCameraToJSON(result, current_site_id) {
    if (result.length > 0){
    var site_name = result[0].site_name;
    var children = [];
    for (var key in result) {
        children.push({
            camera_id: result[key].camera_id, position_setup: result[key].position_setup,
            device_id: result[key].device_id, server_id: result[key].server_id
        });
    }
    var result_site_json = {
        site_id: current_site_id,
        site_name: site_name,
        list_camera: children
    }
    console.log(result_site_json);
    return result_site_json;
    }else return {}
}


function getListCamera(req, res) {
    pool.getConnection(function (err, connection) {
        var site_id = req.param('site_id');
        if (site_id == null) {
            connection.release();
            res.json({"code": 1030, "status": "Missing site_id"});
            return;
        }

        var sqlQuery = 'SELECT s.owner site_name, cam.site_id,cam.id camera_id, cam.position_setup,' +
            'REPLACE(cam.device_id,":","")device_id,cam.server_id FROM camera cam, sites s' +
            ' WHERE cam.site_id = ? and cam.site_id=s.id ;';
        connection.query(sqlQuery, [site_id], function (err, result) {
            connection.release();
            if (err) {
                res.json({"code": 100, "status": "Error in connection database"});
                console.log(err);
            } else {
                res.json(
                    getListCameraToJSON(result, site_id)
                );
            }
        })
    })
}


function getListCamURL(req, res) {
    pool.getConnection(function (err, connection) {
        var site_id = req.param('site_id');
        var camera_id = req.param('camera_id');
        var server_id = req.param('server_id');
        if (site_id == null || camera_id == null || server_id == null) {
            connection.release();
            res.json({"code": 1030, "status": "Missing parameter"});
            return;
        }

        var sqlQuery = 'SELECT cs.id,cs.src,oc.name FROM channel_src cs, output_camera oc WHERE ' +
            'site_id = ? and cs.camera_id = ? and server_id=? and cs.output_camera_id = oc.id;';
        connection.query(sqlQuery, [site_id, camera_id, server_id], function (err, result) {
            connection.release();
            if (err) {
                res.json({"code": 100, "status": "Error in connection database"});
                console.log(err);
            } else {
                // if user is found and password is right
                // create a token
                res.json(
                    result
                );
            }
        })
    })
}

function handle_login(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        var action = req.query.action;
        switch (action) {
            case 'login':
                doLogin(req, res, connection);
                break;
            default:
                console.log('Do nothing');
                connection.release();
                res.json({"code": 101, "status": "do nothing"});
        }
        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        });
    });
}

var RateLimit = require('express-rate-limit');

var apiLimiter = new RateLimit({
    windowsMs: 1 * 60 * 1000,
    max: 60,
    delayMs: 0,
    message: "Too many request to API"
});
var apiRoutes = express.Router();
app.get("/login", apiLimiter, function (req, res) {
    -
        handle_login(req, res);
});


// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.param('token');

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }

});


apiRoutes.get('/', function (req, res) {
    res.json({success: "true", message: 'Authenticate successful.'});
});

// apiRoutes.get('/users', function (req, res) {
//     res.json({ message: 'usersusersusersusersusers' });
// });

apiRoutes.get('/check', function (req, res) {
    res.json(req.decoded);
});

apiRoutes.get('/getSite', function (req, res) {
    getListSiteFromCurrent(req, res);
})

apiRoutes.get('/getCamera', function (req, res) {
    getListCamera(req, res);
})

apiRoutes.get('/getCamURL', function (req, res) {
    getListCamURL(req, res);
})


app.use('/cms_api', apiRoutes);
app.listen(3002);