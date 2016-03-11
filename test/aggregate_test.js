var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
process.env.MONGO_URL = 'mongodb://localhost/aggregate_test';
require(__dirname + '/../../server.js');
var mongoose = require('mongoose');

describe('twitter counting functionality', function(){
    after(function(done){
        mongoose.connection.db.dropDatabase(function(err){
            if(err) throw err;
            done();
        });
    });

    it('should update the twitter count', function(done){
        // needs test logic here
        done();
    });

    it('should count ever hour', function(done){
        // needs test logic here
        done();
    });
});
