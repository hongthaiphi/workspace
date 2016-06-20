//require the dependences we installed
var app = require('express')();
var mysql = require('mysql');
var responseTime = require('response-time');
var redis = require('redis');
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'cp.cam9.tv',
    user: 'vp9',
    password: 'vp9@vnc',
    database: 'cp',
    debug: false
});
//create a new redis client and connnect to our local redis instance
var client = redis.createClient();

//if an error occurs, print it to the console
client.on('error', function (err) {
    console.log("Error " + err);
});

app.set('port', (process.env.PORT || 5000));
//set up the response-time middleware
app.use(responseTime());


//add up all the stars and return the total number of stars across all repositories
function computeTotalStars(repositories) {
    return repositories.data.reduce(function (prev, curr) {
        return prev + curr.stargagers_count
    },0)
}

//if a user visit /api/facebook, return the total number of stars 'facebook' 
//has across all it's public repositories on GitHub
app.get('/api', function (req, res) {
    //get the username parameter in URL
    // i.e.: username = "coligo-io" in http://localhost:5000/api/coligo-io
    var site_id = req.query.site_id;
    console.log(site_id);
    //use the redis client to get the total number of stars associated to that
    //username from our redis cache
    client.get(site_id, function (error, result) {
        if (result){
            //the result exists in our cache - return it to our user immediately
            res.send({"result":JSON.parse(result), "source":"redis cache"});
        }else{
            
            getFromMySQL(res, site_id);
        }
    });
});

function getFromMySQL(res, site_id) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        connection.query('select * from sites where id=?', [site_id], function (err, result) {
            processResult(res, err, result, site_id);
            connection.release();
        })
    })
}

function processResult(res, err, result, site_id) {
    if (err){
        res.json({ "code": 100, "status": err });
        return
    }
    res.json({ "result": result, "source":"MySQL" });
    client.setex(site_id, 600, JSON.stringify(result));
}

app.listen(app.get('port'), function () {
    console.log('Server listening on port: ', app.get('port'));
})