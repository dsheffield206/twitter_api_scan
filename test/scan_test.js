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

    it('should post updated tweet counts', function(done){
        chai.request(url)
            .post('http://keywords.example.com/v1/keyword/%keyword-text%/')
            .send({q: 'tweet testing'})
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.body.q).to.eql.('tweet testing');
                done();
            });
    });
});
