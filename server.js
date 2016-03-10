var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect();
require('dotenv').config();

var scanRouter = require(__dirname + '/routes/scan_routes');
app.use('/api/scan', scanRouter);

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('server is running on port ' + port + ' !');
});
