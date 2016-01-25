var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var smoke = require('./smoke.js');

chai.use(chaiHttp);

describe('smoke', function() {
  var output = smoke.app;

  it('should return status 200', function(done) {
    chai.request(output)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
