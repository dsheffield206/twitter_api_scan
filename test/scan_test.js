var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
process.env.MONGO_URL = 'mongodb://localhost/scan_test';
require(__dirname + '/../../server.js');
var mongoose = require('mongoose');
var url = 'localhost:3000/api';

describe('twitter scan api', function(){
    after(function(done){
        mongoose.connection.db.dropDatabase(function(err){
            if(err) throw err;
            done();
        });
    });

    it('should get selected tweets from twitter', function(done){
        chai.request(url)
            .get('/search/tweets')
            .end(function(err, res){
                expect(err).to.eql(null);
                done();
            });
    });
});
