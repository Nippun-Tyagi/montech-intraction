const request = require('supertest');
const app = require('../app');

test('Add New User', async ()=>{
    await request(app).post('/api/v1/User')
    .send({
        "name": "Nippun",
        "email": "nippun.tyagi+1@oodles.io",
        "type": "Author"
      }).expect(200)
})