const request = require('supertest');
const app = require('../app');


describe('GET /', () => {
  it('responds with Express', (done) => {
    request(app).get('/').expect('<!DOCTYPE html><html><head><title>Express</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Express</h1><p>Welcome to Express</p></body></html>', done);
  });
});
