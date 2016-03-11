var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../lib/handle_error');
var scanRouter = module.exports = exports = express.Router();
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret
});

// use http get to scan Twitter API for keywords
scanRouter.get('search/tweets', function(req, res){
    T.find({q: 'sendachi', tweetCount: 100}, {q: 'devops', tweetCount: 100}, function(err, data){
        if(err) return handleError(err, res);
        res.json(data);
    });
});

// posting keyword twitter count to specified URL
scanRouter.post('http://keywords.example.com/v1/keyword/%keyword-text%/', jsonParser, function(req, res){
    // more logic missing here
    T.save('keywords', function(err, data){
        if(err) return handleError(err, res);
        res.json(data);
    })
});
