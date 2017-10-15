const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('server', () => {

  describe('#GET /', () => {
    it('should return hello world', (done) => {
      request(app)
        .get('/')
        .expect('Hello world')
        .end(done);
    })
  });

it('should handle bad res GET /bad', (done) => {
  request(app)
    .get('/bad')
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'page not found'
      })
    })
    .end(done);
});

  describe('#GET /users', () => {
    it('should have user in array', (done) => {
      request(app)
        .get('/users')
        .expect((res) => {
          expect(res.body).toInclude({user: 'tim.urista'})
        })
        .end(done);
    });
  });
});
