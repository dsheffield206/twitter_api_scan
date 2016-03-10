var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../lib/handle_error');
var scanRouter = module.exports = exports = express.Router();
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret
});

scanRouter.get('/', function(req, res){

});
