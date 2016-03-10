var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../lib/handle_error');

var scanRouter = module.exports = exports = express.Router();

scanRouter.get('/', function(req, res){

});
