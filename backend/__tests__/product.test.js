const request = require('supertest')
const app = require("../app");

it('respond with json containing a list of all products', done=>{
    request(app)
    .get('/api/v1/products')
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200,done)
})