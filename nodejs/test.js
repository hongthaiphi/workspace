var express = require('express');
var body = require('body-parser');
var cookie = require('cookie-parser');
var multu = require('multer');

var result = {site_id:34, site_name:'thai', chil:[]};
result.chil.push({site_id:10, site_name:'meo'});
result.chil.push({site_id:11, site_name:'11meo'});
console.log(result);
console.log('ok');
